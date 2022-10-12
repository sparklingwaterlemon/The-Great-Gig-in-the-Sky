import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./pages/App/App";
// Importing top level BrowserRouter Component
import { BrowserRouter as BowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BowserRouter>
      <App />
    </BowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
