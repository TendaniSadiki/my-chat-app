// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
require('dotenv').config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.,
  storageBucket: process.env.,
  messagingSenderId: process.env.,
  appId: 
};

// Initialize Firebase
initializeApp(firebaseConfig);