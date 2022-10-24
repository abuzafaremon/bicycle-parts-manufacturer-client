// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9NjMqLMgR0Exm_Ac46pDhoixRjYXdPeM",
  authDomain: "bicycle-world-emon.firebaseapp.com",
  projectId: "bicycle-world-emon",
  storageBucket: "bicycle-world-emon.appspot.com",
  messagingSenderId: "11635702825",
  appId: "1:11635702825:web:fa4333ee885703ff3ff038"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;