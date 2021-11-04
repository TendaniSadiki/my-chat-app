import { initializeApp } from "@firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_,
  databaseURL: process.env.REACT_APP_,
  projectId: process.env.REACT_APP_,
  storageBucket: process.env.REACT_APP_,
  messagingSenderId: process.env.REACT_APP_,
  appId: "1:575931725329:web:1f72aebbd8444f3313a3b0"
};
initializeApp(firebaseConfig)