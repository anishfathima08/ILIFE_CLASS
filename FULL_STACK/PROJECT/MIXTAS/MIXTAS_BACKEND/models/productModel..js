const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName : {
        type : String,
        required : true 
    },
    productDesc : {
        type : String,
        required : true 
    },
    productPrice : {
        type : Number,
        required : true 
    },
    productImage : {
        data : Buffer,
        contentType : String 
    }
})

const productModel = mongoose.Model('product', productSchema)

module.exports = productModel