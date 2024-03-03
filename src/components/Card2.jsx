import React from 'react'
import '../styles/Card2.css'
import { Link } from 'react-router-dom'

const Card2 = (props) => {

    const { data } = props

    return (
        <>
            <Link to={`/My-Portfolio/ProjectDetails/${data.id}`}>
                <div className={`card2 w-[60vw] bg-[cyan] rounded mb-24`}>
                    <div className="">
                        <img src={data.image_data} alt="" className={`w-[60vw] card2Img rounded`} />
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Card2