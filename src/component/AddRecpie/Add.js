import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Add.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus } from '@fortawesome/fontawesome-free-solid'
import Recipe from '../Recipe/Recipe'



const Add = () => {
    const [addName, setAddName] = useState('')
    const [addIngredients,  setAddIngredients] = useState('')
    const [addMake,  setAddMake] = useState('')
    const [addImage,  setAddImage] = useState('')
    const [addCalories,  setaAddCalories] = useState('')
    const [data, setData] = useState([])

    useEffect(()=>{
        const getAllRecipe = async() =>{
            const {data} = await axios.get(`https://61c4bbb0f1af4a0017d99775.mockapi.io/users`)
            console.log(data)
            setData(data)
        }
        getAllRecipe()
    },[])

   const createRecipe = () =>{
       axios.post(`https://61c4bbb0f1af4a0017d99775.mockapi.io/users`, {
           addName, 
           addIngredients, 
           addMake, 
           addCalories,
            addImage
       })
   }
   const displayData = () =>{
    return data.map((item)=>{
        return <Recipe key={item.id}
        title={item.addName} 
         calories={item.addCalories} 
         image={item.addImage}
         ingredients={item.addIngredients}
         id={item.id}
         
        />
         
    })
 }
    return (
        <div className='add'>  
            <input className='input' placeholder='Image' onChange={(e) => setAddImage(e.target.value)}></input><br/>
            <input className='input' placeholder='Calories' onChange={(e) => setaAddCalories(e.target.value)}></input><br/>
            <input className='input'  placeholder='Name' onChange={(e) => setAddName(e.target.value)}></input><br/>
            <input className='input'  placeholder='Ingredients' onChange={(e) => setAddIngredients(e.target.value)}></input><br/>
            <input className='input' placeholder='Preparation' onChange={(e) => setAddMake(e.target.value)}></input><br/>
            <button className='btn_add' onClick={createRecipe}><FontAwesomeIcon className='icon' icon={faPlus}/></button><br/>
            <div className='recipes'>{displayData()}</div>
       </div>
    )
}

export default Add
