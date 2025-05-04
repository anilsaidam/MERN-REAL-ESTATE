// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-93312.firebaseapp.com",
  projectId: "mern-estate-93312",
  storageBucket: "mern-estate-93312.firebasestorage.app",
  messagingSenderId: "91112848360",
  appId: "1:91112848360:web:f956cd06a6757a5350825d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);