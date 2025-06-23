const userModel = require("../models/user");

const addUser = async (req, res) => {
    try {
        const userData = new userModel(req.body);
        await userData.save();
        res.status(200).send('Data Added');
    } catch (err) {
        res.status(404).send(`Error Name: ${err.name} and Message: ${err.message}`);
    }
};

const getUser = async (req, res) => {
    try{
        const userList = await userModel.find()
        res.status(200).send(userList)
    }
    catch(err){
        res.status(404).send(`Error Name: ${err.name} and Message: ${err.message}`)
    }
}

const deleteUser = async (req, res) => {
    try{
        await userModel.findByIdAndDelete(req.params.id)
        res.status(200).send("Data deleted successfully!")
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

const updateUser = async (req, res) => {
    try{
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id , req.body , { new : true })
        res.status(200).send(updatedUser)
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

module.exports = { addUser, getUser, deleteUser, updateUser } 