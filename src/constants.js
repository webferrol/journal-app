export const AUTH_STATUS = {
  authChecking: 'checking',
  authNotAuthenticated: 'not-authenticated',
  authAuthenticated: 'authenticated'
}

export const ERRORS = {
  'auth/popup-closed-by-user': 'Ventana modal cerrada por el usuario',
  undefined: 'Error desconocido'
}

export const AUTH_INITIAL_STATE = {
  status: AUTH_STATUS.authNotAuthenticated,
  errorMessage: '',
  user: {
    uid: null,
    email: '',
    displayName: '',
    photoURL: ''
  }
}
