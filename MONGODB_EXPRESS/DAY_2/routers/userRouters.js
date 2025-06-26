// const express = require('express')
// const router = express.Router()

// const { createUser, getUser, deleteUser, updateUser } = require('../controllers/userController')

// router.post('/add', createUser)
// router.get('/user', getUser)
// router.delete('/delete/:id', deleteUser)
// router.get('/update/:id', updateUser)

// module.exports = router 

const express = require('express')
const router = express.Router()

const createUser = require('../controllers/userControllers')

router.post('/add', createUser)

module.exports = router