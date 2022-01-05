import React, {useContext,useState } from 'react';
import { Link} from 'react-router-dom';
import './Recipe.css'
import {myProvider} from '../../provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock as farClock } from '@fortawesome/free-regular-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'



const Recipe = ({title, calories, image,id, totalTime, remove}) => {
    const appContext = useContext(myProvider)
    const { addToWishList } = appContext
    const [active, setActive] = useState(false)

     let titleX = title.split(' ').slice(0, 2).join(' ')
    let caloriesX = parseInt(calories);

    const toggel = () =>{
      setActive(!active)
    }

    const changeColor = active ? 'red' : 'grey'

    return(
        <div className='recipe_link' key={id}>
          <div className='recipe_content'>
            <img src={image} alt=""  className='img'/>
            <Link className='recipe_title'  to={{pathname: `/details/${id}` }}> {titleX}</Link>
            <div className='recipe_details'>
            <p> <span className='calories'>{caloriesX}</span> <span className='recipe_cal'>Calories</span></p> </div>
            <div className='iconss'>
           <span className='time'>{totalTime}   </span>  <span><FontAwesomeIcon   style={{height:'25px', width:'25px' }} icon={farClock}/></span> 
            <span> <button className='heart-icon' onClick={()=>addToWishList(id)}>
              <FontAwesomeIcon  onClick={()=>toggel()}  style = {{ color: changeColor,  height:'25px', width:'25px'}}
               className='iconHeart' icon={farHeart}/></button> </span>
            <button className='deleteIcon'  onClick={()=>remove()}><FontAwesomeIcon  style={{height:'25px', width:'25px' }} className='icon' icon={faTrashAlt}/></button>
            </div>
            </div>
          
        </div>
    
  
    );
}

export default Recipe;
