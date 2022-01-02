import React, { useState } from 'react';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Recipe.css'

const Recipe = ({title, calories, image, ingredients, key, uri, id, button}) => {
    const [display, setDisaply] = useState(false)
    
    return(
        <div className='recipe_link' key={key}>
            <img src={image} alt=""  className='img'/>
            {/* <h1 className='title'>{title}</h1> */}
            <p>Calories: {calories}</p>
            <Link to={{pathname: `/component/details/:${id}` }}>{title}</Link>
             <button className='btn-search' onClick={()=>setDisaply(!display)}>showRecipe</button>
             {display && <RecipeDetails ingredients={ingredients}/>}
            

        </div>
    );
}

export default Recipe;
