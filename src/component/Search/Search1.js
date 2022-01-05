import React, { useContext, useState} from 'react';
import Recipe from '../Recipe/Recipe';
import './Search.css'
import {myProvider} from '../../provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'

 const Search1 = () => {
  const appContext = useContext(myProvider)
   const {recipes, setQuery, recipesFromMock,setRecipesFromMock} = appContext
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
         totalTime ={item.recipe.totalTime}
      
        />
         
    })
 }
 const  extractIdFromUri = (uri)=> {
  return uri.split('#recipe_').pop()
}

const updateSearch = e => {
  setSearch(e.target.value);
}

const remove = (id) =>{
  const newList = recipesFromMock.filter((item) => item.id !== id);
  setRecipesFromMock(newList);

 }
const displayDataFromMock = () =>{
  return recipesFromMock.map((item)=>{
      return <Recipe
      key={item.id}
      title={item.addName} 
      calories={item.addCalories} 
      image={item.addImage}
      id = {item.id}
      remove ={()=>remove(item.id)}
     />
       
  })
}
  return(
        <div className="App">
           <form className="search-form" onSubmit={getSearch}>
            <input
             type="text" className="search-bar" value={search} onChange={updateSearch}  />
            <div type="submit" className="search-button"><FontAwesomeIcon className='icon' icon={faSearch} /> </div>
          </form> 
          <div className="recipes">
          {displayData()}
          {displayDataFromMock()}
          </div>
          
        </div> 
  )
   
    
    
    }
    
 export default Search1
 
