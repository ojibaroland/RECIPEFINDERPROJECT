import { User } from "../models/UserModel.js";
import { generateToken } from "../util/util.js";



export const register = async(req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
  
    const user = await User.create({
      name,
      email,
      password,
    });
    if (user) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });

    if (!user || !user.comparePasswords(password)) {
        return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
      }
   
     return res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
        });
  };