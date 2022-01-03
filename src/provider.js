import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';


 const myProvider = createContext();

const ID = '853912c2'
const API_KEY = '9019af12d79ab8f0312861ce1ff06e86'

function Provider({ children }) {
    const [recipes, setRecipes] = useState([]); //stores recipes in array
    const [search, setSearch] = useState(''); //allows users to use search bar
    const [query, setQuery] = useState('Chocolate Cake'); //creates queries
    const [favorites, setFavorites] = useState([])
    const URL= `https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${API_KEY}`

    useEffect(() => {
        getRecipes();
      }, [query]); //updates afetr form submitted
    
      const getRecipes = async () => {
        const response = await axios.get(URL)
        setRecipes(response.data.hits);
        console.log(response.data);
      };

 
   
  return (
    <myProvider.Provider
      value={{
        recipes, 
        setRecipes,
        search, 
        setSearch,
        query, 
        setQuery,
        favorites, 
        setFavorites, 
      }}
    >
      {children}
    </myProvider.Provider>
  );
}
export { Provider, myProvider }

