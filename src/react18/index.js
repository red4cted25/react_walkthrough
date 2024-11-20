import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import App from './App';

const router = createBrowserRouter([
  { path: '/', element: <Home /> }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
