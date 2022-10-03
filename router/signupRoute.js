import express from "express";
import { loginUser } from "../controllers/userlogincontroller.js";
import { verifyToken } from "../middleware/authentication.js";


const router = express.Router();



router.post('/login', loginUser)

export default router;