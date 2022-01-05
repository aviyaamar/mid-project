import React,{useContext, useEffect} from 'react'
import {myProvider}from '../../provider'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Favorite.css'


const Favorite = () => {
  const {favorites,setFavorites, onRemove}=useContext(myProvider)


  
  const  extractIdFromUri = (uri)=> {
    return uri.split('#recipe_').pop()
  }
  
 

   const displayData = ()=>{
     return favorites.map((item)=>{
      let caloriesX = parseInt(item.recipe.calories);
       return (<div key={extractIdFromUri(item.recipe.uri)}>
        <h1 className='title'>{item.recipe.label}</h1> 
        <img className='img' src= {item.recipe.image} alt={item.recipe.label}/> 
        <div className='details_Favorite'>
         <p className='calories '>{caloriesX} <span className='recipe_cal' style={{color:'black'}}> calories</span></p>
         <button className='delete'  onClick={()=>onRemove(extractIdFromUri(item.recipe.uri))}><FontAwesomeIcon  style={{height:'25px', width:'25px' }} className='icon' icon={faTrashAlt}/></button>
         </div>

       </div>)
     })
   }

    return (
     <div className='favoires'>
      <div className='favoritItem'>
    {displayData()}
    </div>
    </div>
 

         )
        
}

export default Favorite
         