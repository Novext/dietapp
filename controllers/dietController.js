var Diets = require('../models/diet');
var mongoose = require('mongoose');

module.exports.getOne = function (req,res){
    var id = mongoose.Types.ObjectId(req.params.id);
    Diets.findOne({_id: id
    }, function(err,diet){
      if(err)
      {
        console.log(err);
        return res.sendStatus(503);
      }
      return res.json(diet);
    });

};

module.exports.edit = function (req,res){
  var params = req.body;
  var id = mongoose.Types.ObjectId(req.params.id);

  Diets.findOne({_id: id
  }, function(err,diet){
    if(err)
    {
      console.log(err);
      return res.sendStatus(503);
    }
    diet.title = params.title;
    diet.description = params.description;
    diet.preparation = params.preparation;
    diet.save(function(err){
      if(err) return res.sendStatus(503);
      else return res.sendStatus(200);
    });
  });
};

module.exports.create = function (req,res){
  var params = req.body;
  var diet = new Diets();

  diet.title = params.title;
  diet.description = params.description;
  diet.preparation = params.preparation;
  diet.dietId = params.dietId;
  diet.userId = params.userId;

  diet.save(function(err,user){
    if(err){
      console.log(err);
      return res.sendStatus(503);
    }
    return res.redirect('/dieta/diet/api');
  });
};

module.exports.search  = function (req,res) {

    var q = req.query.q;

    var params  = {
        title : new RegExp(q,i),
        description: new RegExp(q,i)
    }

    Diets.find(params,function (err,diets) {
        if(err) return res.sendStatus(503);
        return res.json(diets);
    })
}
