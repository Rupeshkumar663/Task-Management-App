// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "task-management-3a934.firebaseapp.com",
  projectId: "task-management-3a934",
  storageBucket: "task-management-3a934.firebasestorage.app",
  messagingSenderId: "540982756043",
  appId: "1:540982756043:web:61b89a986c1b35c0f5514e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}

