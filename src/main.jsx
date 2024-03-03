import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import MyWorks from './components/MyWorks.jsx'

const router = createBrowserRouter([
  {
    path: "/My-Portfolio/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/My-Portfolio/MyWorks',
    element: <MyWorks/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
