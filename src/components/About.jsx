import React from 'react'
import '../styles/About.css'
import Heading from './Heading'

const About = () => {

  const myData = {
    'Name': 'Akash',
    'Phone': '+91 8618976208',
    'E-Mail': 'keakash1991@gmail.com',
    'Education': {
      '2020-2023': 'PES University, Bengaluru | B.Tech in Mechanical Engineering',
      '2017-2020': 'PES Polytechnic, Bengaluru | Diploma in Mechanical Engineering',
      '2016-2017': 'Martin Luther English School, Bengaluru | SSLC',
    },
    'Skills': [
      'HTML/CSS/JS', 'React', 'Node.js', 'MongoDB', 'Express.js', 'MERN Stack Development', 'Next.js', 'Python', 'Django', 'Oracle SQL', 'Solid Works', 'Solid Edge', 'Catia', 'ANSYS', 'AutoCAD', 'CNC programming'
    ],
    'Certification': [
      'PySpiders Basavanagudi, Bengaluru | Python Full-Stack Web Developer Certification | Dec 2023'
    ],
    'Publication': [
      'National Conference on Mechanical And Automobile Engineering (NCMAE- 23) | Design and Development of Braking System for Front Wheel Drive Tadpole Type Electric Vehicle | 2023'
    ],
    'Languages': [
      'English', 'Kannada', 'Telugu', 'Hindi'
    ]
  }

  return (
    <>
      <div className='aboutPage px-[4vw] pb-[4vw]'>
        <Heading name={'ABOUT ME'} />
        <div className='w-full h-screen bg-black rounded'>
          <div className="Desc">
            <div className="line">
              <span className='lineNum text-[cyan]'>&nbsp;1&nbsp;|&nbsp;&nbsp;</span>
              <span className="text-blue-500">const&nbsp;</span>
              <span className='text-[#f3ff4a]'>{myData.Name}</span>
              <span> = </span>
              <span className='text-blue-500'>()</span>
              <span> =&gt; </span>
              <span className='text-purple-400'>&#x7B;</span>
            </div>
            <div className="line">
              <span className='lineNum text-[cyan]'>&nbsp;2&nbsp;|&nbsp;&nbsp;&emsp;</span>
            </div>
            <div className="line">
              <span className='lineNum text-[cyan]'>&nbsp;3&nbsp;|&nbsp;&nbsp;&emsp;</span>
              <span className='text-[#f3ff4a]'>ContactDetails</span>
              <span className='text-blue-500'>() </span>
              <span className='text-orange-400'>&#x7B;</span>
              <p className='text-[cyan]'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'Phone': '{myData.Phone}',</p>
              <p className='text-[cyan]'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'Email': '{myData['E-Mail']}',</p>
              <p className='text-orange-400'>&emsp;&emsp;&emsp;&emsp;&nbsp;&#x7D;</p>
            </div>
            <div className="line">
              <span className='lineNum text-[cyan]'>&nbsp;4&nbsp;|&nbsp;&nbsp;&emsp;</span>
              <span className='text-[#f3ff4a]'>Education</span>
              <span className='text-blue-500'>() </span>
              <span className='text-orange-400'>&#x7B;</span>
              <p className='text-[cyan]'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'2020-2023': '{myData.Education['2020-2023']}',</p>
              <p className='text-[cyan]'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'2017-2020': '{myData.Education['2017-2020']}',</p>
              <p className='text-[cyan]'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'2016-2017': '{myData.Education['2016-2017']}',</p>
              <p className='text-orange-400'>&emsp;&emsp;&emsp;&emsp;&nbsp;&#x7D;</p>
            </div>
            <div className="line">
              <span className='lineNum text-[cyan]'>&nbsp;5&nbsp;|&nbsp;&nbsp;&emsp;</span>
              <span className='text-[#f3ff4a]'>Skills</span>
              <span className='text-blue-500'>() </span>
              <span className='text-orange-400'>&#x7B;</span>
              <p className='text-blue-500'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;return <span className='text-[cyan]'>[</span></p>
              <p className='text-[cyan] pl-[12vw]'>'HTML/CSS/JS', 'React', 'Node.js', 'MongoDB', 'Express.js', 'MERN Stack Development', 'Next.js', 'Python', 'Django', 'Oracle SQL', 'Solid Works', 'Solid Edge', 'Catia', 'ANSYS', 'AutoCAD', 'CNC programming'<br/></p>
              <span className='pl-[9.6vw] text-[cyan]'>]</span>
              <p className='text-orange-400'>&emsp;&emsp;&emsp;&emsp;&nbsp;&#x7D;</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About