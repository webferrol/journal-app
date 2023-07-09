import { createBrowserRouter } from 'react-router-dom'
import { JournalApp } from '../JournalApp'
import { LoginPage, RegisterPage } from '../auth/pages'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export const router = createBrowserRouter([
  {
    path: '/*',
    element: <JournalApp />
  },
  {
    path: 'auth',
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
])
