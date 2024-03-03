import React from 'react'
import { MdArrowBackIosNew } from "react-icons/md";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Back = (props) => {
    return (
        <div className=''>
            <Link to={props.goTo}><motion.div
                className='fixed top-[3vw] left-8 text-[cyan] text-4xl'
                whileTap={{ scale: 0.85 }}
                transition={{ type: 'spring', damping: 7, stiffness: 200 }}>
                <MdArrowBackIosNew />
            </motion.div></Link>
        </div>
    )
}

export default Back