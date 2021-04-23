const mongoose = require("mongoose");

const restaurentSchema = new mongoose.Schema({
    Name: String,
    Country: String,
    Category: String,
    Image : String,

   
});

module.exports = mongoose.model("Restaurents", restaurentSchema);