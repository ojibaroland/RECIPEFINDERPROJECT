import express from 'express';
import { createUser, getAllUser, getUser, updateUser, deleteUser} from '../controllers/usercontroller.js';
import { verifyToken } from '../middleware/authentication.js';

const router = express.Router();


router.get('/',getAllUser);
router.get('/:id',getUser)
router.post('/create', createUser);
router.put('/update/:id',updateUser);
router.delete('/delete/:id',deleteUser);


export default router;