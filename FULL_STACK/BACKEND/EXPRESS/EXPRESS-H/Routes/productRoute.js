const express = require('express')
const { ProductControll } = require('../controller/productControll')
const route= express.Router()

route.get('/search/:id',ProductControll)

module.exports=route