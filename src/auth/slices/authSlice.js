import { createSlice } from '@reduxjs/toolkit'
import { AUTH_INITIAL_STATE, AUTH_STATUS } from '../../constants'

export const authSlice = createSlice({
  name: 'auth',
  initialState: structuredClone(AUTH_INITIAL_STATE),
  reducers: {
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
    logout: (state, payload) => {
      state.status = AUTH_STATUS.authNotAuthenticated
      state.user = AUTH_INITIAL_STATE.user
      state.errorMessage = payload
    }
  }
})

export const { setIsLoading, setStatus, setUser, setErrorMessage, logout } = authSlice.actions
