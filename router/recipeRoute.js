import express from 'express';
import { createRecipe, getAllRecipe, getRecipe, updateRecipe,deleteRecipe } from '../controllers/recipecontroller.js';
import { verifyToken, admin , prof } from '../middleware/authentication.js';

const router = express.Router();


router.get('/',getAllRecipe);
router.get('/:id',getRecipe);
router.post('/create', verifyToken, prof, admin, createRecipe);
router.put('/update/:id', admin, updateRecipe);
router.delete('/delete/:id', admin, deleteRecipe)





export default router;
