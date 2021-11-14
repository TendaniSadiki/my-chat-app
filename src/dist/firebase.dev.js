"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = require("@firebase/app");

var firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};

var _default = (0, _app.initializeApp)(firebaseConfig);

exports["default"] = _default;