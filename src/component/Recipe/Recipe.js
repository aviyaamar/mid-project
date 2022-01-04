import React, {useContext } from 'react';
import { Link} from 'react-router-dom';
import './Recipe.css'
import {myProvider} from '../../provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock as farClock } from '@fortawesome/free-regular-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

import Favorite from '../Favorit/Favorite';

const Recipe = ({title, calories, image, key,id, totalTime}) => {
    const appContext = useContext(myProvider)
    const {favorites, setFavorites,recipes, addToWishList } = appContext

     let titleX = title.split(' ').slice(0, 2).join(' ')
    let caloriesX = parseInt(calories);


    const  extractIdFromUri = (uri)=> {
        return uri.split('#recipe_').pop()
      }
  
   
 
    return(
        <div className='recipe_link' key={key}>
          <div className='recipe_content'>
            <img src={image} alt=""  className='img'/>
            <Link className='recipe_title' to={{pathname: `/component/details/${id}` }}> {titleX}</Link>
            <div className='recipe_details'>
            <p> <span className='calories'>{caloriesX}</span> <span className='recipe_cal'>Calories</span> <span className='line'>|</span> <span>{totalTime} <FontAwesomeIcon icon={farClock}/></span> 
            <span> <button className='heart-icon' onClick={()=>addToWishList(id)}><FontAwesomeIcon className='iconHeart' icon={farHeart}/></button> </span>
            </p>
            </div>
            </div>
        </div>
    );
}

export default Recipe;
