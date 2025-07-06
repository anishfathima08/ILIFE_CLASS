const connectDB = require("./config/db");
connectDB()

const express = require('express')
const app = express()

const cors = require('cors') 
app.use(cors()) 

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

const router = require("./routers/productRoute");
app.use('/api', router)

const dotenv = require('dotenv');
dotenv.config()

app.listen(process.env.PORT, () => {
    console.log('Server Running Successfully')
})