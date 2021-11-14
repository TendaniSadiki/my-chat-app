import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth


ReactDOM.render(
  <React.StrictMode>
    <AuthContext>
    <App />
  </React.StrictMode>,
  </AuthContext>
  document.getElementById('root')
);



