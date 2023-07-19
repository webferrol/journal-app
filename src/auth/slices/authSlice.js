import { createSlice } from '@reduxjs/toolkit'
import { AUTH_INITIAL_STATE, AUTH_STATUS } from '../../constants'

export const authSlice = createSlice({
  name: 'auth',
  initialState: AUTH_INITIAL_STATE,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload // Estado del usuario durante el logueo
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload
    },
    login: (state, action) => {
      state.status = AUTH_STATUS.authChecking
      state.errorMessage = ''
      state.user = action.payload
      state.status = AUTH_STATUS.authAuthenticated
    },
    logout: (state, action) => {
      state.status = AUTH_STATUS.authNotAuthenticated
      state.user = AUTH_INITIAL_STATE.user
      state.errorMessage = action.payload
    }
  }
})

export const { setStatus, setErrorMessage, logout, login } = authSlice.actions
