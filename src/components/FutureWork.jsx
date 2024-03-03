import React, { useState } from 'react'
import '../styles/FutureWork.css'
import { Link } from 'react-router-dom';

const FutureWork = () => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);

        // Reset the click state after a short delay
        setTimeout(() => {
            setIsClicked(false);
        }, 300);
    };

    return (
        <>
            <div className='w-full h-screen relative bg-black overflow-hidden'>
                <img
                    src="images/underConstruction.webp"
                    alt=""
                    className={`futureImg w-full h-full`}
                />
                
                <h1 className="font-['Dosis'] absolute top-[160px] left-1/2 text-[4vw] text-zinc-200 -translate-x-1/2 text-shadow-lg">BACK-END</h1>

                <Link to='/My-Portfolio/'>
                <button
                    className={`futureBtn w-28 h-12 text-2xl text-zinc-100 bg-red-700 absolute top-2/3 left-1/2 -translate-x-1/2  ${isClicked ? 'clicked' : ''}`}
                    onClick={handleClick}
                >Return</button></Link>
            </div>
        </>
    )
}

export default FutureWork