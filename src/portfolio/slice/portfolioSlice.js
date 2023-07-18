import { createSlice } from '@reduxjs/toolkit'

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    isSaving: false,
    errorMessage: '',
    workExperiences: []
  },
  reducers: {
    setIsSaving: (state, action) => {
      state.isSaving = action.payload
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload
    },
    setWorkExperience: (state, action) => {
      state.workExperiences.push(action.payload)
    },
    getWorkExperiences: (state, action) => {

    }
  }
})

export const { setWorkExperience, getWorkExperiences, setErrorMessage, setIsSaving } = portfolioSlice.actions
