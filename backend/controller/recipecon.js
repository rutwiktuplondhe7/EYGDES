const Recipes = require("../models/recipeschema");

const getRecipes = async (req, res) => {
   const recipes=await Recipes.find();
   return res.json(recipes);
};

const getRecipe = async (req, res) => {
    const recipe=await Recipes.findById(req.params.id)
     res.json(recipe)
};

const addRecipe = async (req, res) => {
    try {
        const { title, ingredients, instructions, time } = req.body;

        // Check if required fields are missing
        if (!title || !ingredients || !instructions) {
            return res.status(400).json({ message: "Required fields cannot be empty!" });
        }

        // Create new recipe
        const newRecipe = await Recipes.create({ title, ingredients, instructions, time });

        // Send response
        return res.status(201).json(newRecipe);
    } catch (error) {
        console.error("Error adding recipe:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

const editRecipe = async (req, res) => {
    const{title,ingredients,instructions,time}=req.body
    let recipe= await Recipes.findById(req.params.id)
    try{
        if(recipe){
            await Recipes.findByIdAndUpdate(req.params.id,
                req.body,{new:true})
            res.json({title,ingredients,instructions,time})
            
        }

    }
    catch(err){
        return res.status(404).json({message:"Error !!"}) 
    }
    


};

const deleteRecipe = (req, res) => {
    res.json({ message: "hello" });
};

module.exports = { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe };
