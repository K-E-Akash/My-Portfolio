import React, { useState, useEffect } from 'react'
import Loader from './components/Loader'
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import FutureWork from './components/FutureWork'


const App = () => {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 6500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="Page w-full min-h-screen bg-[#222831] overflow-hidden">
        
        <div className={`loaderActive ${isVisible ? '' : 'loaderHide'}`}><Loader/></div>
        <Home/>
        <Projects/>
        <About/>
        <Contact/>
        <FutureWork/>

      </div>
    </>
  )
}

export default App