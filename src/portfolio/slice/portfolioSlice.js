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

    },
    setWorkExperiences: (state, action) => {
      state.workExperiences = action.payload
    }
  }
})

export const { setWorkExperience, getWorkExperiences, setErrorMessage, setIsSaving, setWorkExperiences } = portfolioSlice.actions
