import React, {  useState ,useEffect} from 'react';
import axios from 'axios';
import Recipe from '../Recipe/Recipe';
import './Search.css'


 const Search = () => {
    
    const [recipes, setRecipes] = useState([]); //stores recipes in array
    const [search, setSearch] = useState(''); //allows users to use search bar
    const [query, setQuery] = useState('Chocolate Cake'); //creates queries
    const ID = '853912c2'
    const API_KEY = '9019af12d79ab8f0312861ce1ff06e86'
    const URL= `https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${API_KEY}`
    useEffect( () => {
        getRecipes();
      }, [query]); //updates afetr form submitted
    
      const getRecipes = async () => {
        const response = await axios.get(URL)
        setRecipes(response.data.hits);
        console.log(response.data);
      };

  
      const updateSearch = e => {
        setSearch(e.target.value);
      }
    
      const getSearch = e =>{
        e.preventDefault();
        setQuery(search);
        setSearch(''); //resets the search bar
      }

      const displayData = () =>{
         return recipes.map((item)=>{
             return <Recipe
             key={extractIdFromUri(item.recipe.uri)}
             title={item.recipe.label} 
              calories={item.recipe.calories} 
              image={item.recipe.image}
              ingredients={item.recipe.ingredients}
              id = {extractIdFromUri(item.recipe.uri)}
              uri = {item.recipe.uri}
             />
              
         })
      }

    const  extractIdFromUri = (uri)=> {
        return uri.split('#recipe_').pop()
    }
      return(
       
        <div className="App">
          <form className="search-form" onSubmit={getSearch}>
            <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
            <button type="submit" className="search-button">Search</button>
          </form>
          <div className="recipes">
            {displayData()}
          </div>
          
        </div>  
        
                 
        
      
      );
    }
    
 export default Search
 
