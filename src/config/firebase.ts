// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKcjxceCub5I9nnDEFv2URqD6BI3mTNBI",
  authDomain: "react-course-db375.firebaseapp.com",
  projectId: "react-course-db375",
  storageBucket: "react-course-db375.appspot.com",
  messagingSenderId: "421781521201",
  appId: "1:421781521201:web:57c84aae011c8b4bcc6610",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
