import express from 'express';
import { createUser, getAllUser, getUser, updateUser, deleteUser} from '../controllers/usercontroller.js';
import { verifyToken } from '../middleware/authentication.js';

const router = express.Router();


router.get('/',getAllUser);
router.get('/get/:id',getUser)
router.post('/create', createUser);
router.put('/updateuser/:id',updateUser);
router.delete('/deleteuser/:id',deleteUser);


export default router;