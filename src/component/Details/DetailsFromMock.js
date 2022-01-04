import React, {useEffect, useState, useContext } from "react";
import {useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import './details.css'
import Details from "./details";

const DetailsFromMock = () => {
  const history = useHistory()
  const [ingFrom, setIngFrom]= useState([])
    const { id } = useParams();  
    
    const getRecipesFromMock = async() =>{
      try{
        const {res} = await axios.get(`https://61c4bbb0f1af4a0017d99775.mockapi.io/users/:${id}`)
        console.log(res.data);
        setIngFrom(res)

      }
      catch(e){
        console.log(e)
      }
    }

    useEffect(() => {
      getRecipesFromMock();
    }, [id])

    const mappingFromMock = () =>{
      return ingFrom.map((item)=>{
        return <Details  key={item.id}
       calories= {item.addCalories}
       ingrident ={item.addIngredients}
        
        />
        
        
      })
    }

   
  return (
    <div className="recipe_container">
  
      
       <div>{mappingFromMock()}</div>
      </div>
      
  )
}

export default DetailsFromMock
