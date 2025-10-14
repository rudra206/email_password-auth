// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0CDh5DPUCAeuB-gSIssb9EAT60ZZNrk4",
  authDomain: "email-password-auth-6f880.firebaseapp.com",
  projectId: "email-password-auth-6f880",
  storageBucket: "email-password-auth-6f880.firebasestorage.app",
  messagingSenderId: "1096679263769",
  appId: "1:1096679263769:web:ee65737f9211772f1fa488"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);