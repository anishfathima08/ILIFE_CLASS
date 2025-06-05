//Uploading Image File 

const PORT = 8080;
const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');

app.get('/',(req,res)=>{
    res.send(`<form action="/submit" method="POST" enctype = 'multipart/form-data'>
                <input type="file" name="product">
                <input type='submit'>
              </form>`)
})

const storage = multer.diskStorage({
    destination : './uploads',
    filename:(req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)  // product_12312432435.png
    }
})

const upload = multer({storage:storage});

app.use('/uploads',express.static('uploads'))

app.post('/submit', upload.single('product'),(req,res)=>{
    res.send(`<img src = 'http://localhost:${PORT}/uploads/${req.file.filename}' >`)
})

app.listen(PORT, ()=>{
    console.log("Running Successfully");
})
