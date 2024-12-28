import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './Pages/Home/Home.tsx';
import UserPage from './Pages/User/User.tsx';
import ErrorPage from './Pages/Error/Error.tsx';
import Dashboard from './Pages/Dashboard/Dashboard.tsx';

// The Admin is special.
import AdminPage from './Pages/Admin/Admin.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/user",
    element: <UserPage />
  },
  {
    path: "/accessdenied",
    element: <ErrorPage />
  },
  {
    path: "/admin",
    element: <AdminPage />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
