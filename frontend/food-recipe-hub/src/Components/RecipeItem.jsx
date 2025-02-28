import React from 'react'
import { useLoaderData } from 'react-router-dom'
import foodImg from '../assets/foodrecipe.png'
import { FaStopwatch } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

export default function RecipeItem() {
  const allRecipes = useLoaderData() || []; // Ensure it's an array even if undefined

// console.log(allRecipes)
console.log("Fetched Recipes:", allRecipes.map(recipe => recipe.coverImage));




return (
  <>
  
    <div className='card-container'>
      {allRecipes && allRecipes.length > 0 ? (
        allRecipes.map((item, index) => (
          <div key={index} className='card'>
            

            <img src={item.coverImage} alt="food image" width="120px" height="100px" />




            <div className='card-body'>
              <div className='title'>{item.title}</div>
              <div className='icons'>
                <div className='timer'> 
                  <FaStopwatch />
                </div>
                <FaHeart />
              </div>
            </div>
          </div>
         
        ))
      ) : (
        <p>No recipes found</p> // Show this when data is missing
      )}
    </div>
  </>
);

  
}
