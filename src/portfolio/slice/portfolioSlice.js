import { createSlice } from '@reduxjs/toolkit'

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    isSaving: false,
    errorMessage: '',
    workExperiences: [],
    workExperienceActive: null
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
      state.workExperienceActive = action.payload
    },
    setWorkExperiences: (state, action) => {
      state.workExperiences = action.payload
    },
    setWorkExperienceActive: (state, action) => {
      state.workExperienceActive = action.payload
    },
    selectWorkExperienceActive: (state, action) => {
      state.workExperienceActive = state.workExperiences.find(({ idDoc }) => idDoc === action.payload)
    },
    updateWorkExperienceActive: (state, action) => {
      const index = state.workExperiences.findIndex(item => item.idDoc === action.payload.idDoc)
      state.workExperiences[index] = action.payload
      state.workExperienceActive = action.payload
    }
  }
})

export const { selectWorkExperienceActive, setWorkExperience, setWorkExperienceActive, setErrorMessage, setIsSaving, setWorkExperiences, updateWorkExperienceActive } = portfolioSlice.actions
