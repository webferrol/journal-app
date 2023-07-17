import { login, logout, setStatus } from './authSlice'
import { _createUserWithEmailAndPassword, _signInWithEmailAndPassword, _signInWithPopup, _signOut } from '../../firebase'
import { AUTH_STATUS, ERRORS } from '../../constants'

export function signInWithEmailAndPassword (emailValue, passwordValue) {
  return async (dispatch) => {
    dispatch(setStatus(AUTH_STATUS.authChecking))
    const { ok, uid, email, displayName, photoURL, errorMessage } = await _signInWithEmailAndPassword(emailValue, passwordValue)
    if (!ok) return dispatch(logout(errorMessage ?? ERRORS['auth/undefined']))
    dispatch(login({ uid, email, displayName, photoURL }))
  }
}

export function signInWithPopup () {
  return async (dispatch) => {
    dispatch(setStatus(AUTH_STATUS.authChecking))
    const { ok, uid, email, displayName, photoURL, errorMessage } = await _signInWithPopup()
    if (!ok) return dispatch(logout(errorMessage ?? ERRORS['auth/undefined']))
    dispatch(login({ uid, email, displayName, photoURL }))
  }
}

export function createUserWithEmailPassword (emailValue, passwordValue, displayNameValue) {
  return async (dispatch) => {
    dispatch(setStatus(AUTH_STATUS.authChecking))
    const { ok, uid, email, displayName, photoURL, errorMessage } = await _createUserWithEmailAndPassword(emailValue, passwordValue, displayNameValue)
    if (!ok) return dispatch(logout(errorMessage ?? ERRORS['auth/undefined']))
    dispatch(login({ uid, email, displayName, photoURL }))
  }
}

export function signOut () {
  return async (dispatch) => {
    dispatch(setStatus(AUTH_STATUS.authChecking))
    const { ok, errorMessage } = await _signOut()
    if (!ok) return dispatch(logout(errorMessage))
    dispatch(logout())
  }
}
