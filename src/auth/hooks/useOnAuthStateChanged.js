import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { login, logout } from '../slices'

export function useOnAuthStateChanged () {
  const subscriber = useRef(null)
  const dispatch = useDispatch()
  useEffect(() => {
    subscriber.current = onAuthStateChanged(auth, user => {
      if (!user) return dispatch(logout())
      const { uid, email, displayName, photoURL } = user
      dispatch(login({ uid, email, displayName, photoURL }))
    })
    return subscriber.current
  }, [dispatch])
}
