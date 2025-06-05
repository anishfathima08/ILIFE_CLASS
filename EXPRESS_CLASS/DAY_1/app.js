// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/html')
//     res.end('Hello')
// })

// server.listen(8080)

// const express = require('express');

// const app = express()

// SINGLE ROUTE

// app.get('/', (req, res) => {
    // res.status = 200;
    // res.send('Hellooo')
    // res.end('HELLO')
    // res.status(200).send('<h1>Home Page</h1>')
// })

// app.get('/about', (req, res) => {
//     res.status(200).send('<h1>About Page</h1>')
// })

// MULTIPLE ROUTE

// app.get(['/about', '/about-content'], (req, res) => {
//     res.status(200).send('<h1>About Page Content</h1>')
// })

// app.get('/form', (req, res) => {
//     res.status(200).send(`
//         <form action='/submit' method='POST'>
//             <input type='text' />
//             <input type='submit' />
//         </form>    
//     `)
// })

// app.post('/submit', (req, res) => {
//     res.status(200).send(
//         `
//             <h1>Form Submitted</h1>
//         `
//     )
// })

// app.listen(8080) 

// const express = require('express')

// const app = express() 

// app.get('/', (req, res) => {
//     res.status(200).send('<h1>Home Page</h1>')
// })

// app.get('/about', (req, res) => {
//     res.status(200).send('<h1>About Page</h1>')
// })

// app.get(['/contact', '/location'], (req, res) => {
//     res.status(200).send('<h1>Contact Page</h1>')
// })

// app.get('/form', (req, res) => {
//     res.status(200).send(`
//         <form action='/submit' method='POST'>
//             <input type='text' />
//             <input type='submit' />
//         </form>    
//     `)
// })

// app.post('/submit', (req, res) => {
//     res.status(200).send('<h1>Form Submitted Successfully</h1>')
// })

// app.all('*', (req, res) => {
//     res.status(200).send('<h1>Page Not Found</h1>')
// })

// app.listen(5000, () => {
//     console.log('Server Running On http://localhost:5000')
// }) 