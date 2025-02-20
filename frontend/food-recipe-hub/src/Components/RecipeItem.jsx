import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function RecipeItem() {
const allRecipes=useLoaderData()
console.log(allRecipes)
  return (
    <div>
      
    </div>
  )
}
