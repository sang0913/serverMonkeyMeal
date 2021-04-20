const mongoose = require("mongoose");

const restaurentSchema = new mongoose.Schema({
    FoodName: String,
    Country: String,
    Category: String,
    Image : String,
   
   
});

module.exports = mongoose.model("Restaurents", restaurentSchema);