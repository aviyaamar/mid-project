import React, { useContext, useState} from 'react';
import Recipe from '../Recipe/Recipe';
import './Search.css'
import {myProvider} from '../../provider';


 const Search = () => {
  const appContext = useContext(myProvider)
   const {recipes, setQuery} = appContext
   const [search, setSearch] = useState('');

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

const updateSearch = e => {
  setSearch(e.target.value);
}
  return(
        <div className="App">
          { <form className="search-form" onSubmit={getSearch}>
            <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
            <button type="submit" className="search-button">Search</button>
          </form> }
           <div className="recipes">
          {displayData()}
          </div>
          
        </div> 
  )
   
    
    
    }
    
 export default Search
 
