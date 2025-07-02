const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('DB is Connected'))
        .catch((err) => console.log('DB is Not Connected'))
}

module.exports = connectDB