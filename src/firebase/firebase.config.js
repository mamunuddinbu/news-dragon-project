// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoZeuG8a8rPB_wpu1B7PCcJZwbgHnr1Vc",
  authDomain: "news-dragon-project-1a4d3.firebaseapp.com",
  projectId: "news-dragon-project-1a4d3",
  storageBucket: "news-dragon-project-1a4d3.appspot.com",
  messagingSenderId: "867727377238",
  appId: "1:867727377238:web:230bb623e5cde3cbefccf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;