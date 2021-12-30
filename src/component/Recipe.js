import React,  {useEffect, useState} from 'react'
import axios from 'axios'



const Recipe = () => {

    const ID = '33bec0c7'
    const URL= `https://api.edamam.com/api/recipes/v2`
    const API_KEY = '88fb1bfa66dc0eedf334d2625af8c5c4'

    // useEffect(() => {
    //     const search = async () => {
    //       const data = await axios.get(" https://api.edamam.com/api/recipes/v2");
    //     };
    //     search();
    //   }, []);
    
    return (
        <div>
         <p>hii</p>   
        </div>
    )
}

export default Recipe
