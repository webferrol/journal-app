import { auth } from './firebase'
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ERRORS } from '../constants'

export async function _createUserWithEmailAndPassword (emailValue, passwordValue, displayNameValue) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, emailValue, passwordValue)
    // Signed in
    const { uid, photoURL } = userCredential.user
    // Update displayName
    await updateProfile(auth.currentUser, { displayName: displayNameValue })
    return {
      ok: true,
      uid,
      email: emailValue,
      displayName: displayNameValue,
      photoURL
    }
  } catch (error) {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // console.table(error)
    const { code = 'undefined' } = error
    return {
      ok: false,
      errorMessage: ERRORS[`${code}`]
    }
  }
}

export async function _signInWithPopup () {
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
