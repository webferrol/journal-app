import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../../firebase'
import { setStatus, setUser } from '../slices'
import { AUTH_STATUS } from '../../constants'

export function useOnAuthStateChanged () {
  const subscriber = useRef(null)
  const dispatch = useDispatch()
  useEffect(() => {
    subscriber.current = onAuthStateChanged(auth, user => {
      if (!user) {
        dispatch(setStatus(AUTH_STATUS.authNotAuthenticated))
        return
      }
      const { uid, email, displayName, photoURL } = user
      dispatch(setUser({ uid, email, displayName, photoURL }))
      dispatch(setStatus(AUTH_STATUS.authAuthenticated))
    })
    return subscriber.current
  }, [dispatch])
  return null
}
