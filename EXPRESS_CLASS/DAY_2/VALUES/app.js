const express = require('express')
const app = express()

const path = require('path')

app.use(express.urlencoded({ extended : true }))

// username=abc&password=123 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.post('/submit', (req, res) => {

  const { username, password } = req.body

  res.send(`Username : ${username} <br> Password : ${password}`)
})

app.listen(8080)