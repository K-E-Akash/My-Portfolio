import React from 'react'
import Card from './Card'
import Heading from './Heading'
import '../styles/Projects.css'

const Projects = () => {
    return (
        <>
            <div className="projectsPage w-full min-h-screen px-[4vw]">
                <Heading name={'PROJECTS'} />
                <div className="cards">
                    {Array.from({ length: 3 }, (e, index) => (
                        <div className='pb-5' key={index}><Card pos={index % 2 === 0 ? 'leftCard' : 'rightCard'} /></div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects