import { useEffect } from 'react'
import PropTypes from 'prop-types'
import faviconHidden from '../assets/favicon-hidden-32x32.png'
import favicon from '../assets/favicon32x32.png'
/**
 * Cambiar favicon cuando la pestaña pierde el foco
 */

const icon = document.querySelector('link[rel=icon]')

function handleVisibilityChange (e) {
  const { hidden } = e.target
  icon?.setAttribute(
    'href',
    hidden ? favicon : faviconHidden
  )
}
export function ChangeFavicon ({ children }) {
  useEffect(() => {
    window.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      window.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])
  return children
}

ChangeFavicon.propTypes = {
  children: PropTypes.node
}
