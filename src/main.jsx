import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import { HookState } from './components/state/index.jsx';
import { HookEffect } from './components/effect/index.jsx';
import MainLayout from './components/layout/mainLayout/index.jsx';
import Particle from './components/background/particles/index.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/useState',
        element: <HookState />
      },
      {
        path: '/useEffect',
        element: <HookEffect />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Particle />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
