import ThinkingIcon from '../../../assets/thinking.png'

const Thinking = () => {
  return (
    <div className='flex flex-col items-center justify-center p-6 text-center'>
      <h2 className='mb-4 text-lg font-semibold'>Prompty</h2>
      <p className='mb-4 text-xs text-gray-500'>
        💡 Tip Prompty: Las mejores campañas comienzan con un buen primer
        mensaje 😊
      </p>
      <img src={ThinkingIcon} alt='Thinking bot' className='mb-6 h-28 w-28' />
      <p className='mb-4 font-medium'>Prompty está pensando...</p>
      <button
        onClick={() => console.log('Cancelar pensando')}
        className='rounded-full bg-gray-200 px-4 py-1 text-sm text-gray-600'>
        Cancelar
      </button>
    </div>
  )
}

export default Thinking
