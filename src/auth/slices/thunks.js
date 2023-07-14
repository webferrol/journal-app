import { logout, setStatus, setUser } from './authSlice'
import { signInWithGooglePopup } from '../../firebase'
import { AUTH_STATUS } from '../../constants'

export function checkingAuthentication ({ email, password }) {
  return async (dispatch) => {
    dispatch(setStatus(AUTH_STATUS.authChecking))
  }
}

export function startSignInWithGoogle () {
  return async (dispatch) => {
    dispatch(setStatus(AUTH_STATUS.authChecking))
    const { ok, uid, email, displayName, photoURL, errorMessage } = await signInWithGooglePopup()
    if (!ok) return dispatch(logout(errorMessage))
    dispatch(setUser({ uid, email, displayName, photoURL }))
  }
}
