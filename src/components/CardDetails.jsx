import React, { useEffect } from 'react'
import Heading from '../components/Heading'
import "../styles/CardDetails.css"
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projectsData.json';
import Back from './Back';

const CardDetails = () => {

    const { ProjectID } = useParams();
    const project = projectsData.find(project => project.id === parseInt(ProjectID));

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when component mounts or updates
    }, [ProjectID]);

    return (
        <>
            <Back goTo='/My-Portfolio/MyWorks'/>
            <div className='cardDetails w-full min-h-screen px-[4vw]'>

                <Heading name='Project Details' />

                <div className='w-full flex justify-around pb-10'>
                    <img src={`../${project.image_data}`} alt="ProjectImage" className='w-[60vw] rounded-lg' />
                </div>

                <h1>Project Name: </h1>
                <p>{project.project_name}</p>
                <h1>PTechnologies Used: </h1>
                <p>{project.technologies_used}</p>
                <h1>Description: </h1>
                <p>{project.description}</p>
                <h1>Key Contributions: </h1>
                {Object.entries(project.key_contributions).map(([key, value]) => (
                    <p key={key}><strong>{key}:</strong> {value}</p>
                ))}
                <h1>Outcome: </h1>
                <p>{project.outcome}</p>

                <div className='pb-10 flex flex-row gap-6'>
                <Link to={project.github} target='blank'>
                    <div className={`btn text-3xl bg-[cyan] rounded-full text-black max-w-max py-2 font-['Dosis'] px-6 mt-10 ${project.view_code ? '' : 'hidden'}`}>Code</div>
                </Link>
                <Link to={project.live_site} target='blank'>
                    <div className={`btn text-3xl bg-[cyan] rounded-full text-black max-w-max py-2 font-['Dosis'] px-6 mt-10 ${project.view_site ? '' : 'hidden'}`}>Site</div>
                </Link>
                </div>
            </div>
        </>
    )
}

export default CardDetails