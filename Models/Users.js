const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Username: String,
    Email:  String,
    Mobile: String,
    Address:  String,
    Password :  String,
    ConfirmPassword: String,
    Active: Boolean,
    RegisterDate: Date
});

module.exports = mongoose.model("User", userSchema);


