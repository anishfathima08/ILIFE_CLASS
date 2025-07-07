const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName : {
        type : String,
        required : true
    },
    productCategory : {
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
        type : String,
        requried : true
    }
})

const productModel = mongoose.model( 'product' , productSchema )

module.exports = productModel