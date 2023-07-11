import { createBrowserRouter } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../auth/pages'
import { AppLayout } from '../layout/AppLayout'
import { AuthLayout } from '../auth/layout/AuthLayout'
import { Home } from '../pages/Home'

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
    element: <AuthLayout />,
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
