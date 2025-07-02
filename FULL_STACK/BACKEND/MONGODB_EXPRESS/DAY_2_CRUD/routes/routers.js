const express = require('express')
const router = express.Router()

const { addUser, getUser, deleteUser, updateUser } = require('../controllers/userController')

router.post('/add', addUser)
router.get('/user', getUser)
router.delete('/delete/:id', deleteUser)
router.get('/update/:id', updateUser)

module.exports = router 