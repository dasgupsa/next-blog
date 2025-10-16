
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-blog-48c26.firebaseapp.com",
  projectId: "next-blog-48c26",
  storageBucket: "next-blog-48c26.firebasestorage.app",
  messagingSenderId: "1069603602481",
  appId: "1:1069603602481:web:39d257c90b4062f9e09510",
  measurementId: "G-BJCMPPTEPD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
