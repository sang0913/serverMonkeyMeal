const mongoose = require("mongoose");

const foodCountrySchema = new mongoose.Schema({
    FoodName: String,
    Country:String,
    Type:String,
    Image: String,
   
});

module.exports = mongoose.model("FoodCountry", foodCountrySchema);