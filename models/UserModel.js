import express from "express"
import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ['Regular', 'Professional'],
            default: 'Regular'
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    },
)

// hash password
// userSchema.pre('save', async function(next){
//     const user = this
//     if(user.isModified('password')) {
//         const salt = await bcrypt.genSalt();
//         user.password = await bcrypt.hash(user.password, salt);
//         next();
//     }
//     next()

// })

export const User = mongoose.model('User', userSchema)