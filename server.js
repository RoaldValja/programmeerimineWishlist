const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const ejs = require('ejs');
require('dotenv').config();
require('./models/db');

const mainPage = require('./routes/main');
const errorPage = require('./routes/error');

const app = express();

app.set('view engine', ejs);
app.use(express.static('public'));
app.use(express.static('images'));
app.use(express.urlencoded({extended: true}));

app.use(mainPage);
app.use(errorPage);

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server is running on Port 3000");
    console.log(process.env.PORT);
});