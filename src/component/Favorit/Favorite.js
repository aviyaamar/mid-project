import React,{useContext} from 'react'
import {myProvider}from '../../provider'


const Favorite = () => {
  const {favorites,setFavorites}=useContext(myProvider)


  const  extractIdFromUri = (uri)=> {
    return uri.split('#recipe_').pop()
  }
  


   const displayData = ()=>{
     return favorites.map((item)=>{
       return (<div key={extractIdFromUri(item.recipe.uri)}>
         
        <h1>{item.recipe.label}</h1> 
        <img src= {item.recipe.image} alt={item.recipe.label}/> 
         <p>{item.recipe.calories}</p>
         
         <button  onClick={()=>onRemove(extractIdFromUri(item.recipe.uri))}>remove</button>


       </div>)
     })
   }
   const onRemove = (uri) =>{
    const newList = favorites.filter((item) => extractIdFromUri(item.recipe.uri) !== uri);

    setFavorites(newList);

   }
    return (
    <div>
    {displayData()}
     </div>

         )
        
}

export default Favorite
         