import React, { useState, useEffect } from 'react'
// import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'
import Loader from './components/Loader'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import MyWorks from './components/MyWorks'
import CardDetails from './components/CardDetails'


const App = () => {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 6500);
    return () => clearTimeout(timer);
  }, []);

  // Router
  // const router = createBrowserRouter([
  //   {path: '/', element: <Home/>},
  //   {path: '/Projects', element: <Projects/>},
  //   {path: '/About', element: <About/>},
  //   {path: '/Contact', element: <Contact/>},
  // ]);

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <div className="Page w-full min-h-screen bg-[#222831] overflow-hidden">

        {/* <div className={`loaderActive ${isVisible ? '' : 'loaderHide'}`}><Loader /></div> */}
        <Home />
        <Projects />
        <About />
        <Contact />
        {/* <MyWorks /> */}
        <CardDetails/>

      </div>
    </>
  )
}

export default App