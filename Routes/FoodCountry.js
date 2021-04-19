const FoodCountry = require("../Models/FoodCountry");

module.exports = function(app){ 
    app.post("/FoodCountry/addnew",function(req,res){
        var newFood = FoodCountry({
            FoodName:req.body.FoodName,
            Country: req.body.Country,
            Type: req.body.Type,
            Image:req.body.Image,
           
        
        });
        newFood.save(function(err){
            if(err){
                res.json({kq:0, errMsg: err});
            }else{
                res.json({kq:1, errMsg :"newFood add successfully."});
            }
        });

    });
    app.post("/FoodCountry", function(req, res){
        FoodCountry.find(function(err, data){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1, FoodList:data});
            }
        });
    });

    app.post("/FoodCountry/update", function(req, res){
        FoodCountry.findByIdAndUpdate(req.body.FoodCountryID, {FoodName: req.body.FoodName}, function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1 , errMsg: "Update successfully!"});
            }
        });
    });

    app.post("/FoodCountry/delete", function(req, res){
        FoodCountry.findByIdAndDelete(req.body.FoodCountryID, function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1,errMsg: "Delete successfully!"});
            }
        });
    });
}


