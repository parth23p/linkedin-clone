// // Import the functions you need from the SDKs you need
// // import firebase from 'firebase';
// // import firebase from "firebase/compat/app"
// // import "firebase/compat/auth"
// // import firebase from "firebase/compat/app";
// // v9 compat packages are API compatible with v8 code
// // import firebase from 'firebase';
// import firebase from 'firebase/app'
// import "firebase/compat/auth"
// import "firebase/compat/firestore"
// // import 'firebase/compat/auth';
// // import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";
import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyC5w7W2_FUgbNrG90L-sTUPoNYv89M8r6Q",
    authDomain: "linkedin-clone-4c967.firebaseapp.com",
    projectId: "linkedin-clone-4c967",
    storageBucket: "linkedin-clone-4c967.appspot.com",
    messagingSenderId: "596329746386",
    appId: "1:596329746386:web:c2d9fabb2f7c21254a420b",
    measurementId: "G-3TZR94T6NL"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, googleAuthProvider, storage };
export default db;

