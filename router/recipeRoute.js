import express from 'express';
import { createRecipe, getAllRecipe, getRecipe, updateRecipe,deleteRecipe } from '../controllers/recipecontroller.js';
import { verifyToken } from '../middleware/authentication.js';

const router = express.Router();


router.get('/',getAllRecipe);
router.get('/:id',getRecipe);
router.post('/create', createRecipe);
router.put('/update/:id',updateRecipe);
router.delete('/delete/:id',deleteRecipe)





export default router;
