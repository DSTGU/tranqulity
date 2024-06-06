// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsdXA0AIi9u2w8Jtmr-qRcSIvZ9awCD0E",
  authDomain: "tranquilhotelspiwo.firebaseapp.com",
  projectId: "tranquilhotelspiwo",
  storageBucket: "tranquilhotelspiwo.appspot.com",
  messagingSenderId: "1081030383303",
  appId: "1:1081030383303:web:d46677e1fc3b6af42d10e2"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const analytics = getAnalytics(firebase);
const auth = getAuth(firebase);
const firestore = getFirestore(firebase);

export {auth, firestore}