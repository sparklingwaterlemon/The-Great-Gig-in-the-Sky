import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App2 from './pages/App2/App2';
// import TestChildOne from './pages/TestChildOne/TestChildOne';
// import TestChildTwo from "./pages/TestChildTwo/TestChildTwo";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App2 />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
