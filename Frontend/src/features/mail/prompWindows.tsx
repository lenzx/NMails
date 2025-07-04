import { useState } from 'react'
import Welcome from './components/WelcomeComponent'
import ChargeFile from './components/ChargeFileComponent'
import TypeFile from './components/TypeFileComponent'
import TypeMail from './components/TypeMailCompoenent'
import Preview from './components/PreviewComponent'

const steps = [Welcome, ChargeFile, TypeFile, TypeMail, Preview]

const PromptWizard = () => {
  const [step, setStep] = useState(0)
  const StepComponent = steps[step]

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  return (
    <div className='mx-auto w-full max-w-xl'>
      <StepComponent onNext={next} />

      {/* Navigation buttons */}
      {step > 0 && (
        <div className='mt-4 flex justify-between'>
          <button onClick={back} disabled={step === 0}>
            Atrás
          </button>
          <button onClick={next} disabled={step === steps.length - 1}>
            Siguiente
          </button>
        </div>
      )}
    </div>
  )
}

export default PromptWizard
