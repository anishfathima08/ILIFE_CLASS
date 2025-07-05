const mongoose = require('mongoose')
const productModel = require('../models/productModel.')

const addProduct =  async (req, res) => {
    try{
        const productData = new productModel({
            productName : req.body.productName,
            productDesc : req.body.productDesc,
            productPrice : req.body.productPrice,
            productImage : {
                data : req.file.buffer,
                contentType : req.file.mimetype
            }
        })

        await productData.save()
        res.status(200).send('Data Added Successfully')
    }
    catch(err){
        res.status(200).send(`Error Name : ${err.name}`)
    }
}

module.exports = addProduct