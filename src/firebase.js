
// import { initializeApp } from "firebase/app";
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHWandjvdLXBDRm7PHQ87jm5OUfU6nCIk",
  authDomain: "project-01-fa44a.firebaseapp.com",
  projectId: "project-01-fa44a",
  storageBucket: "project-01-fa44a.appspot.com",
  messagingSenderId: "670611162256",
  appId: "1:670611162256:web:d66a544340cf8a9a328415"
};


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, googleProvider,db };