import { initializeApp } from "@firebase/app";

 const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};
 initializeApp(firebaseConfig)
