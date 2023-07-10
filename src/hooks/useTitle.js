/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'

export const useTitle = title => {
  const documentDefined = typeof document !== 'undefined'
  const originalTitle = useRef(documentDefined ? document.title : '')

  useEffect(() => {
    if (!documentDefined) return

    if (document.title !== title) document.title = title

    return () => {
      document.title = originalTitle.current
    }
  }, [])
}
