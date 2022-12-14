import express from 'express'
import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            // required: true,
        },
        ingredents: [
            {
                type: String,
                // required: true,
            },
        ],
        duration: {
            type: String,
            
        },
        description: {
            type: String,
            // required
        },
        photo: String,
        comments: [
            {
                type: String
            }

        ],
        rating: {
            type: Number,
            default: 0,
        },
        similarRecipe: [{
            type: String,
        }],
        tag: {
            type: String,
        },
        likes: [{
            type: String,
        }],
        likeCount: {
            type: Number,
            default: 0,
        },


    },
    {
        timestamps: true,
    }
)

export const Recipe = mongoose.model('Recipe', recipeSchema)