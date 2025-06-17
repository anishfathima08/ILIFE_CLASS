const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myDB') // myDB => Database Name
.then((con)=>{
    console.log("DB CONNECTED",con.connection.host);
})
.catch((err)=>{
    console.log(err);
})

const myTable = mongoose.model('records',{  // records => Table or Collection Name
    name : String,
    age : Number,
    pwd : String,
    mail : String,
    language_1 : String,
    language_2 : String,
    qualification : String,
    date : String,
    // color : String,
    range : String
}) 

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/form.html');
})

app.post('/submit',(req,res)=>{
    const data = new myTable({  
        name : req.body.name,
        age : req.body.age,
        pwd : req.body.pwd,
        mail : req.body.mail,
        language_1 : req.body.language_1,
        language_2 : req.body.language_2,
        qualification : req.body.qualification,
        date : req.body.date,
        // color : req.body.color,
        range : req.body.range
    })
    data.save();
    res.send('Updated Successfully');
})

app.listen(8080);
