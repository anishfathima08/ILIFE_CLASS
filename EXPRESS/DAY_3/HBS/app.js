// HBS - Handle Bars 

// const express = require('express')
// const app = express()
// const PORT = 8080

// app.set('view engine', 'hbs')

// app.get('/', (req, res) => {
//   res.render('index', { title : 'Home', message : 'Welcome To Home Page' })
// }) 

// app.get('/about', (req, res) => {
//   // res.render('about', { title : 'About', message : 'Welcome to About Page' })

//   var title = 'About' 
//   var message = 'Welcome to About Page'

//   res.render('about', { title, message })

// })

// app.listen(PORT) 


const express = require('express')
const app = express()
const PORT = 8080
const path = require('path')

app.set('view engine', 'hbs')

app.set('views', path.join(__dirname, 'public'))

app.get('/', (req, res) => {
  res.render('index', { title : 'Home', message : 'Welcome To Home Page' })
})

app.get('/about', (req, res) => {
  res.render('about', { title : 'About', message : 'Welcome To About Page' })
})

app.listen(PORT)