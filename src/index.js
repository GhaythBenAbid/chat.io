import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider domain="dev-2qv5ptww.us.auth0.com" clientId="o2HOF9GlwI1JTTNSITHLMCIqkFRP1dEo" redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>
);
