import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App2 from './pages2/App/App';
import TestChildOne from './pcomponents2/TestChildComponents/TestChildOne/TestChildOne';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App2 />,
  },
  {
    path: "testchildone",
    element: <TestChildOne />
  }
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
