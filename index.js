// this will find and all the .env  file in root folder
require('dotenv').config();

//express
const express = require('express');
const app = express();

//connect to db
const connectDB = require('./config/db');
connectDB();

//middleware
app.use(express.json());

//routes
app.use('/v1/computers', require('./routes/computerRoutes'));

//set port
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));