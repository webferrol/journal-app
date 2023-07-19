import { addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore'
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
    const { code = 'auth/undefined' } = error
    console.log(code)
    return {
      ok: false,
      errorMessage: ERRORS[code]
    }
  }
}

/**
 *
 * @param {string} uid ruta firestore de donde quiero bajar los datos. Puede ser un documento, una colección ...
 * @returns {array} de objetos donde estan almacenados los datos
 */
export const getDocuments = async (uid) => {
  try {
    const querySnapshot = await getDocs(collection(db, uid))
    if (!querySnapshot.size) return { ok: true, data: [] }
    const tmp = []
    querySnapshot.forEach((doc) => {
      tmp.push({
        idDoc: doc.id,
        ...doc.data() // DESTRUCTURING
      })
    })
    return { ok: true, data: tmp }
  } catch (error) {
    console.log('cloud-firestore ❤️❤️❤️', error)
    const { code = 'auth/undefined' } = error
    return {
      ok: false,
      errorMessage: ERRORS[code]
    }
  }
}

/**
 * Función que actualiza la información de un documento parcial o completo de firestore db
 *
 * @param {string} collection Una colección o ruta de colección. Ejemplo: users/xurxo/experiencias
 * @param {string} uid optiene la uid o identificador del documento
 * @param {Object} data
 */
export const updateDocument = async (collection, uid, data = {}) => {
  try {
    await updateDoc(doc(db, collection, uid), data)
    return {
      ok: true
    }
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}
