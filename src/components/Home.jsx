import React from 'react'
import '../styles/Home.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <Navbar />

            <div className='homePage w-full h-screen flex items-center justify-center relative'>

                <Link to='/My-Portfolio/Work-In-Progress'>
                    <div className='absolute top-5 left-10'>
                        <img src="images/myPortfolio.svg" alt="" className='' />
                    </div></Link>

                <div className='flex flex-row items-center gap-24 mt-10'>
                    <div>
                        <p className='homeIntroP text-3xl text-[#eeeeee]'>Welcome to my digital realm.</p>
                        <h1 className="homeIntroH1 text-5xl text-[#eeeeee]"><span className='text-[cyan] italic font-extrabold'>I'm Akash</span> a trailblazing web artisan <br /> crafting immersive online experiences that <br /> leave a lasting impression.</h1>
                    </div >

                    <img src="images/responsive-design.gif" alt="" className='w-[300px] homeGif' />
                </div>

            </div >
        </>
    )
}

export default Home