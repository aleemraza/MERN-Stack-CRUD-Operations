const mongoose = require("mongoose");
const userSchema =  new mongoose.Schema({
    name:String,
    email:String,
    mobile: Number
},{
    timestamps : true
});
module.exports = mongoose.model("users",userSchema)