const connectDB = require("./config/db");
const userModel = require("./models/user")

connectDB()

const userData = new userModel({
    name : 'Abc',
    age : 20,
    place : "Trichy"
})

userData.save()
    .then(() => console.log('Data is Saved'))
    .catch(() => console.log('Data is Not Saved'))