import { addDocument, getDocuments } from '../../firebase'
import { ERRORS } from '../../constants'
import { setErrorMessage, setIsSaving, setWorkExperience, setWorkExperiences } from './portfolioSlice'
export function addWorkExperience () {
  return async (dispatch, getState) => {
    dispatch(setIsSaving(true))
    const { auth: { user: { uid } } } = getState()
    if (!uid) {
      dispatch(setErrorMessage(ERRORS['fr/permission-denied']))
      return dispatch(setIsSaving(false))
    }
    const data = {
      uid,
      title: 'Prueba',
      date: new Date().getTime()
    }
    const { ok, idDoc, errorMessage } = await addDocument(`users/${uid}/experiences`, data)
    if (ok) dispatch(setWorkExperience({ idDoc, ...data }))
    else dispatch(setErrorMessage(errorMessage ?? ERRORS['fr/permission-denied']))
    dispatch(setIsSaving(false))
  }
}

export function loadExperiencesDocs (uid) {
  return async (dispatch) => {
    const { ok, data, errorMessage } = await getDocuments(`users/${uid}/experiences`)
    if (!ok) return dispatch(setErrorMessage(errorMessage))
    dispatch(setWorkExperiences(data))
  }
}
