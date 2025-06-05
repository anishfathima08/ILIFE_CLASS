const express = require('express');

const app = express();

app.get('/home',(req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    res.send('<h1>Home Page</h1>');
})
app.get(['/about','/about_page'] , (req,res) => {
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    res.send('<h1>About Page</h1>');
})
app.get('/user/:id',(req,res) => {
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    res.send('<h1>User Id '+ req.params.id +'</h1>');
})
app.get('/contact',(req,res) => {
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    res.send(
        `
            <form action="/login" method="POST"> 
                <input type="Submit">
            </form>
        `
    );
})
app.post('/login', (req,res) => {
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    res.send('<h1>Login Page</h1>');
})
app.all('*',(req,res) => {
    res.statusCode=404;
    res.send('<h1>Page Not Found</h1>');
})

app.listen(8080);