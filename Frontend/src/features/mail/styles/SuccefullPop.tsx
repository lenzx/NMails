const Succefull = () => {
  return (
    <div className='flex w-72 flex-col items-center justify-center rounded-xl bg-white p-4 shadow-md'>
      <div className='mb-2 text-2xl text-blue-500'>✔️</div>
      <p className='mb-4 text-center text-sm font-medium'>
        Tu correo ha sido enviado exitosamente
      </p>
      <button
        onClick={() => console.log('Aceptar')}
        className='text-sm text-blue-600 hover:underline'>
        Aceptar
      </button>
    </div>
  )
}

export default Succefull
