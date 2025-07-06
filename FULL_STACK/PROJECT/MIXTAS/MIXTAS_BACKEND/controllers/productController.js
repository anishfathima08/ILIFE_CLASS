const productModel = require("../models/productModel")

const addProduct =  async (req, res) => {
    try{
        const productData = new productModel({
            productName : req.body.productName,
            productType : req.body.productType,
            productDesc : req.body.productDesc,
            productPrice : req.body.productPrice,
            productImage : req.body.productImage
        })

        await productData.save()
        res.status(200).send('Data Added Successfully')
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name}`)
    }
}

const getProduct = async (req, res) => {
    try {
        const products = await productModel.find()
        res.status(200).json(products)
    } catch (err) {
        res.status(500).send(`Error: ${err.message}`)
    }
}


module.exports = { addProduct, getProduct }