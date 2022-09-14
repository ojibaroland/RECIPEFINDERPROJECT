import express from 'express'
import mongoose from 'mongoose';
import { User } from '../models/UserModel.js'


// create a new organization
export const createUser = async (req, res) => {
    try {
        const finder = new User(req.body);


        await finder.save();
        res.json({
            message: "User created successfully",
            data: finder
        })
    } catch (error) {
        console.error(error.message);
    }
}

// get all User
export const getAllUser = async (req, res) => {
    try {
        const finder = await User.find();

        if (finder) {
            res.send(finder);
        } else {
            res.send("No User found");
        }
    } catch (error) {
        console.error(error.message)
    }
}

// get a single User
export const getUser = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.json({
                message: "User not found"
            });
        }
        const id = req.params.id;
        const finder = await User.findById(id);
        if (finder) {
            res.send(finder);
        }
    } catch (error) {
        console.error(error.message);
    }
}

// update a User
export const updateUser = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.json({
                message: "User not found"
            })
        }
        const id = req.params.id;
        const finder = await User.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })
        if (finder) {
            res.json({
                message: "User updated successfully",
                data: finder
            });
        }
    } catch (error) {
        console.error(error.message);
    }
}

// delete User
export const deleteUser = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.json({
                message: "User not found"
            });
        }
        const id = req.params.id;
        const finder = await User.findByIdAndDelete(id);
        if (finder) {
            res.json({
                message: "Organization deleted successfully"
            });
        }
    } catch (error) {
        console.error(error.message);
    }
}