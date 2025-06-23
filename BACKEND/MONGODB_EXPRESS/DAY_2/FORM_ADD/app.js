const express = require('express')
const app = express()

const router = require('./controllers/userController')

const dotenv = require("dotenv")
dotenv.config()

const connectDB = require("./config/db");

connectDB()

app.use(express.json())

app.use(express.urlencoded({extended:true}));

app.use("/api", router);

app.listen(process.env.PORT , () => {
    console.log("Server running successfully!")
})