const express = require('express')
const mongoose = require('mongoose')
const dotenv =require('dotenv')
const cors = require('cors');
const connectDB = require('./config/db');

const app = express()
dotenv.config()
connectDB();
const allroutes = require('./routes/routes')

app.use(express.json())
app.use(cors());

app.use(allroutes)


app.listen(process.env.PORT, ()=>{
    console.log('Server is now running')
})