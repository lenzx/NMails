import React from 'react'
import { useFormStore } from '../../../store/useFormStore'

type InfoType =
  | 'Preguntas Frecuentes'
  | 'Perfil de cliente'
  | 'Catálogo de productos'
  | 'Otro'

const infoOptions: InfoType[] = [
  'Preguntas Frecuentes',
  'Perfil de cliente',
  'Catálogo de productos',
  'Otro',
]

const TypeFile = () => {
  const fileName = useFormStore((state) => state.fileName)
  const infoTypes = useFormStore((state) => state.infoTypes)
  const setFile = useFormStore((state) => state.setFile)
  const toggleInfoType = useFormStore((state) => state.toggleInfoType)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFile(file.name)
    }
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-white p-6 text-center font-sans'>
      <h1 className='mb-1 text-xl font-semibold'>Prompty</h1>
      <hr className='mb-6 w-12 border-t-2 border-gray-200' />

      <h2 className='mb-6 text-lg font-semibold'>
        Personaliza tus correos <br />
        con datos relevantes
      </h2>

      <label className='mb-2 cursor-pointer rounded bg-gray-400 px-4 py-2 text-white'>
        Seleccionar Archivo
        <input type='file' className='hidden' onChange={handleFileChange} />
      </label>

      {fileName && (
        <p className='mb-4 text-sm text-gray-700'>
          📎 Archivo cargado:{' '}
          <span className='text-green-600'>{fileName} ✅</span>
        </p>
      )}

      <div className='mb-6 w-full max-w-xs text-left'>
        <p className='mb-3 font-medium'>
          ¿Qué tipo de información estás subiendo?
        </p>
        {infoOptions.map((option) => (
          <label key={option} className='mb-2 flex cursor-pointer items-center'>
            <input
              type='checkbox'
              checked={infoTypes.includes(option)}
              onChange={() => toggleInfoType(option)}
              className='mr-2 h-4 w-4 accent-blue-500'
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default TypeFile
