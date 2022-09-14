import express from "express";
import { signUp, loginUser } from "../controllers/userlogincontroller.js";
import { verifyToken } from "../middleware/authentication.js";


const router = express.Router();


router.post('/signup', signUp)
router.post('/login', loginUser)

export default router;