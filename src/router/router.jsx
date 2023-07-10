import { createBrowserRouter } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../auth/pages'
import { AppLayout } from '../layout/AppLayout'

export const router = createBrowserRouter([
  {
    path: '/*',
    element: <AppLayout />,
    children: [
      {
        path: 'auth/login',
        element: <LoginPage />
      },
      {
        path: 'auth/*',
        element: <LoginPage />
      },
      {
        path: 'auth/register',
        element: <RegisterPage />
      }
    ]
  }
])
