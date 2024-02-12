import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore' 
import 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBcUxiUDE1ws9Sv1L6UFEsoGQ1CmTtjO4E",
    authDomain: "quizfirebase-270ca.firebaseapp.com",
    projectId: "quizfirebase-270ca",
    storageBucket: "quizfirebase-270ca.appspot.com",
    messagingSenderId: "522223082738",
    appId: "1:522223082738:web:c94daa159cd5baba1d846b",
    measurementId: "G-BNPL9G8V79"
};



// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

