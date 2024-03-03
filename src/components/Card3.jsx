import React from 'react'
import '../styles/Card2.css'

const Card2 = (props) => {

    const { data } = props

    return (
        <>
            <div className={`card2 w-[40vw] bg-[cyan] rounded mb-24 h-min`}>
                    <div className="" key={data.id}>
                        <img src={data.image_data} alt="" className={`w-[40vw] card2Img rounded`}/>
                    </div>
            </div>
        </>
    )
}

export default Card2