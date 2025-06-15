const express = require("express");
const app = express();

const morgan = require('morgan');

app.get('/',(req,res)=>{
    res.send('Home Page');
})

app.use(morgan('tiny'));

app.listen(8080,()=>{
    console.log("Running Successfully");
});