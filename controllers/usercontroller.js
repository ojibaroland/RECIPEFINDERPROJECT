import express from 'express'
import { User } from '../models/UserModel.js'



export const createUser = async(req, res) => {
    try {
        const org = new User(req.body); 
        

         await org.save();
         res.send(org)
    } catch (error) {
        console.error(error.message);
    }
}