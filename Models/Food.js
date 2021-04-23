const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    FoodName: String,
    Type:String,
    Image: String,
    Discription: String
   
});

module.exports = mongoose.model("Food", foodSchema);