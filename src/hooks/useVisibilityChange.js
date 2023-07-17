import { useEffect } from 'react'

const icon = document.querySelector('link[rel=icon]')

function handleVisibilityChange (e) {
  const { hidden } = e.target
  icon?.setAttribute(
    'href',
    hidden ? import.meta.env.VITE_FAVICON : import.meta.env.VITE_FAVICON_HIDDEN
  )
}

export function useVisibilityChange () {
  useEffect(() => {
    if (icon) window.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      window.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])
}
