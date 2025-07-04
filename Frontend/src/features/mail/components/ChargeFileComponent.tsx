import React from 'react'
import { useFormStore } from '../../../store/useFormStore'
import type { FormStore } from '../../../store/useFormStore'

const ChargeFileComponent = () => {
  interface FileChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

  const setFile = useFormStore((state: FormStore) => state.setFile)

  const handleFileChange = (e: FileChangeEvent): void => {
    const file: File | null = e.target.files ? e.target.files[0] : null
    if (file) {
      console.log('Archivo seleccionado:', file.name)
      setFile(file.name) // Actualiza el estado global con el nombre del archivo
    }
  }

  return (
    <div className='flex flex-col justify-between px-6 py-10'>
      <div className='flex flex-col items-center text-center'>
        <h2 className='text-xl font-semibold text-gray-900'>
          Personaliza tus correos
          <br />
          con datos relevantes
        </h2>
        <p className='mt-2 text-sm text-gray-500'>
          Este paso es opcional, pero ayuda a que la IA genere
          <br />
          contenido personalizado a tu tipo de cliente.
        </p>

        <label className='mt-6'>
          <input type='file' onChange={handleFileChange} className='hidden' />
          <div className='inline-block cursor-pointer rounded-lg border border-blue-300 bg-white px-4 py-2 font-medium text-blue-600 shadow transition hover:bg-blue-50'>
            Seleccionar Archivo
          </div>
        </label>
      </div>
    </div>
  )
}

export default ChargeFileComponent
