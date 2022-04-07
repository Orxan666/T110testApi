import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css'
const root =ReactDOM.createRoot(document.getElementById("root"))


root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

