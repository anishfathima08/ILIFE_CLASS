const productModel = require('../models/productModel')

const addProduct = async (req, res) => {
    try{

        const productData = new productModel({
            productName : req.body.productName,
            productCategory : req.body.productCategory,
            productDesc : req.body.productDesc,
            productPrice : req.body.productPrice,
            productImage: req.body.productImage
        })

        await productData.save()
        res.status(200).send('Data Added')
        res.json({ message: "Product added successfully" });
    }
    catch(err){
        res.status(404).send(err)
    }
}

module.exports = {addProduct} 