import React from 'react'
import Card from './Card'
import Heading from './Heading'
import '../styles/Projects.css'
import { Link } from 'react-router-dom'

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

                <div className='w-full flex justify-center pt-10 pb-16'>
                    <Link to='/My-Portfolio/MyWorks'>
                        <h1 className="text-3xl bg-[cyan] rounded-full text-black max-w-max py-4 font-['Dosis'] px-8">View All Works</h1>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Projects