import { useState } from 'react'

const EmailPreview = () => {
  const [rating, setRating] = useState<number>(4)
  const [recommendation, setRecommendation] = useState<string | null>(null)
  const [comment, setComment] = useState('')

  const handleSubmit = () => {
    // Lógica de envío o vista previa final
    alert('Formulario enviado')
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-start bg-white p-6 text-center font-sans'>
      {/* Encabezado */}
      <h1 className='mb-1 text-xl font-semibold'>Prompty</h1>
      <hr className='mb-4 w-12 border-t-2 border-gray-200' />

      {/* Título */}
      <h2 className='mb-4 text-lg font-semibold'>Así quedaría tu correo</h2>

      {/* Contenedor de preview */}
      <div className='w-full max-w-sm rounded-xl border-2 border-blue-300 p-4 text-left text-[15px]'>
        <p className='mb-1 font-semibold'>
          ¿Cómo fue tu experiencia con nosotros?
        </p>
        <p className='mb-4 text-sm'>
          Queremos saber cómo te sentiste con tu compra y atención. Tu opinión
          nos ayuda a mejorar ✨
        </p>

        {/* Pregunta 1 */}
        <p className='mb-1'>
          1. ¿Qué tan conforme estás con el producto que recibiste?
        </p>
        <div className='mb-4 flex'>
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`cursor-pointer text-2xl ${i <= rating ? 'text-orange-400' : 'text-gray-300'}`}
              onClick={() => setRating(i)}>
              ★
            </span>
          ))}
        </div>

        {/* Pregunta 2 */}
        <p className='mb-1'>2. ¿Nos recomendarías a un amigo o colega?</p>
        <div className='mb-4 space-y-1'>
          {['Sí', 'Tal vez', 'No'].map((option) => (
            <label
              key={option}
              className='flex cursor-pointer items-center gap-2 text-sm'>
              <input
                type='radio'
                name='recommendation'
                value={option}
                checked={recommendation === option}
                onChange={() => setRecommendation(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>

        {/* Comentario */}
        <div className='mb-4'>
          <label htmlFor='comment' className='text-sm'>
            Déjanos tu comentario (Opcional):
          </label>
          <textarea
            id='comment'
            className='mt-1 h-20 w-full resize-none rounded border border-gray-300 p-2'
            placeholder='Escribe aquí tu comentario...'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        {/* Botón enviar dentro del preview */}
        <div className='text-right'>
          <button
            className='bg-transparent font-semibold text-black'
            onClick={handleSubmit}>
            Enviar
          </button>
        </div>
      </div>

      {/* Botones inferiores */}
      <div className='mt-6 flex w-full max-w-sm justify-between'>
        <button className='text-gray-500'>Editar</button>
        <button className='rounded-full bg-blue-100 px-4 py-2 font-medium text-blue-600'>
          Enviar
        </button>
      </div>
    </div>
  )
}

export default EmailPreview
