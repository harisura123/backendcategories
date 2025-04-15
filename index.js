const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config;
const {connection} = require('./db')

const app = express()

app.use(express.json());
app.use(cors());

const AuthRouter = require('./Routes/AuthRouter');
const CategoryRouter = require('./Routes/Categories');

app.listen(process.env.PORT, async () => {
    try{
        await connection;
        console.log(`Db is connect Successfully`)
    }catch(err){
        console.log(err)
    }    
    console.log(`Server is Running`)
})

app.use('/auth', AuthRouter);

app.use('/api', CategoryRouter);

