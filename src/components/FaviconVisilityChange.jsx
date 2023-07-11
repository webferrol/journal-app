import { useEffect } from 'react'
import PropTypes from 'prop-types'

const icon = document.querySelector('link[rel=icon]')

function handleVisibilityChange (e) {
  const { hidden } = e.target
  icon?.setAttribute(
    'href',
    hidden ? import.meta.env.VITE_FAVICON : import.meta.env.VITE_FAVICON_HIDDEN
  )
}

export function FaviconVisilityChange ({ children }) {
  useEffect(() => {
    if (icon) window.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      window.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])
  return children
}

FaviconVisilityChange.propTypes = {
  children: PropTypes.node
}
