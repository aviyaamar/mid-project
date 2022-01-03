import React, {useEffect, useState } from "react";
import {useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import './details.css'


const Details = () => {
  const history = useHistory()
  const [result, setResult] = useState([]);
  const [ing, setIng] = useState([]);
    const { id } = useParams();  
    const ID = '853912c2'
    const API_KEY = '9019af12d79ab8f0312861ce1ff06e86'
    const URL = `https://api.edamam.com/api/recipes/v2/${id}/?type=public&app_id=${ID}&app_key=${API_KEY}`

    useEffect(() => {
        getRecipes();
      }, [id])
    
        const getRecipes = async () => {
            try {
                const response = await axios.get(URL)
                const {ingredients}=response.data.recipe;
                setIng(ingredients)
                setResult(response.data.recipe); 
                console.log(response.data.recipe) 
            } catch(e){
                console.log(e.message) 
        }
    }
    const mapping = () => {
      return ing.map((item) => {
        return <div key={item.yiel}><li style={{ listStyleType:'circle' }}>{item.text}</li></div>;
      });
    };
  return (
    <div className="recipe_container">
    <div className="recipes_deatails">
      <div  className="recipes_image"> 
      <img className="img_deatail" src={result.image} alt={result.label}></img>
      </div>
     <div className="details">
     <div className="btn_back"> <button  className="btn" onClick={() => history.goBack()}> <i class="fas fa-long-arrow-alt-left"></i>Return to recipes</button> </div>
        {result&&<div> <h2 className="details_title">{result.label}</h2> </div>}
            <div className="cusine_deatail">
              <h3 className= "cusine">Cuisine Type: </h3>{result.cuisineType&&result.cuisineType.map(e=><span>{e} |  </span>)}</div>  
              <div className="cusine_deatail">
              <h3 className= "cusine">Meal Type: </h3>{result.cuisineType&&result.mealType.map(e=><span>{e}   </span>)}</div>  
            </div> 
            
      </div>
       <div className="ingredients">
         <div className="ingredients_length">
         <h1 className="cusine">Ingredients</h1>
       <div className="ingredients_li"><ul>{mapping()}</ul></div>
       </div>
       <div className="ingredients_prepartion">
       <h1 className="cusine">Preparation</h1>
       <p className="ingredients_pa">This recipe is provided by <span className="source">{result.source}</span> . You can view the detailed preparation instructions by clicking the following link</p>
      <a className="sourceLink" href={result.url}>PREPARATION INSTRUCTION</a>
      </div>
      </div>
      </div>
      
  )
}

export default Details
