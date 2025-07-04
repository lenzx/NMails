import ChargeIcon from '../../../assets/ChargeFile.png'

const ChargeFileTransition = ({}) => {
  return (
    <div className='flex flex-col items-center justify-center p-6 text-center'>
      <h2 className='mb-4 text-lg font-semibold'>Prompty</h2>
      <img src={ChargeIcon} alt='Upload' className='mb-6 h-24 w-24' />
      <p className='mb-2 font-medium'>Estoy subiendo tu archivo...</p>
      <div className='mb-2 h-2 w-full rounded-full bg-gray-200'>
        <div
          className='h-2 rounded-full bg-blue-500'
          style={{ width: `%` }}></div>
      </div>
      <p className='mb-6 text-xs text-gray-500'>📎 {}</p>
      <button
        onClick={() => console.log('test')}
        className='text-sm text-gray-400 underline'>
        Cancelar
      </button>
    </div>
  )
}

export default ChargeFileTransition
