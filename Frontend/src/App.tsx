import '@fontsource-variable/inter'
import './styles/global.css'

import { useRoutes } from 'react-router'
import { Routes } from './router/router'

function App() {
  return useRoutes(Routes)
}

export default App
