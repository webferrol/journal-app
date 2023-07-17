import { createBrowserRouter } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../auth/pages'
import { AppLayout } from '../layout/AppLayout'
import { AuthLayout } from '../auth/layout/AuthLayout'
import { Home } from '../pages/Home'
import { ProtectedRoute } from '../components/ProtectedRoute'

export const router = createBrowserRouter([
  {
    path: '/*',
    element: <AppLayout />,
    children: [
      {
        path: '/*',
        element: <Home />
      }
    ]
  },
  {
    path: 'auth',
    element: <ProtectedRoute><AuthLayout /></ProtectedRoute>,
    children: [
      {
        path: '*',
        element: <LoginPage />
      },
      {
        path: '/auth',
        element: <LoginPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      }
    ]
  }
])
