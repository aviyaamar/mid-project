import React from 'react'

const Favorite = ({id, image, label, calories}) => {
    return (
        <div className='recipe_link' key={id}>
        <div className='recipe_content'>
          <img src={image} alt=""  className='img'/>
          <p>{label}</p>
          <div className='recipe_details'>
          <p> <span className='calories'>{calories}</span> </p>
          </div>
          </div>
      </div>
    )
}

export default Favorite
