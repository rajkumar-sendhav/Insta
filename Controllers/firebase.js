// https://firebase.google.com/docs/web/setup#available-libraries

// import firebase from 'firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDyaK_PZ9PA_xWQFDwI8qkSHKDR6Ptr51U",
  authDomain: "rn-instagram-clone-bec5c.firebaseapp.com",
  projectId: "rn-instagram-clone-bec5c",
  storageBucket: "rn-instagram-clone-bec5c.appspot.com",
  messagingSenderId: "955748625387",
  appId: "1:955748625387:web:af1c12773651f6bec9c7ae"
}

!firebase.apps.lenght ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()

export { firebase, db }