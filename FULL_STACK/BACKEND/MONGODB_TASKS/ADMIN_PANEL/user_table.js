const mongoose = require("mongoose");

const table=mongoose.Schema({
    name:String,
    role:String,
    description:String,
    img:String,
})

const user_table=mongoose.model('user_data',table);

module.exports = user_table;