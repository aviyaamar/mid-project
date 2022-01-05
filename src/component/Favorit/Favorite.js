import React,{useContext, useState} from 'react'
import {myProvider}from '../../provider'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Favorite.css'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const Favorite = () => {
  const {favorites, onRemove}=useContext(myProvider)


  
  const  extractIdFromUri = (uri)=> {
    return uri.split('#recipe_').pop()
  }
  
 

   const displayData = ()=>{
   
      return favorites.map((item)=>{
        // let caloriesX = parseInt(item.recipe.calories);
        let titleX = item.recipe.label.split(' ').slice(0, 2).join(' ')
  
         return (<div key={extractIdFromUri(item.recipe.uri)}>
           <div className='favoiteDetails'>
          <h1 className='title'>{titleX}</h1> 
          <img className='img' src= {item.recipe.image} alt={item.recipe.label}/> 
          <div className='details_Favorite'>
           <p className='calories '>{item.recipe.calories} <span className='recipe_cal' style={{color:'black'}}> calories</span></p>
           <button className='delete'  onClick={()=>onRemove(extractIdFromUri(item.recipe.uri))}><FontAwesomeIcon  style={{height:'25px', width:'25px' }} className='icon' icon={faTrashAlt}/></button>
           </div>
           </div>
         </div>)
       })
     
     
   }

    return (
    <div className='allFav'>
     <div className='titleFav'>
       <FontAwesomeIcon  style={{height:'40px', width: '40px'}}icon={faHeart}/>
        <h1>MY LIST</h1> </div> 
    <div className='favoritItem'>
   
    {displayData()}
    </div>
    </div>
 

         )
        
}

export default Favorite