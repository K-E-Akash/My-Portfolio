import React, { useEffect } from 'react';
import Heading from '../components/Heading';
import '../styles/MyWorks.css';
import Card2 from './Card2';
import Card3 from './Card3';
import projectsData from '../data/projectsData.json';
import Navbar from './Navbar';
import Back from './Back';

const MyWorks = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when component mounts or updates
    }, []);

    return (
        <>
            <div className="myWorksPage w-full min-h-screen px-[4vw]">
                <Navbar />
                <Back goTo='/My-Portfolio/HomePage' />
                <Heading name='My Works' className='' />

                <h1 className="myWorksPageH1 font-['Dosis']">Major Projects</h1>
                <div className='w-full flex flex-col items-center'>
                    {projectsData.map((project, index) => {
                        if (project.category === "Major") {
                            return <Card2 key={project.id} data={project} />;
                        }
                        return null; // or return an alternative component if needed
                    })}
                </div>

                <h1 className="myWorksPageH1 font-['Dosis']">Minor Projects</h1>
                <div className='w-full flex flex-row flex-wrap justify-evenly items-center'>
                    {projectsData.map((project, index) => {
                        if (project.category === "Minor") {
                            return <Card3 key={project.id} data={project} />;
                        }
                        return null; // or return an alternative component if needed
                    })}
                </div>

                <h1 className="myWorksPageH1 font-['Dosis']">Mechanical Projects</h1>
                <div className='w-full flex flex-row flex-wrap justify-evenly items-center'>
                    {projectsData.map((project, index) => {
                        if (project.category === "Other" || project.category === "DesignWork") {
                            return <Card3 key={project.id} data={project} />;
                        }
                        return null; // or return an alternative component if needed
                    })}
                </div>
            </div>
        </>
    );
}

export default MyWorks;
