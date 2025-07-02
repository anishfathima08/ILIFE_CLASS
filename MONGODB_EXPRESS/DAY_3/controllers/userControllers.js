const userModel = require("../models/userModel")

const addUser = async (req, res) => {
    try{
        const userData = new userModel({
            name : req.body.name,
            age : req.body.age,
            place : req.body.place,
            image : {
                data : req.file.buffer,
                contentType : req.file.mimetype
            }
        })
        await userData.save()
        res.status(200).send('Data Added SuccessFully')
    }
    catch(err){
        res.status(404).send(err)
    }
}

module.exports = addUser