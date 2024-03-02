import React from 'react';
import Heading from '../components/Heading';
import '../styles/MyWorks.css';
import Card2 from './Card2';
import Card3 from './Card3';
import projectsData from '../data/projectsData.json';

const MyWorks = () => {

    return (
        <>
            <div className="myWorksPage w-full min-h-screen">

                <Heading name='My Works' />

                <h1 className='myWorksPageH1'>Major Projects</h1>
                <div className='w-full px-[4vw] flex flex-col items-center'>
                    {projectsData.map((project, index) => {
                        if (project.category === "Major") {
                            return <Card2 key={index} data={project} />;
                        }
                        return null; // or return an alternative component if needed
                    })}
                </div>

                <h1 className='myWorksPageH1'>Minor Projects</h1>
                <div className='w-full px-[4vw] flex flex-row flex-wrap justify-evenly items-center'>
                    {projectsData.map((project, index) => {
                        if (project.category === "Minor") {
                            return <Card3 key={index} data={project} />;
                        }
                        return null; // or return an alternative component if needed
                    })}
                </div>

                <h1 className='myWorksPageH1'>Miscellaneous Projects</h1>
                <div className='w-full px-[4vw] flex flex-row flex-wrap justify-evenly items-center'>
                    {projectsData.map((project, index) => {
                        if (project.category === ("Other" && "DesignWork")) {
                            return <Card3 key={index} data={project} />;
                        }
                        return null; // or return an alternative component if needed
                    })}
                </div>
            </div>
        </>
    );
}

export default MyWorks;
