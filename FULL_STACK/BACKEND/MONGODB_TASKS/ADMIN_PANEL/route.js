const express=require("express");
const route=express.Router();
const path=require("path");
const fs=require("fs");
const {v4:uuidv4}=require("uuid");
const user_table =require('./user_table');
const admin=require('./admin_table');
const upload=require('./multer');

route.get('/',(req,res)=>{
    const error=0;
    res.render(path.join(__dirname,'ejs','login_form'),{error});
})

route.get('/logout',(req,res)=>{
    const error=0;
    req.session.destroy();
    res.redirect('/');
})

route.post('/',async(req,res)=>{
    const datas=await admin.findOne({user_name:req.body.user_name, pwd:req.body.pwd});
    if(datas){
        const uuidv1=uuidv4();
        req.session.user={
            id:uuidv1
        }
        res.redirect('/card')
    }
    else if(req.session.user){
        const error="Logout"
        res.render(path.join(__dirname,'ejs','login_form'),{error});
    }
    else{
        const error="Invalid Username Or Password"
        res.render(path.join(__dirname,'ejs','login_form'),{error});
    }
})

route.get('/card',async(req,res)=>{
    if(req.session.user){
        const list = await user_table.find().lean();
        const rev_list = list.reverse();
        if(rev_list.length>0){
            res.render(path.join(__dirname, 'ejs', 'list'),{rev_list})
        }
        else{
            res.sendFile(path.join(__dirname, '/no_card.html'));
        }
    }
    else{
        res.redirect('/')
    }
})

route.get('/form',(req,res)=>{
    res.sendFile(__dirname + '/form.html');
})

route.get('/view/:id',async(req,res)=>{
    const id = req.params.id;
    const view = await user_table.findById(id).lean();
    res.json(view);
})

route.get('/edit/:id', async(req,res)=>{
    const id = req.params.id;
    const edit = await user_table.findById(id);
    res.json(edit);
})

route.post('/edit/:id', upload.single('img'), async(req,res)=>{
    const id = req.params.id;
    
    const data =({
        name : req.body.name,
        role : req.body.role,
        description : req.body.description
    })

    if(req.file){
        const img_obj = await user_table.findById(id);
        const img_name = img_obj.img;
        const img_path = __dirname + '/uploads/' + img_name;
        if(fs.existsSync(img_path))
        {
            fs.unlinkSync(img_path);
        }
        data.img=req.file.filename;
    }
    const update = await user_table.findByIdAndUpdate(id, data);
    if(update){
        res.redirect('/card');
    }
})

route.get('/delete/:id', async(req,res)=>{
    const id = req.params.id;
    const img_obj = await user_table.findById(id);
    const img_name = img_obj.img;
    const img_path = __dirname + '/uploads/' + img_name;

    if(fs.existsSync(img_path))
    {
        fs.unlinkSync(img_path);
    }

    const del = await user_table.findByIdAndDelete(id);
    if(del)
    {
        res.redirect('/card');
    }
})

route.post('/submit', upload.single('img'), async(req,res)=>{
    const data = new user_table({
        name : req.body.name,
        role : req.body.role,
        description : req.body.description
    })
    if(req.file){
        data.img=req.file.filename;
    }
    await data.save();
    res.redirect('/card');
})

module.exports=route;
