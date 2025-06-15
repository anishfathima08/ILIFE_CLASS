const express = require('express');
const app = express();
const hbs = require('express-handlebars');

app.engine('hbs',hbs.engine({extname : '.hbs'}));
app.set('view engine', 'hbs');

app.get('/',(req,res)=>{
    res.render('index',{ name : "anis"})
})
app.listen(8080,()=>{
    console.log("Running Successfully");
})