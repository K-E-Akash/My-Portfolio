import React from 'react'
import '../styles/Card.css'
import { Link } from 'react-router-dom'

const Card = (props) => {

    const { data } = props 

    return (
        <>
            <Link to={`/My-Portfolio/ProjectDetails/${data.id}`}>
                <div className={`${props.pos} card w-full mb-10`}>
                    <div className={`w-[43.2vw] z-[2]`}>
                        <img src={data.image_data} alt="" className='rounded-3xl' />
                    </div>
                    <div className="cardHover z-[1]">
                        <h1 className="cardHoverH1 fixed -bottom-5 font-['kajiro'] text-[7vw]">{data.project_name}</h1>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Card