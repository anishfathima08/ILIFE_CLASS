const productModel = require('../models/productModel')

const addProduct = async (req, res) => {
    try{

        const productData = new productModel({
            name : req.body.name,
            category : req.body.category,
            desc : req.body.desc,
            price : req.body.price,
            img: req.body.img
        })

        await productData.save()
        res.status(200).send('Data Added')
    }
    catch(err){
        res.status(404).send(err)
    }
}

const getProduct = async (req, res) => {
    try{
        const productData = await productModel.find()
        res.status(200).send(productData)
    }
    catch(err){
        res.status(404).send(err)
    }
}

const removeProduct = async (req, res) => {
    try{
        await productModel.findByIdAndDelete(req.params.id) 
        res.status(200).send('Data Removed !')
    }
    catch(err){
        res.status(404).send(err)
    }
}

module.exports = { addProduct, getProduct, removeProduct }