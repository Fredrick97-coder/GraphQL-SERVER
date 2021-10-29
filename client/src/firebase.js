import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBpJYH8zdKNreWCn4RvsVeXOSFC0_FQ7zo',
  authDomain: 'gqlreactnode-1.firebaseapp.com',
  projectId: 'gqlreactnode-1',
  storageBucket: 'gqlreactnode-1.appspot.com',
  // messagingSenderId: "362703869099",
  appId: '1:362703869099:web:a3bb0542c5bcc566e053ee',
  measurementId: 'G-M6JQCW4W3G',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
