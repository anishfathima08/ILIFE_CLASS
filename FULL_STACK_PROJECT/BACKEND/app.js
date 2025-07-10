const connectDB = require("./config/db");
connectDB()

const express = require('express')
const app = express() 

app.use(express.json())
app.use(express.urlencoded({extended : true}))

const dotenv = require('dotenv');
dotenv.config()

const router = require("./router/productRouter");
app.use('/api', router)

app.listen(process.env.PORT, () => {
    console.log('Server Running Successfully')
})