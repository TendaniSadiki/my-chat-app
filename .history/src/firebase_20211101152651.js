// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
require('dotenv').config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

 function firebaseConfig()  {
  let apiKey = process.env.API_KEY;
  let authDomain = process.env.AUTHDOMAIN;
  let databaseURL = process.env.DATABASEURL;
  let projectId = process.env.PROJECTID;
  let storageBucket = process.env.STORAGEBUCKET;
  let messagingSenderId = process.env.MESSAGINGSENDERID;
  let appId = process.env.APPID;

  let server =
};
console.log(firebaseConfig)
// Initialize Firebase
initializeApp(firebaseConfig);