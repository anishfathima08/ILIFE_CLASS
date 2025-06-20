const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const connectDB = () => {
    mongoose.connect(process.env.DB_URI)
        .then(() => console.log('Database is Connected'))
        .catch((error) => console.log('Database is Not Connected', error))
}

module.exports = connectDB