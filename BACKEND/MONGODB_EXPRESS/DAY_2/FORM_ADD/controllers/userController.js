const userModel = require("../models/user");

const createUser = async (req, res) => {
    try {
        const userData = new userModel(req.body);
        await userData.save();
        res.status(200).send('Data Added');
    } catch (err) {
        res.status(400).send(`Error Name: ${err.name} and Message: ${err.message}`);
    }
};

module.exports = createUser;