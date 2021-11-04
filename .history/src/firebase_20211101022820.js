// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
require('dotenv').config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.,
  databaseURL: process.env.,
  projectId: process.env.,
  storageBucket: process.env.,
  messagingSenderId: "575931725329",
  appId: "1:575931725329:web:1f72aebbd8444f3313a3b0"
};

// Initialize Firebase
initializeApp(firebaseConfig);