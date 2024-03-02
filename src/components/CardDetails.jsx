import React from 'react'
import Heading from '../components/Heading'
import "../styles/CardDetails.css"
import projectsData from '../data/projectsData.json';

const CardDetails = () => {
    return (
        <>
            <div className='cardDetails w-full min-h-screen px-[4vw]'>
                <Heading name='Project Details' />
                <h1>Project Name: </h1>
                <h1>Description: </h1>
            </div>
        </>
    )
}

export default CardDetails