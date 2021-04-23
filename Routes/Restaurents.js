const Restaurents = require("../Models/Restaurents");

module.exports = function(app){ 
    app.post("/Restaurents/addnew",function(req,res){
        var newRestaurent = Restaurents({
            Name:req.body.FoodName,
            Country: req.body.Country,
            Category: req.body.Category,
            Image:req.body.Image,
         });
         newRestaurent.save(function(err){
            if(err){
                res.json({kq:0, errMsg: err});
            }else{
                res.json({kq:1, errMsg :"newRestaurent add successfully."});
            }
        });

    });
    app.post("/Restaurents", function(req, res){
        Restaurents.find(function(err, data){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1, RestaurentList:data});
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

    // app.post("/FoodCountry/delete", function(req, res){
    //     FoodCountry.findByIdAndDelete(req.body.FoodCountryID, function(err){
    //         if(err){
    //             res.json({kq:0, errMsg:err});
    //         }else{
    //             res.json({kq:1,errMsg: "Delete successfully!"});
    //         }
    //     });
    // });
}


