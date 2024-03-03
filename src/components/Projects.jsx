import React from 'react'
import Card from './Card'
import Heading from './Heading'
import '../styles/Projects.css'
import { Link } from 'react-router-dom'
import projectsData from '../data/projectsData.json';


const Projects = () => {
    return (
        <>
            <div className="projectsPage w-full min-h-screen px-[4vw]">

                <Heading name={'PROJECTS'} />

                <div className='cards'>
                    {projectsData.map((project, index) => {
                        if ((project.id === 1) || (project.id === 2) || (project.id === 3)) {
                            return <Card pos={index % 2 === 0 ? 'leftCard' : 'rightCard'} key={project.id} data={project} />;
                        }
                        return null; // or return an alternative component if needed
                    })}
                </div>

                <div className='w-full flex justify-center pt-5 pb-16'>
                    <Link to='/My-Portfolio/MyWorks'>
                        <h1 className="text-3xl bg-[cyan] rounded-full text-black max-w-max py-4 font-['Dosis'] px-8">View All Works</h1>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Projects