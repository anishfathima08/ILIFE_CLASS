const express = require('express')
const { addProduct, getProduct } = require('../controllers/productController')
const router = express.Router() 

router.post('/add', addProduct)
router.get('/products', getProduct)

module.exports = router 