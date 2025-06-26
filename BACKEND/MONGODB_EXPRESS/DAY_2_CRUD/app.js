const express = require('express')
const app = express()

app.use(express.json())

const dotenv = require("dotenv")
dotenv.config()

const connectDB = require("./config/db");
connectDB()

const router = require('./routes/routers');
app.use("/api" , router)

app.listen(process.env.PORT , () => {
    console.log("Server running successfully!")
}) 