var Diets = require('../models/diet');

module.exports.create = function (req,res) {

    var params = req.body;
    var diet = new Diets();
    console.log(params);

    diet.title = params.title;
    diet.description = params.description;
    diet.preparation = params.preparation;
    //user.
    //user.date = params.date;
    //user.dietId = params.dietId;
    //user.userId = params.userId;
    diet.createdOn = Date.now();

    diet.save(function(err, user) {
        if (err) {
            console.log(err);
          return res.sendStatus(503);
        }
        else return res.redirect('/dieta');
    });
};
module.exports.edit = function () {
  var params = req.body;

  Diets.findOne({_id: req.params.id}, function(err,user){
    if(err) return res.sendStatus(503);
    if(!user) return res.sendStatus(503);
    console.log(user.userId);
    user.title = params.title;
    user.description = params.description;
    user.preparation = params.preparation;
    user.save(function(err){
      if(err){
        console.log(err);
        return res.sendStatus(503);
      }
      return res.redirect('/dieta');
    });
  });
};


module.exports.editAPI = function (){
  var params = req.body;
  var id = mongoose.Types.ObjectId(req.params.id);

  Diets.findOne({_id: id
  }, function(err,user){
    if(err)
    {
      console.log(err);
      return res.sendStatus(503);
    }
    user.title = params.title;
    user.description = params.description;
    user.preparation = params.preparation;
    user.save(function(err){
      if(err) return res.sendStatus(503);
      else return res.sendStatus(200);
    });
  });
};

module.export.createAPI = function (){
  var params = req.body;
  var diet = new Diets();

  diet.title = params.title;
  diet.description = params.description;
  diet.preparation = params.preparation;
  //user.
  //user.date = params.date;
  //user.dietId = params.dietId;
  //user.userId = params.userId;
  diet.createdOn = Date.now();

  diet.save(function(err,user){
    if(err){
      console.log(err);
      return res.sendStatus(503);
    }
    return res.sendStatus(200);
  });
};
