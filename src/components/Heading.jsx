import React from 'react'
import '../styles/Heading.css'

const Heading = (props) => {
  return (
    <>
        <div className='relative h-min mb-[16vw]'>
            <div className='w-full h-1 bg-[black] translate-y-[6vw]'></div>
            <h1 className="headingH1 absolute left-1/2 -translate-x-1/2 font-['Kajiro'] text-[10vw] leading-tight text-[cyan] px-5 ">{props.name}</h1>
        </div>
    </>
  )
}

export default Heading