import React, {useState } from 'react'
import axios from 'axios'
import './Add.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus } from '@fortawesome/fontawesome-free-solid'

const Add = () => {
    const [addName, setAddName] = useState('')
    const [addIngredients,  setAddIngredients] = useState('')
    const [addMake,  setAddMake] = useState('')
    const [addImage,  setAddImage] = useState('')
    const [addCalories,  setaAddCalories] = useState('')
    const [addTime,  setAddTime] = useState('')
    const [message, setAddMessage]= useState(false)
   
   const createRecipe = () =>{ 
       try{
        axios.post(`https://61c4bbb0f1af4a0017d99775.mockapi.io/users`, {
            addName, 
            addIngredients, 
            addMake, 
            addCalories,
            addImage, 
            addTime
            
        })
        setAddName('')
        setAddIngredients('')
        setAddMake('')
        setAddImage('')
        setaAddCalories('')
        setAddTime('')
        setAddMessage(true)
        setTimeout(()=>{
            setAddMessage(false)
        }, 1000)

    }
       catch(e){
           console.log(e);

       }
      
   }

    return (
        <div className='add'>  
            <input className='input' type="text" placeholder='Image' value={addImage} onChange={(e) => setAddImage(e.target.value)}></input><br/>
            <input className='input' type="number" placeholder='Calories' value={addCalories} onChange={(e) => setaAddCalories(e.target.value)}></input><br/>
            <input className='input' type="text" placeholder='Name' value={addName} onChange={(e) => setAddName(e.target.value)}></input><br/>
            <input className='input' type="text"  placeholder='Ingredients'  value={addIngredients} onChange={(e) => setAddIngredients(e.target.value)}></input><br/>
            <input className='input' type="text" placeholder='Preparation' value={addMake} onChange={(e) => setAddMake(e.target.value)}></input><br/>
            <input className='input' type="text" placeholder='Time' value={addTime} onChange={(e) => setAddTime(e.target.value)}></input><br/>
            <button  className='btn_add' onClick={createRecipe} >
             <FontAwesomeIcon className='icon' icon={faPlus}/></button><br/>
             {message && (
            <div className="message"> Item uploaded!  </div>)}
       </div>
    )
}

export default Add