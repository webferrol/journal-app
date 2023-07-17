import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { AppTheme } from './theme/Apptheme'
import { Provider } from 'react-redux'
import { OnLoadComponents } from './components'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <OnLoadComponents>
        <AppTheme>
          <RouterProvider router={router} />
        </AppTheme>
      </OnLoadComponents>
    </Provider>
  </React.StrictMode>
)
