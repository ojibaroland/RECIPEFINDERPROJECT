import express from 'express';
import mongoose from 'mongoose';
import { Recipe } from '../models/recipeModel.js';


// create a new Recipe
export const createRecipe = async (req, res) => {
    console.log(req.user)

    try {
        // const finder = new Recipe(req.body);

        // console.log("here1")
        // author = userName

        // console.log("here2")
        // console.log(req.body)
        // console.log("here3")
        // await finder.save();
        // res.json({
        //     message: "Recipe created successfully",
        //     data: finder
        // })

        const {name,ingredents,duration} = req.body;



        const newRecipe = await Recipe.create({
            name,
            ingredents,
            duration,
        });

        if(newRecipe){
            res.json({
                name: newRecipe.name,
                ingredents: newRecipe.ingredents,
                duration: newRecipe.duration,
                author: req.user.username
            })
        }
        
    } catch (error) {
        console.error(error.message);
    }
}

// get all organization
export const getAllRecipe = async (req, res) => {
    try {
        const finder = await Recipe.find();

        if (finder) {
            res.send(org);
        } else {
            res.send("No Recipe found");
        }
    } catch (error) {
        console.error(error.message);
    }
}

// get a single Recipe
export const getRecipe = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.json({
                message: "Recipe not found"
            });
        }
        const id = req.params.id;
        const finder = await Recipe.findById(id);
        if (org) {
            res.send(org);
        }
    } catch (error) {
        console.error(error.message);
    }
}

// update an organization
export const updateRecipe = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.json({
                message: "Recipe not found"
            });
        }
        const id = req.params.id;
        const finder = await Recipe.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })
        if (finder) {
            res.json({
                message: "Recipe updated successfully",
                data: finder
            })
        }
    } catch (error) {
        console.error(error.message);
    }
}

// delete Organization
export const deleteRecipe = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.json({
                message: "Recipe not found"
            });
        }
        const id = req.params.id;
        const finder = await Recipe.findByIdAndDelete(id);
        if (finder) {
            res.json({
                message: "Recipe updated successfully",
            })
        }
    } catch (error) {
        console.error(error.message);
    }
}