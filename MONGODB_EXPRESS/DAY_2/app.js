// const connectDB = require("./config/db");
// connectDB()


// const express = require('express')
// const app = express()

// const dotenv = require('dotenv');
// dotenv.config()

// const router = require("./routers/userRouters");
// app.use('/api', router)

// app.use(express.json())

// app.listen(process.env.PORT, () => {
//     console.log('Running Successfully')
// })

//localhost:8080/api/add


const connectDB = require("./config/db");
connectDB()

const express = require('express')
const app = express()

app.use(express.json())

const dotenv = require('dotenv');
dotenv.config()

const router = require("./routers/userRouters");
app.use('/api', router)

app.listen(process.env.PORT, () => {
    console.log('Running Successfully')
})

// localhost:8080/api/add 