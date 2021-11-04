// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
require('dotenv').config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

export function firebaseConfig()  {
 const API_KEY = process.env.API_KEY;
fetch('${API_KEY}');
  
};
console.log(firebaseConfig)
// Initialize Firebase
initializeApp(firebaseConfig);