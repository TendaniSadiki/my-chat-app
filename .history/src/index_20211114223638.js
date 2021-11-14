import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContext from


ReactDOM.render(
  <React.StrictMode>
    <AuthContext>
    <App />
  </React.StrictMode>,
  </AuthContext>
  document.getElementById('root')
);



