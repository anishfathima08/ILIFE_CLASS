const express = require('express')
const router = express.Router()

const { createUSer } = require('../controllers/userController')

router.post('/add', createUSer)

module.exports = router 