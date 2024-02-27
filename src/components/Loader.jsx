import React from 'react'
import '../styles/Loader.css'
import { motion } from 'framer-motion'
import { useState } from "react";

const Loader = () => {

    const [isFirstAnimationComplete, setIsFirstAnimationComplete] = useState(false);
    const [secondAnimation, setSecondAnimation] = useState({
        opacity: 1,
        scale: 1.5,
        x: [0, -60, 60, 60],
        rotate: [0, 50, 50, 50],
        borderRadius: 50,
        transition: {
            duration: 2,
            ease: "linear",
            easings: [0.83, 0, 0.17, 1],
        }
    });

    const handleFirstAnimationComplete = () => {
        setIsFirstAnimationComplete(true);
    };


    return (
        <>
            <div className="loader bg-gradient w-full h-screen relative">

                <motion.h1
                    className="absoulte font-['Borel'] text-3xl text-[#eeeeee] absolute top-[50.8%] left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={isFirstAnimationComplete && {
                        opacity: 1,
                        transition: {
                            delay: 1,
                            duration: 0.3,
                            easings: [0.5, 1, 0.89, 1],
                        }
                    }}>
                    Hello
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isFirstAnimationComplete ? secondAnimation : {
                        opacity: 1,
                        scale: [5, 10, 10, 5, 2],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["20%", "0%", "50%", "0%", "50%"],
                        transition: {
                            delay: 1,
                            duration: 2,
                            ease: "easeInOut",
                        }
                    }}
                    onAnimationComplete={handleFirstAnimationComplete}
                    className="blueBall">
                </motion.div>

            </div>
        </>

    )
};

export default Loader