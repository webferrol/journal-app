import { createSlice } from '@reduxjs/toolkit'

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    isSaving: false,
    saveMessage: '',
    errorMessage: '',
    workExperiences: [],
    workExperienceActive: null
  },
  reducers: {
    setIsSaving: (state, action) => {
      state.isSaving = action.payload
    },
    setSaveMessage: (state, action) => {
      state.saveMessage = action.payload
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
      state.errorMessage = ''
      const index = state.workExperiences.findIndex(item => item.idDoc === action.payload.idDoc)
      if (index > -1) {
        state.workExperiences[index] = action.payload
        state.workExperienceActive = action.payload
        state.saveMessage = `Se ha guardado correctamente la experiencia ${action.payload.title}`
      }
      state.isSaving = false
    }
  }
})

export const { selectWorkExperienceActive, setWorkExperience, setSaveMessage, setWorkExperienceActive, setErrorMessage, setIsSaving, setWorkExperiences, updateWorkExperienceActive } = portfolioSlice.actions
