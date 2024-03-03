import React, { useState, useEffect } from 'react'
import './App.css'
import Loader from './components/Loader'
import FullPage from './components/FullPage';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  
  const locomotiveScroll = new LocomotiveScroll();
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

        <div className={`loaderActive ${isVisible ? '' : 'loaderHide'}`}><Loader /></div>
        <FullPage/>

      </div>
    </>
  )
}

export default App