import express from "express"
import { User } from "../models/UserModel.js";
import { generateToken } from "../util/util.js";


//  create signUp
export const signUp = async (req, res) => {
  const { name, password, email, role } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    throw new Error("User already exists");
  }

  const newUser = await User.create({
    name,
    email,
    password,
    role
  })
  if (newUser) {
    res.status(200).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      token: generateToken(newUser._id)
    })
  }

}

//  // create login
//  export const loginUser = async (req, res) => {
//    const { email, password } = req.body;

//    const user = await User.findOne({ password });

//    if (!user || !user.comparePasswords(password)) {
//      throw new Error("Invalid email or password");
//    }

//    if (user) {
//      res.json({
//        _id: user._id,
//        name: user.name,
//        email: user.email,
//        token: generateToken(user._id),
//      });
//    }
//  }


export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    // console.log(user)
    const token = await generateToken(user._id)
    if (!user) {
      throw new Error("Incorrect email or password")
    }


    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Incorrect Password or Email');
  }

}
