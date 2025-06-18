const PORT=8080;
const express=require("express");
const app=express();

const path=require("path");

const route = require('./route');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/admin_panel');

const {v4:uuidv4}=require("uuid");
const session=require('express-session');

app.use(session({
    secret:'your-secret-key',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
app.use(route);


app.listen(PORT,()=>{
    console.log('Running Successfully');
})
