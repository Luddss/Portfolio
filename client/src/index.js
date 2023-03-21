import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Favicon from 'react-favicon'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Favicon url={require(`../src/assets/images/L.png`)} />
      <App />  
  </React.StrictMode>
);
