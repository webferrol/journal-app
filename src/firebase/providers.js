import { auth } from './firebase'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile
} from 'firebase/auth'
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
    const { code = 'auth/undefined' } = error
    return {
      ok: false,
      errorMessage: ERRORS[`${code}`]
    }
  }
}

export async function _signOut () {
  try {
    await signOut(auth)
    return {
      ok: true
    }
  } catch (error) {
    // console.log(error)
    const { code = 'auth/undefined' } = error
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
    const { code = 'auth/undefined' } = error
    return {
      ok: false,
      errorMessage: ERRORS[`${code}`]
    }
  }
}

export async function _signInWithEmailAndPassword (emailValue, passwordValue) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, emailValue, passwordValue)
    const { uid, email, displayName, photoURL } = userCredential.user
    return {
      ok: true,
      uid,
      email,
      displayName,
      photoURL
    }
  } catch (error) {
    console.log(error.message)
    const { code = 'auth/undefined' } = error
    return {
      ok: false,
      errorMessage: ERRORS[`${code}`]
    }
  }
}
