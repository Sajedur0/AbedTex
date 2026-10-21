import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Old shared links / QR codes used hash URLs (/#/about): move them to real paths.
if (window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', window.location.hash.slice(1));
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
