const port = 8080;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, path.join(__dirname, 'uploads'));
    },
    filename : (req,file,cb)=>{
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({storage : storage});

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
mongoose.connect('mongodb://127.0.0.1:27017/crud');

const mySchema = mongoose.Schema({
    Name : String,
    Age : Number,
    Password : String,
    Image : String
})

const myTable = mongoose.model('records',mySchema);  //records => Table Name

app.get('/',async(req,res)=>{
    const list = await myTable.find().lean();
    const rev_list = list.reverse();
    if(rev_list.length>0){
        res.render(path.join(__dirname, 'ejs', 'list'),{rev_list})
    }
    else{
        res.send(`<h1>No Data Found ! <br><br> <a href = "/form">Add User</a></h1>`)
    }
})

app.get('/form',(req,res)=>{
    res.sendFile(__dirname + '/form.html');
})

app.get('/view/:id',async(req,res)=>{
    const id = req.params.id;
    const view = await myTable.findById(id).lean();
    res.json(view);
})

app.get('/edit/:id', async(req,res)=>{
    const id = req.params.id;
    const edit = await myTable.findById(id);
    res.json(edit);
})

app.post('/edit/:id', upload.single('Image'), async(req,res)=>{
    const id = req.params.id;

    const img_obj = await myTable.findById(id);
    const img_name = img_obj.Image;
    const img_path = __dirname + '/uploads/' + img_name;
    
    if(fs.existsSync(img_path))
    {
        fs.unlinkSync(img_path);
    }
    
    const data =({
        Name : req.body.Name,
        Age : req.body.Age,
        Password : req.body.Password,
    })

    if(req.file){
        data.Image=req.file.filename;
    }
    const update = await myTable.findByIdAndUpdate(id, data);
    if(update){
        res.redirect('/');
    }
})

app.get('/delete/:id', async(req,res)=>{
    const id = req.params.id;
    const img_obj = await myTable.findById(id);
    const img_name = img_obj.Image;
    const img_path = __dirname + '/uploads/' + img_name;

    if(fs.existsSync(img_path))
    {
        fs.unlinkSync(img_path);
    }

    const del = await myTable.findByIdAndDelete(id);
    if(del)
    {
        res.redirect('/');
    }
})

app.use('/uploads',express.static(path.join(__dirname,'/uploads')));

app.post('/submit', upload.single('Image'), async(req,res)=>{
    const data = new myTable({
        Name : req.body.Name,
        Age : req.body.Age,
        Password : req.body.Password,
    })
    if(req.file){
        data.Image=req.file.filename;
    }
    await data.save();
    res.redirect('/');
})

app.listen(port,()=>{
    console.log('Running Successfully');
})