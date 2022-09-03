import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Chatapp from './Chatapp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Chatapp />
  </React.StrictMode>
);

reportWebVitals();
