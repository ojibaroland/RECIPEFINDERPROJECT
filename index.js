import express from "express";
import dotenv from 'dotenv';
import {connectDB} from './config/database.js'
import recipeRoute from './router/recipeRoute.js'
import userroute from './router/Userrouter.js'
import signuproute from './router/signupRoute.js'

dotenv.config();
connectDB();

const app = express();

app.use(express.json())

const port =process.env.PORT || 4500

app.get('/get',(req,res) => {
    res.send(`Api is live at ${port}!!`)
});
app.use('/recipe', recipeRoute)

app.use('/user', userroute)

app.use('/sign', signuproute)

app.listen(port, () => {
    console.log(`App listening at ${port}`)
})