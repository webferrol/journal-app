import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../auth/slices/authSlice'
import { portfolioSlice } from '../portfolio/slice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    portfolio: portfolioSlice.reducer
  }
})
