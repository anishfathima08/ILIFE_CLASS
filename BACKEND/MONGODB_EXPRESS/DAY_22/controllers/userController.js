// const userModel = require("../models/user");

// const createUser = (req, res) => {
//     try{
//         const userData = new userModel(req.body)
//         userData.save() 
//         res.status(200).send('Data Added')
//     }
//     catch(err){
//         res.status(404).send(`Error Name : ${err.name} Error Message : ${err.message}`)
//     }
// }

// module.exports = createUser 

const userModel = require("../models/user");

const createUser = (req, res) => {
    try{
        const userData = new userModel(req.body)
        userData.save()
        res.status(200).send('Data Added')
    }
    catch{
        res.status(404).send(`Error Name : ${err.name} and Message : ${err.message}`)
    }
}

module.exports = createUser