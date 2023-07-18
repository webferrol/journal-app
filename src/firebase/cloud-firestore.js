import { addDoc, collection } from 'firebase/firestore'
import { db } from './firebase'
import { ERRORS } from '../constants'

/**
 *
 * @param {*} uid ruta en firestore donde quiero que se manden los datos.
 * @param {Object} data objeto en el que estan almacenados los datos del formulario: Ejemplo: {nombre: "",descripcion_breve: "",descripcion: "",fecha: Timestamp}
 * @return {Object} El Objeto insertado con varias propiedades interesantes entre ello el id
 */
export const addDocument = async (uid, data) => {
  try {
    const collectionRef = collection(db, uid)
    const { id } = await addDoc(collectionRef, data)
    if (!id) throw new Error('fs-addDoc')
    return {
      ok: true,
      idDoc: id,
      data
    }
  } catch (error) {
    const { code } = error
    console.log(code)
    return {
      ok: false,
      errorMessage: ERRORS[code]
    }
  }
}
