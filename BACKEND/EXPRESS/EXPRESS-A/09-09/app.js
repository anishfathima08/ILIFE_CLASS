const express = require('express');
const app = express();

app.use(express.static('views'));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/htmlfile.html');
})

app.post('/submit',(req,res)=>{
    // res.send(`${JSON.stringify(req.body)}`);
    res.send(req.body);
})
app.listen(8080);