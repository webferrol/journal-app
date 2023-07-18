import { addDocument } from '../../firebase'
import { ERRORS } from '../../constants'
import { setErrorMessage, setIsSaving, setWorkExperience } from './portfolioSlice'
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
