import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';


 const myProvider = createContext();

 const ID = '853912c2'
const API_KEY = '9019af12d79ab8f0312861ce1ff06e86'

function Provider({ children }) {

    const [recipes, setRecipes] = useState([]); //stores recipes in array
    const [recipesFromMock, setRecipesFromMock]= useState([])
    const [search, setSearch] = useState(''); //allows users to use search bar
    const [query, setQuery] = useState('Chocolate Cake'); //creates queries
    const [favorites, setFavorites] = useState([])
    const URL= `https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${API_KEY}`


    const  extractIdFromUri = (uri)=> {
      return uri.split('#recipe_').pop()
    }

    useEffect(()=>{
      const getWishList = async() =>{
          const {data} = await axios.get(`https://61c4bbb0f1af4a0017d99775.mockapi.io/recipes`)
          // console.log(data)
          setFavorites(data)
      }
      getWishList()
  },[])
  
  const onRemove =  async(uri) =>{ 
    // console.log(uri);
    let removeItem = favorites.find((item)=> extractIdFromUri(item.recipe.uri)=== uri)  
    // console.log(removeItem); 
    try{
      await axios.delete(`https://61c4bbb0f1af4a0017d99775.mockapi.io/recipes/${removeItem.id}`)
      const newList = favorites.filter((item) => extractIdFromUri(item.recipe.uri) !== uri);
      setFavorites(newList);
    }
    catch(e){
      console.log(e);
    }
  }
  
  const addToWishList = async( id) =>{
    const checkIfExsit = favorites.find((item)=>extractIdFromUri(item.recipe.uri)=== id)
    if(!checkIfExsit){
      const product = recipes.find((item)=> extractIdFromUri(item.recipe.uri)=== id)
      const {data} =  await axios.post(`https://61c4bbb0f1af4a0017d99775.mockapi.io/recipes`, product)
      setFavorites( [...favorites, data])
     }
     else{
       const newFavorite = favorites.filter((item)=> extractIdFromUri(item.recipe.uri) !==id)
       setFavorites(newFavorite)
     }
    //  console.log(favorites)
    //  console.log("recipes", recipes);
    //  console.log(favorites);

  }

    useEffect(() => {
        getRecipes();
      }, [query]); //updates afetr form submitted
    
  
      const getRecipes = async () => {
        const response = await axios.get(URL)
        setRecipes(response.data.hits);
        // console.log(response.data);
      };

      useEffect(()=>{
        const getAllRecipe = async() =>{
            const {data} = await axios.get(`https://61c4bbb0f1af4a0017d99775.mockapi.io/users`)
            // console.log(data)
            setRecipesFromMock(data)
        }
        getAllRecipe()
    },[])
    
 
   
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
        recipesFromMock, 
        setRecipesFromMock , 
        addToWishList,
         onRemove
      }}
    >
      {children}
    </myProvider.Provider>
  );
}
export { Provider, myProvider }

