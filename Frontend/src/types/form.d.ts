import { FieldError, UseFormRegister } from 'react-hook-form'

export type RegisterFormData = {
  email: string
  password: string
  firstName: string
  lastName: string
}

export type LoginFormData = {
  email: string
  password: string
}

export type FormFieldProps<T extends RegisterFormData | LoginFormData> = {
  label: string
  type: InputTypes
  placeholder?: string
  name: Path<T>
  register: UseFormRegister<T>
  error?: FieldError
  valueAsNumber?: boolean
  className?: string
}

type InputTypes =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'date'
  | 'checkbox'
  | 'radio'
