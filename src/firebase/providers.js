import { auth } from './firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { ERRORS } from '../constants'

export async function signInWithGooglePopup () {
  try {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    // const credential = GoogleAuthProvider.credentialFromResult(result)
    // const token = credential.accessToken
    // The signed-in user info.
    const { uid, email, displayName, photoURL } = result.user
    return {
      ok: true,
      uid,
      email,
      displayName,
      photoURL

    }
  } catch (error) {
    const { code = 'undefined' } = error
    return {
      ok: false,
      errorMessage: ERRORS[`${code}`]
    }
  }
}
