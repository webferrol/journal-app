import { createSlice } from '@reduxjs/toolkit'
import { AUTH_INITIAL_STATE, AUTH_STATUS } from '../../constants'

export const authSlice = createSlice({
  name: 'auth',
  initialState: AUTH_INITIAL_STATE,
  reducers: {
    reset: (state) => {
      state.status = AUTH_INITIAL_STATE.status
      state.user = AUTH_INITIAL_STATE.user
      state.errorMessage = AUTH_INITIAL_STATE.errorMessage
    },
    setStatus: (state, action) => {
      state.status = action.payload // Estado del usuario durante el logueo
    },
    setUser: (state, action) => {
      state.status = AUTH_STATUS.authAuthenticated
      state.user = action.payload
      state.errorMessage = ''
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload
    },
    logout: (state, action) => {
      state.status = AUTH_STATUS.authNotAuthenticated
      state.user = AUTH_INITIAL_STATE.user
      state.errorMessage = action.payload
    }
  }
})

export const { setIsLoading, setStatus, setUser, setErrorMessage, logout } = authSlice.actions
