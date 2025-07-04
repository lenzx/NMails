import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Register from '../pages/Register'
import Mail from '../pages/Mail'
// import MainLayout from '../layout/MainLayout'

export const Routes = [
  {
    path: '/mail',

    children: [{ path: '', element: <Mail /> }],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]
