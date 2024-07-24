import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import { HookState } from './components/states/state/index.jsx';
import { HookEffect } from './components/states/effect/index.jsx';
import { HookContext } from './components/states/context/index.jsx';
import { HookMemo } from './components/states/memo/index.jsx';

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
      },
      {
        path: '/useContext',
        element: <HookContext />
      },
      {
        path: '/useMemo',
        element: <HookMemo />
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
