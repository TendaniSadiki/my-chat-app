import { initializeApp } from "@firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_,
  databaseURL: process.env.REACT_APP_,
  projectId: process.env.REACT_APP_,
  storageBucket: process.env.REACT_APP_,
  messagingSenderId: process.env.REACT_APP_,
  appId: "1:5759
};
initializeApp(firebaseConfig)