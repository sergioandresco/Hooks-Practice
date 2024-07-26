import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './views/home/index.jsx';
import { HookState } from './components/states/state/index.jsx';
import { HookEffect } from './components/states/effect/index.jsx';
import { HookContext } from './components/states/context/index.jsx';
import { HookMemo } from './components/states/memo/index.jsx';
import { HookRef } from './components/states/ref/index.jsx';
import { MenuHooksNative } from './views/menu/hooks-native/index.jsx';
import { MenuHooksReactRouter } from './views/menu/hooks-react-router/index.jsx';

import MainLayout from './views/mainLayout/index.jsx';
import Particle from './components/background/particles/index.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu-hooks-native',
        element: <MenuHooksNative />,
        children: [
          {
            path: 'useState',
            element: <HookState />
          },
          {
            path: 'useEffect',
            element: <HookEffect />
          },
          {
            path: 'useContext',
            element: <HookContext />
          },
          {
            path: 'useMemo',
            element: <HookMemo />
          },
          {
            path: 'useRef',
            element: <HookRef />
          }
        ]
      },
      {
        path: '/menu-hooks-react-router',
        element: <MenuHooksReactRouter />
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
