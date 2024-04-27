// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyApK3a7uXzINckHWASCPH9p1_Nd7xen-Ho',
  authDomain: 'react-quiz-2c5a9.firebaseapp.com',
  databaseURL: 'https://react-quiz-2c5a9.firebaseio.com',
  projectId: 'react-quiz-2c5a9',
  storageBucket: 'react-quiz-2c5a9.appspot.com',
  messagingSenderId: '358288131241',
  appId: '1:358288131241:web:907d82070728919a1b15b8',
  measurementId: 'G-PYTMRZV795',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const firebaseAuth = getAuth(app);

export { firestore, firebaseAuth };
