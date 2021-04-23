const FoodCountry = require("../Models/Food");

module.exports = function(app){ 
    app.post("/Food/addnew",function(req,res){
        var newFood = FoodCountry({
            FoodName:req.body.FoodName,
            Type: req.body.Type,
            Image: req.body.Image,
            Discription:req.body.Discription,
       });
        newFood.save(function(err){
            if(err){
                res.json({kq:0, errMsg: err});
            }else{
                res.json({kq:1, errMsg :"newFood add successfully."});
            }
        });

    });
    app.post("/Food", function(req, res){
        FoodCountry.find(function(err, data){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1, FoodList:data});
            }
        });
    });

    // app.post("/FoodCountry/update", function(req, res){
    //     FoodCountry.findByIdAndUpdate(req.body.FoodCountryID, {FoodName: req.body.FoodName}, function(err){
    //         if(err){
    //             res.json({kq:0, errMsg:err});
    //         }else{
    //             res.json({kq:1 , errMsg: "Update successfully!"});
    //         }
    //     });
    // });

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


