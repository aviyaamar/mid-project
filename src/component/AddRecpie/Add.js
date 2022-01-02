import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Add = () => {
    const [addName, setAddName] = useState('')
    const [addIngredients,  setAddIngredients] = useState('')
    const [addMake,  setAddMake] = useState('')
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
           addMake
       })
   }
  const displayData  = () =>{
      return data.map((item)=>{
          return <div key={item.id}>
            <h3>{item.addName}</h3>  
            <p> {item.addIngredients}</p> 
            <p>  {item.addMake}</p>
          </div>
      })

  }
    return (
        <div>
            <label>Name:</label>
            <input  onChange={(e) => setAddName(e.target.value)}></input>
            <label>Ingredients</label>
            <input onChange={(e) => setAddIngredients(e.target.value)}></input>
            <label>Ingredients</label>
            <input onChange={(e) => setAddMake(e.target.value)}></input>
            <button onClick={createRecipe}>Add Recipe</button>
            <div>{displayData()}</div>
       </div>
    )
}

export default Add
