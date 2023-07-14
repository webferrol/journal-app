import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { AppTheme } from './theme/Apptheme'
import { FaviconVisilityChange } from './components/FaviconVisilityChange'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FaviconVisilityChange>
      <Provider store={store}>
        <AppTheme>
          <RouterProvider router={router} />
        </AppTheme>
      </Provider>
    </FaviconVisilityChange>
  </React.StrictMode>
)
