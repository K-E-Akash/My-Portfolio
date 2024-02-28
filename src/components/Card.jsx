import React from 'react'
import '../styles/Card.css'

const Card = (props) => {
    return (
        <>
            <div className={`${props.pos} card w-full`}>
                <div className={`w-[43.2vw] h-[24.3vw] z-[2]`}>
                    <img src="images/sundownStudio.png" alt="" className='rounded-3xl' />
                </div>
                <div className="cardHover z-[1]">
                    <h1 className="cardHoverH1 fixed top-[50%] font-['kajiro'] text-[10vw]">Sundown Studio</h1>
                </div>
            </div>
        </>
    )
}

export default Card