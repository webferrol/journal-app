// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBIBR1h2RY_a0bxkjd0X1kClHrS3WCLwSk',
  authDomain: 'portfolio-xurxo-project.firebaseapp.com',
  databaseURL: 'https://portfolio-xurxo-project-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'portfolio-xurxo-project',
  storageBucket: 'portfolio-xurxo-project.appspot.com',
  messagingSenderId: '41739080142',
  appId: '1:41739080142:web:3d1c7f4f2f7996dfcbdb9f'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Authentication and get a reference to the service
const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export {
  app,
  auth,
  db
}
