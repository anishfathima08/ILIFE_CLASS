const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  place: String,
  image: {
    data: Buffer,
    contentType: String
  }
});

module.exports = mongoose.model("User", userSchema);

// const mongoose = require('mongoose')

// const userSchema = new mongoose.Schema({
//     name : {
//         type : String, 
//         required : true
//     },
//     age : {
//         type : Number,
//         required : true  
//     }, 
//     place : {
//         type : String, 
//         required : false
//     }
// })

// const userModel = mongoose.model('user', userSchema)

// module.exports = userModel