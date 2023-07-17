import { logout, setStatus, setUser } from './authSlice'
import { _createUserWithEmailAndPassword, _signInWithPopup } from '../../firebase'
import { AUTH_STATUS } from '../../constants'

export function checkingAuthentication ({ email, password }) {
  return async (dispatch) => {
    dispatch(setStatus(AUTH_STATUS.authChecking))
  }
}

export function signInWithPopup () {
  return async (dispatch) => {
    dispatch(setStatus(AUTH_STATUS.authChecking))
    const { ok, uid, email, displayName, photoURL, errorMessage } = await _signInWithPopup()
    if (!ok) return dispatch(logout(errorMessage))
    dispatch(setUser({ uid, email, displayName, photoURL }))
  }
}

export function createUserWithEmailPassword (emailValue, passwordValue, displayNameValue) {
  return async (dispatch) => {
    dispatch(setStatus(AUTH_STATUS.authChecking))
    const { ok, uid, email, displayName, photoURL, errorMessage } = await _createUserWithEmailAndPassword(emailValue, passwordValue, displayNameValue)
    if (!ok) return dispatch(logout(errorMessage))
    dispatch(setUser({ uid, email, displayName, photoURL }))
  }
}
