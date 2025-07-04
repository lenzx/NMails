// store/useFormStore.ts
import { create } from 'zustand'

type InfoType =
  | 'Preguntas Frecuentes'
  | 'Perfil de cliente'
  | 'Catálogo de productos'
  | 'Otro'

export type MailType =
  | 'welcome'
  | 'orderTracking'
  | 'satisfactionSurvey'
  | 'referralProgram'
  | 'productReplacement'

export interface FormStore {
  // Archivo
  fileName: string | null
  fileUploaded: boolean
  infoTypes: InfoType[]

  // Tipo de correo
  mailType: MailType | null
  description: string

  // Generación y envío
  generatedContent: string
  isThinking: boolean
  isUploading: boolean
  isSent: boolean

  // Actions
  setFile: (fileName: string) => void
  toggleInfoType: (type: InfoType) => void
  setMailType: (type: MailType) => void
  setDescription: (desc: string) => void
  setGeneratedContent: (content: string) => void
  setThinking: (val: boolean) => void
  setUploading: (val: boolean) => void
  setSent: (val: boolean) => void
  resetForm: () => void
}

export const useFormStore = create<FormStore>((set) => ({
  fileName: null,
  fileUploaded: false,
  infoTypes: [],

  mailType: null,
  description: '',

  generatedContent: '',
  isThinking: false,
  isUploading: false,
  isSent: false,

  setFile: (fileName) => set({ fileName, fileUploaded: true }),
  toggleInfoType: (type) =>
    set((state) => ({
      infoTypes: state.infoTypes.includes(type)
        ? state.infoTypes.filter((t) => t !== type)
        : [...state.infoTypes, type],
    })),
  setMailType: (type) => set({ mailType: type }),
  setDescription: (desc) => set({ description: desc }),
  setGeneratedContent: (content) => set({ generatedContent: content }),
  setThinking: (val) => set({ isThinking: val }),
  setUploading: (val) => set({ isUploading: val }),
  setSent: (val) => set({ isSent: val }),

  resetForm: () =>
    set({
      fileName: null,
      fileUploaded: false,
      infoTypes: [],
      mailType: null,
      description: '',
      generatedContent: '',
      isThinking: false,
      isUploading: false,
      isSent: false,
    }),
}))
