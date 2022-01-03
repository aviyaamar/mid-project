import React, {useEffect, useState } from "react";
import {useParams, useHistory } from "react-router-dom";
import axios from 'axios';

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
        return <div key={item.yiel}><li>{item.text}</li></div>;
      });
    };
  return (
    <div>
      <div className="recipes">
          {result&&<div>
            <h2>{result.label}</h2>
            <div>{result.cuisineType&&result.cuisineType.map(e=><h4>{e}</h4>)}</div>
            <img src={result.image} alt={result.label}></img>
            </div>}
            <div><ul>{mapping()}</ul></div>
           <a href={result.url}>preparation instruction</a>
     
          </div>
          <button onClick={() => history.goBack()}>Back</button>

      </div>
  
  )
}

export default Details
