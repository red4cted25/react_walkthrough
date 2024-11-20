import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from'react-router-dom';
import Home from './Home';
import './react18/styles/main.css';
import React24App from './react24/pages/App';
import React24Test from './react24/pages/test';
import React18App from './react18/App';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/react24/app', element: <React24App /> },
  { path: '/react24/test', element: <React24Test /> },
  { path: '/react18/app', element: <React18App /> },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);