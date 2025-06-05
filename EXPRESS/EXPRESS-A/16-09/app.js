const express = require('express');
const app = express();

app.get('/',(req,res,next)=>{
    const result = 'Hello';
    next(result);
})

app.use((req,res,next)=>{
    res.send(req.result)
})

app.listen(8080,()=>{
    console.log('Running Successfully');
})