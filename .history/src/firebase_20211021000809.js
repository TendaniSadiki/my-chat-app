// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyDPO4YCmW2je9EwzAoPlGANx7jrk9KfP-o",
  authDomain: "chat-app-c002c.firebaseapp.com",
  projectId: "chat-app-c002c",
  storageBucket: "chat-app-c002c.appspot.com",
  messagingSenderId: "575931725329",
  appId: "1:575931725329:web:1f72aebbd8444f3313a3b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;