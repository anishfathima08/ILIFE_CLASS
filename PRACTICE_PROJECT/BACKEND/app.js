const connectDB = require("./config/db");
connectDB()

const express = require('express')
const app = express() 

app.use(express.json({limit : '100mb'}))
app.use(express.urlencoded({extended : true, limit : '100mb'}))

const cors = require('cors')
app.use(cors())

const dotenv = require('dotenv');
dotenv.config()

const router = require("./router/productRouter");
app.use('/api', router)

app.listen(process.env.PORT, () => {
    console.log('Server Running Successfully')
})