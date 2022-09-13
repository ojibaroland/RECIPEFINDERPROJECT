import express from "express";
import dotenv from 'dotenv';
import {connectDB} from './config/database.js'
import recipeRoute from './router/recipeRoute.js'
import userroute from './router/Userrouter.js'

dotenv.config();
connectDB();

const app = express();

app.use(express.json())

const PORT = 4500

app.get('/get',(req,res) => {
    res.send(`Api is live at ${PORT}!!`)
});
app.use('/recipe', recipeRoute)

app.use('/roland', userroute)


app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`)
})