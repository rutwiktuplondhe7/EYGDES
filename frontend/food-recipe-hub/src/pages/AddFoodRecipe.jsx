import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddFoodRecipe() {
    const [recipeData, setRecipeData] = useState({});
    const navigate = useNavigate();

    const onHandleChange = (e) => {
        let { name, value, files } = e.target;
        if (name === "ingredients") {
            value = value.split(","); // Convert ingredients to an array
        } else if (name === "file") {
            value = files[0]; // Ensure it's reading the file
            console.log("Selected file:", value); // Debugging
        }
        setRecipeData((prev) => ({ ...prev, [name]: value }));
    };
    
    const onHandleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("title", recipeData.title);
        formData.append("time", recipeData.time);
        formData.append("instructions", recipeData.instructions);
        formData.append("ingredients", JSON.stringify(recipeData.ingredients));
        formData.append("file", recipeData.file);
    
        // ✅ Debugging FormData
        for (let pair of formData.entries()) {
            console.log(pair[0], pair[1]);
        }
    
        try {
            await axios.post("https://food-recipe-hub.onrender.com/recipe", formData, {
                headers: { 
                    "Content-Type": "multipart/form-data",
                    "authorization" : "bearer " + localStorage.getItem("token") 
                }
            });
            navigate("/");
        } catch (error) {
            console.error("Error adding recipe:", error);
        }
    };
    

    return (
        <>
            <div className='container'>
                <form className='form' onSubmit={onHandleSubmit}>
                    <div className='form-control'>
                        <label>Title:</label>
                        <input type='text' className='input' name='title' onChange={onHandleChange} />
                    </div>
                    <div className='form-control'>
                        <label>Time:</label>
                        <input type='text' className='input' name='time' onChange={onHandleChange} />
                    </div>
                    <div className='form-control'>
                        <label>Ingredients:</label>
                        <textarea type='text' className='input-textarea' name='ingredients' rows='5' onChange={onHandleChange}></textarea>
                    </div>
                    <div className='form-control'>
                        <label>Instructions:</label>
                        <textarea type='text' className='input-textarea' name='instructions' rows='5' onChange={onHandleChange}></textarea>
                    </div>
                    <div className='form-control'>
                        <label>Recipe Image:</label>
                        <input type='file' className='input' name='file' onChange={onHandleChange} />
                    </div>
                    <button type='submit'>Add Recipe</button>
                </form>
            </div>
        </>
    );
}
