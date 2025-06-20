const mongoose = require('mongoose') 

const userSchema = new mongoose.Schema({
    name : {
        type : String, 
        required : true
    },
    age : {
        type : Number,
        required : true 
    },
    place : {
        type : String,
        required : true
    }
}) 

const userModel = mongoose.model('user', userSchema)

// mongoose.modal('Table Name', Schema Name)

module.exports = userModel