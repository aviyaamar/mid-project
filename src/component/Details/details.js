import React from 'react'

const Details = (props) => {
    const {title} = props.location.state
    const {calories} = props.location.state
    const {image} = props.location.state
   
 

    return (
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt=""  className='img'/>   
                
        </div>
    )
}

export default Details
