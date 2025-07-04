import Icon from './../../../assets/promptyIcon.jpg'

const WelcomeScreen = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className='flex flex-col items-center justify-center bg-white px-6 text-center'>
      {/* Icono del bot */}
      <img src={Icon} alt='Prompty Bot' className='' />

      {/* Título */}
      <h1 className='mb-2 text-3xl font-bold text-gray-900'>Prompty</h1>

      {/* Subtítulo */}
      <p className='mb-8 text-sm text-gray-600'>
        Mails para tu PyME de manera <br />
        simple, rápida e inteligente.
      </p>

      {/* Botón */}
      <button
        onClick={onNext}
        className='rounded-full border border-gray-200 bg-white px-6 py-2 text-blue-600 shadow-md transition hover:bg-gray-50'>
        Siguiente
      </button>
    </div>
  )
}

export default WelcomeScreen
