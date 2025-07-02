const connectDB = require("./config/db");
connectDB()

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

const router = require("./routes/userRoute");
app.use('/api', router)

const dotenv = require('dotenv');
dotenv.config()

app.listen(process.env.PORT, () => {
    console.log('Running Successfully')
})