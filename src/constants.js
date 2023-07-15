export const AUTH_STATUS = {
  authChecking: 'checking',
  authNotAuthenticated: 'not-authenticated',
  authAuthenticated: 'authenticated'
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

export const ERRORS = {
  'auth/popup-closed-by-user': 'Ventana modal cerrada por el usuario',
  undefined: 'Error desconocido'
}

export const FORM_VALIDATE = {
  displayName: { fn: (value) => (!value.trim().length), message: 'Este campo es obligatorio' },
  password: { fn: (value) => (value.trim().length < 6), message: 'Por lo menos 6 caracteres' },
  email: { fn: (value) => !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value), message: 'Correo electrónico no válido' }
}
