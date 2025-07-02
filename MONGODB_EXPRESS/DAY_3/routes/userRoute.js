const express = require('express')
const router = express.Router()

const upload = require('../middleware/upload')
const addUser = require('../controllers/userControllers')

router.post('/add', upload.single('image'), addUser)

module.exports = router 