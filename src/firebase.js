
import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXUlsQnyQIWSwH9lD5WTiwn9Z5E0OpNsw",
  authDomain: "linkedinclone-182a5.firebaseapp.com",
  projectId: "linkedinclone-182a5",
  storageBucket: "linkedinclone-182a5.appspot.com",
  messagingSenderId: "851934259333",
  appId: "1:851934259333:web:7f93c49f3ee17fcc5161ec",
  measurementId: "G-Z3SZS0LZ8X"
};

// /we can use this as key to get into our firebase backend 
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); //for auth signup

export { auth, provider };
export default db;