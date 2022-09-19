import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyALNBJXlCloZy3fOcS3FUZ8nAPMks1rFo0',
  authDomain: 'netflix-clone-5035a.firebaseapp.com',
  projectId: 'netflix-clone-5035a',
  storageBucket: 'netflix-clone-5035a.appspot.com',
  messagingSenderId: '966009437644',
  appId: '1:966009437644:web:9163e9a5bf12af7e4bf169'
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export { app, db, auth }
