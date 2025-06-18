const connectDB = require('./config/db.js')
const userModel = require('./models/user.js')

connectDB() 

const userData = new userModel({
    name : 'Ani',
    age : 20,
    place : 'Trichy'
})

userData.save() 