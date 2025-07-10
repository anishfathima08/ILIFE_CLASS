const express = require('express')
const router = express.Router() 

const { addProduct, getProduct, removeProduct } = require('../controllers/productController')

router.post('/add', addProduct)
router.get('/products', getProduct)
router.delete('/remove/:id', removeProduct)

module.exports = router