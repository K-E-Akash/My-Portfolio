import React, { useState } from 'react'
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import '../styles/Navbar.css'
import { motion } from 'framer-motion';


const Navbar = () => {

  const [MenuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div>

        <motion.div
          className='text-[#00FFFF] font-bold text-4xl fixed right-10 top-10 z-10'
          onClick={() => setMenuOpen(!MenuOpen)}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', damping: 7, stiffness: 200 }}>
          {MenuOpen ? <RxCross2 /> : <RiMenu3Line />}
        </motion.div>

        <div className={`NavbarDoc w-2/5 fixed ${MenuOpen ? 'right-[0]' : '-right-[40%]'} top-0 h-screen bg-[#4d535e] flex items-center justify-center z-[9]`}>
          <div className='mr-[10vw]'>
            {['home', 'projects', 'about', 'skills', 'contact'].map((e, i) => {
              return <h1 key={i} className="navItem font-['Righteous'] uppercase text-6xl w-min">{e}</h1>
            })}
          </div>
        </div>

        {MenuOpen && <div
        className='w-full h-screen fixed left-0 top-0 backdrop-blur-lg backdrop-brightness-50 z-[8]'></div>}

      </div>
    </>
  )
}

export default Navbar