const express = require("express")
const router = express.Router()

const upload = require("../middleware/upload")

const { AddUser } = require("../controllers/userControllers")

router.post("/add" , upload.single("image") , AddUser)

module.exports = router