"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = exports.db = void 0;

var _firebase = _interopRequireDefault(require("firebase;"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseApp = _firebase["default"].intializeApp({
  apiKey: "AIzaSyDPO4YCmW2je9EwzAoPlGANx7jrk9KfP-o",
  authDomain: "chat-app-c002c.firebaseapp.com",
  projectId: "chat-app-c002c",
  storageBucket: "chat-app-c002c.appspot.com",
  messagingSenderId: "575931725329",
  appId: "1:575931725329:web:1f72aebbd8444f3313a3b0"
});

var db = firebaseApp.firestore();
exports.db = db;

var auth = _firebase["default"].auth();

exports.auth = auth;