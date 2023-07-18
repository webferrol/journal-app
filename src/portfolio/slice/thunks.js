import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase/firebase'
import { setIsSaving, setWorkExperience } from './portfolioSlice'
export function addWorkExperience () {
  return async (dispatch, getState) => {
    // console.log(getState())
    const { auth: { user: { uid } } } = getState()
    if (uid) {
      dispatch(setIsSaving(true))
      const data = {
        uid,
        title: 'Prueba',
        date: new Date().getTime()
      }
      const { id: idDoc } = await addDoc(collection(db, `users/${uid}/experiences`), data)
      dispatch(setWorkExperience({ idDoc, ...data }))
      dispatch(setIsSaving(false))
    }
  }
}
