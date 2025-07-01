// const userModel = require("../models/userModel")

// const AddUser = async (req , res) => {
//     try{
//         const userData = new userModel({
//             name : req.body.name , 
//             age : req.body.age , 
//             place : req.body.place,
//         })

//         await userData.save()
//         res.status(200).send("Data Added!")
//     }
//     catch(err){
//         res.status(200).send(`Error Name : ${err.message} `)
//     }
// }

// module.exports = { AddUser } 


const userModel = require("../models/userModel")

const AddUser = async (req , res) => {
    try{
        const userData = new userModel({
            name : req.body.name , 
            age : req.body.age , 
            place : req.body.place,
            image : {
                data : req.body.buffer,
                contentType : req.body.mimetype
            }
        })

        await userData.save()
        res.status(200).send("Data Added!")
    }
    catch(err){
        res.status(200).send(`Error Name : ${err.message} `)
    }
}

module.exports = { AddUser } 