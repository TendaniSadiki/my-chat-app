import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AuthContex} from './context/a'


ReactDOM.render(
  <React.StrictMode>
    <AuthContext>
    <App />
  </React.StrictMode>,
  </AuthContext>
  document.getElementById('root')
);



