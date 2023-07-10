import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { AppTheme } from './theme/Apptheme'
import { ChangeFavicon } from './components/ChangeFavicon'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChangeFavicon>
      <AppTheme>
        <RouterProvider router={router} />
      </AppTheme>
    </ChangeFavicon>
  </React.StrictMode>
)
