import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import FutureWork from './components/FutureWork.jsx'
import MyWorks from './components/MyWorks.jsx'
import CardDetails from './components/CardDetails.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/My-Portfolio/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/My-Portfolio/MyWorks',
    element: <MyWorks/>
  },
  {
    path: '/My-Portfolio/ProjectDetails/:ProjectID',
    element: <CardDetails/>
  },
  {
    path: '/My-Portfolio/Work-In-Progress',
    element: <FutureWork/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
