import React, { useState } from 'react'
import Heading from './Heading.jsx'
import '../styles/Contact.css'
import { Link } from 'react-router-dom'

const Contact = () => {

    const [userLinks, setfiruserLinks] = useState([
        'https://www.linkedin.com/in/k-e-akash/', 'https://github.com/K-E-Akash', 'mailto:keakash1991@gmail.com', 'https://wa.me/8618976208', 'https://docs.google.com/document/d/1d0i8Gp6rOujv3tVTPMWCOX0B9NqjFBfNpSe93gOF1q0/edit?usp=drive_link'
    ])

    return (
        <>
            <div className='contactPage w-full h-screen px-[4vw] flex flex-col justify-between text-zinc-200'>
                <Heading name={'Contact me'} />

                <div className='Ctop flex flex-row justify-between pb-10 '>
                    <div className="Cstart w-1/3">
                        <Link to='/My-Portfolio/Work-In-Progress'><img src="images/myPortfolio.svg" alt="" className=''/></Link>
                    </div>

                    <div className="Cmid flex flex-col justify-between w-1/3 items-center">
                        <img src="images/Akash2.png" alt="" className='w-[250px] h-[250px]' />
                        <h1 className="text-3xl pt-3 font-['Righteous']">K E Akash</h1>
                        <h4 className="text-lg font-['Kalam']">Aspiring Web Developer</h4>
                    </div>

                    <div className="Cend w-1/3 flex items-end flex-col">
                        {['LinkedIn', 'GitHub', 'Email', 'Whatsapp', 'Resume'].map((e, i) => {
                            return (
                                <Link to={userLinks[i]} target='blank' download={i === 4 ? true : false}>
                                <h1 className={`text-[1.8vw] font-['Righteous'] w-min Clinks`} data-content={e} key={i}>{e}</h1>
                                </Link>
                            )
                        })}
                    </div>
                </div>

                <div className="Cbottom border-t-2 h-20 text-lg border-zinc-800 text-[cyan] text-center pt-3">
                    <h1>&copy; 2024 | My PORTFOLIO | All Rights Reserved</h1>
                    <h1>Designed by K E AKASH</h1>
                </div>

            </div>
        </>
    )
}

export default Contact