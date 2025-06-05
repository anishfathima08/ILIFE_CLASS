const express = require('express');

const app = express();

const check = (req,res,next) =>{
    const user_id = req.params.id;
    const user_name = req.params.name
    const obj = {
        id:8,
        name:'anisfathima'
    }
    if(user_id == obj.id && user_name == obj.name ){
        next();
    }
    else{
        res.send(`User Id : ${req.params.id} , Admin Name : ${req.params.name} is <b>Invalid</b> User Id and User Name`)
    }
}

app.get('/',(req,res)=>{
    res.send('Home Page');
})
app.get('/user/:id/admin/:name', check ,(req,res,next)=>{
    res.send(`User Id : ${req.params.id} , Admin Name : ${req.params.name} is <b>Valid</b> User Id and User Name`);
})

app.listen(8080);
