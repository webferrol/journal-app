import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking',
    isLoading: false,
    errorMessage: '',
    user: {
      uid: null,
      email: '',
      displayName: '',
      photoURL: ''
    }
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})

export const { setIsLoading } = authSlice.actions
