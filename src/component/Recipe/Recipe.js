import React, {useContext } from 'react';
import { Link} from 'react-router-dom';
import './Recipe.css'
import {myProvider} from '../../provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock as farClock } from '@fortawesome/free-regular-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

const Recipe = ({title, calories, image, key,id, totalTime}) => {
    const appContext = useContext(myProvider)
    const {favorites, setFavorites,recipes } = appContext

     let titleX = title.split(' ').slice(0, 2).join(' ')
    let caloriesX = parseInt(calories);
 

    const addToWishList = ( id) =>{
        const checkIfExsit = favorites.find((item)=> item.id === id)
        if(!checkIfExsit){
          const product = recipes.find((item)=> item.id === id)
          setFavorites([...favorites, product])
         }
         else{
           setFavorites(favorites.filter((item)=> item.id !== id))
         }
         console.log(favorites)
      }
     
   
     
    return(
        <div className='recipe_link' key={key}>
            <img src={image} alt=""  className='img'/>
            <Link to={{pathname: `/component/details/${id}` }}> {titleX}</Link>
            <p>Calories: {caloriesX} | <span>{totalTime} <FontAwesomeIcon icon={farClock}/></span> 
            <span> <button className='heart-icon' onClick={(e)=>addToWishList(id)}><FontAwesomeIcon className='iconHeart' icon={farHeart}/></button></span>
            </p>
        </div>
    );
}

export default Recipe;
