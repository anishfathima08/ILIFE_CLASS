// const express = require("express")
// const router = express.Router()

// const { AddUser } = require("../controllers/userControllers")

// router.post("/add" , AddUser)

// module.exports = router 


const express = require("express")
const router = express.Router()

const { AddUser } = require("../controllers/userControllers")
const upload = require("../middleware/upload")

router.post("/add" , upload.single('image'), AddUser)

module.exports = router 