var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.listen(3000);



//Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sang09133:sang09133@cluster0.bbqyd.mongodb.net/MonkeyMeal?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true},function(err){
    if(err){
        console.log("mongodb connect err" + err)
    }
    else{
        console.log("mongoDB connected successfully.")
    }
});

//body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


require("./Routes/Account")(app);
require("./Routes/FileManager")(app);
require("./Routes/FoodCountry")(app);