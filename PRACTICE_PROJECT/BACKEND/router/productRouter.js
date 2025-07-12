const express = require('express')
const router = express.Router() 

const { addProduct, getProduct, deleteProduct } = require('../controllers/productController')

router.post('/add', addProduct)
router.get('/products', getProduct)
router.delete('/remove/:id', deleteProduct)

module.exports = router