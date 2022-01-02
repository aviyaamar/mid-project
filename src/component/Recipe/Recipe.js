import React, { useState, useContext } from 'react';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import { Link} from 'react-router-dom';
import './Recipe.css'
import {myProvider} from '../../provider';



const Recipe = ({title, calories, image, ingredients, key, uri,id,  button}) => {
    const appContext = useContext(myProvider)

    const [display, setDisaply] = useState(false)
    const {favorites, setFavorites,recipes } = appContext

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
            {/* <h1 className='title'>{title}</h1> */}
            <p>Calories: {calories}</p>
            <Link to={{pathname: `/component/details/${id}` ,state:{id}}}>{title} </Link>
             <button className='btn-search' onClick={()=>setDisaply(!display)}>showRecipe</button>
             {display && <RecipeDetails ingredients={ingredients}/>}
             <button className='btn-search' onClick={(e)=>addToWishList(id)} >Add to favorites</button>
            
        </div>
    );
}

export default Recipe;
