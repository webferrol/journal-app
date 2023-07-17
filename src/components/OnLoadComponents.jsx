import { useEffect } from 'react'

import PropTypes from 'prop-types'
import { useOnAuthStateChanged } from '../auth/hooks/useOnAuthStateChanged'

const icon = document.querySelector('link[rel=icon]')

function handleVisibilityChange (e) {
  const { hidden } = e.target
  icon?.setAttribute(
    'href',
    hidden ? import.meta.env.VITE_FAVICON : import.meta.env.VITE_FAVICON_HIDDEN
  )
}

export function OnLoadComponents ({ children }) {
  useOnAuthStateChanged()

  useEffect(() => {
    if (icon) window.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      window.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return children
}

OnLoadComponents.propTypes = {
  children: PropTypes.node
}
