import express from 'express'
import { Recipe } from '../models/recipeModel.js'



export const createRecipe = async(req, res) => {
    try {
        const org = new Recipe(req.body); 
        

         await org.save();
         res.send(org)
    } catch (error) {
        console.error(error.message);
    }
}