import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AuthContex} from './context/authContext'


ReactDOM.render(
  <React.StrictMode>
    <AuthContext>
    <App />
    </AuthContext>
  </React.StrictMode>,
  document.getElementById('root')
);


