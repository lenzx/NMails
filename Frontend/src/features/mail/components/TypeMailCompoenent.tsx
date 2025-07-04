import { useFormStore } from '../../../store/useFormStore'
import type { MailType } from '../../../store/useFormStore'

const emailTypes: { label: string; value: MailType }[] = [
  { label: 'Email de bienvenida', value: 'welcome' },
  { label: 'Seguimiento de la compra', value: 'orderTracking' },
  { label: 'Encuesta de satisfacción', value: 'satisfactionSurvey' },
  { label: 'Programa de referidos', value: 'referralProgram' },
  { label: 'Reemplazo de producto', value: 'productReplacement' },
]

const EmailTypeStep = () => {
  const mailType = useFormStore((state) => state.mailType)
  const setMailType = useFormStore((state) => state.setMailType)

  const description = useFormStore((state) => state.description)
  const setDescription = useFormStore((state) => state.setDescription)

  return (
    <div className='flex min-h-screen flex-col items-center justify-start bg-white p-6 text-center font-sans'>
      <h1 className='mb-1 text-xl font-semibold'>Prompty</h1>
      <hr className='mb-6 w-12 border-t-2 border-gray-200' />

      <h2 className='mb-6 text-lg font-semibold'>
        Indica el tipo de correo <br />a generar
      </h2>

      <div className='mb-2 w-full max-w-xs text-left'>
        <select
          value={mailType ?? ''}
          onChange={(e) => setMailType(e.target.value as MailType)}
          className='w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none'>
          <option value='' disabled>
            Selecciona una opción
          </option>
          {emailTypes.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <p className='mt-1 text-sm text-gray-500'>Selecciona de la lista</p>
      </div>

      <div className='mt-4 mb-6 w-full max-w-xs text-left'>
        <p className='mb-2 font-medium'>¿Qué mail quieres generar?</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Describe aquí tu idea'
          className='h-32 w-full resize-none rounded border border-gray-300 p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none'
        />
      </div>
    </div>
  )
}

export default EmailTypeStep
