import { createSlice } from '@reduxjs/toolkit'

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    isSaving: false,
    workExperiences: []
  },
  reducers: {
    setIsSaving: (state, action) => {
      state.isSaving = action.payload
    },
    setWorkExperience: (state, action) => {
      state.workExperiences.push(action.payload)
    },
    getWorkExperiences: (state, action) => {

    }
  }
})

export const { setWorkExperience, getWorkExperiences, setIsSaving } = portfolioSlice.actions
