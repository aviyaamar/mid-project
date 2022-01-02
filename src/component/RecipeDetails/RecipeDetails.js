import React from 'react'

const RecipeDetails = ({ingredients}) => {

    return ingredients.map((item)=>{
        return <ul>
            <li>{item.text}</li>
        </ul>
    })
}
    

export default RecipeDetails
