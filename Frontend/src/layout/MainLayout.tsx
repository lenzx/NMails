import { Outlet } from 'react-router'
import { Toaster } from 'sonner'

const MainLayout = () => {
  return (
    <div className='relative flex min-h-screen w-full flex-col'>
      <Toaster richColors />

      <header className='bg-white px-6 py-4 text-center shadow'>
        <h1 className='text-2xl font-bold text-gray-800'>Prompty</h1>
      </header>

      <main className='flex grow flex-col'>
        <Outlet />
      </main>

      <footer className='bg-gray-800 py-4 text-center text-white'>
        <p className='text-sm'>
          © 2025 Prompty. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  )
}

export default MainLayout
