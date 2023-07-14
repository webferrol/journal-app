import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../auth/slices/authSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
})
