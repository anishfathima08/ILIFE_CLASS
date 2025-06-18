const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config() // config => to get the security keys from .env file 

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('Connected'))
        .catch(() => console.log('Not Connected'))
}

module.exports = connectDB