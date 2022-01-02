import React , { useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';

const Details = () => {
    const { id } = useParams();  
    const ID = '853912c2'
    const API_KEY = '9019af12d79ab8f0312861ce1ff06e86'
     
    const [data, setData]= useState([])

    useEffect(() => {
        getRecipes();
      }, [id]); //updates afetr form submitted

        const getRecipes = async () => {
            try {
                const {data} = await axios.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${ID}&app_key=${API_KEY}`)
                setData(data); 
                console.log(data)  
            } catch(e){
                console.log(e.message) 
        };
    }


    const displayData = () =>{
       return data.map((item)=>{
           return <div>
               <p>{item.recipe.calories}</p>
               <p>{item.recipe.label}</p>

           </div>
       })
     }
  return (
    <div>
      <h3>Requested topic ID: {id}</h3>
      <div className="recipes">
          {displayData()}
          </div>

      </div>
  
  );
};

export default Details
