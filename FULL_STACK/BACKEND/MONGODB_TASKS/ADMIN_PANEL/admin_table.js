const mongoose = require("mongoose");

const admin_table=mongoose.Schema({
    user_name : String,
    pwd : String
})

const admin = mongoose.model('admin_login',admin_table);

module.exports = admin;