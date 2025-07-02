const express = require('express');
const app = express();
const obj = {
    name : 'anis',
    age : 20
}
app.set('view engine', 'ejs'); // => setting engine with file extension
app.set('views', './views');  // => setting folder name and folder path

app.get('/',(req,res)=>{
    res.render('index',obj) // => render is used to get the file 
})
app.listen(8080,()=>{
    console.log("Running Successfully");
});