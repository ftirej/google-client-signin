import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='317200523271-mrrvvj4ubhvtljv19vt36o07s2e5qft8.apps.googleusercontent.com'>
    <App />
  </GoogleOAuthProvider>
);
