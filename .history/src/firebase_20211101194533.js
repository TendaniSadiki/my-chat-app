import { initializeApp } from "@firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_,
  databaseURL: ,
  projectId: "chat-app-c002c",
  storageBucket: "chat-app-c002c.appspot.com",
  messagingSenderId: "575931725329",
  appId: "1:575931725329:web:1f72aebbd8444f3313a3b0"
};
initializeApp(firebaseConfig)