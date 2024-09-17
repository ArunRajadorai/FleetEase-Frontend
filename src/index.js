import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/assets/scss/global.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { WebSocketProvider } from './fleetease/websocket/websocket';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <WebSocketProvider>
        <App />
     </WebSocketProvider>
  </BrowserRouter>
);

reportWebVitals();
