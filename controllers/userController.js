var User = require('../models/user');

module.exports.create = function (req,res) {

    var params = req.body;
    var user = new User();
    console.log(params);

    user.email = params.email;
    user.password = params.password;
    user.name = params.name;
    user.lastname = params.lastname;
    user.phone = params.phone;
    user.createdAt = Date.now();

    user.save(function(err, user) {
        if (err) {
            console.log(err);
          return res.sendStatus(503);
        }
        else return res.redirect('/usuarios');
    });
};

module.exports.edit = function () {
  var params = req.body;

  User.findOne({__id: req.params.id}, function(err,user){
    if(err) return res.sendStatus(503);
    if(!user) return res.sendStatus(503);
    console.log(user.userId);
    user.password = params.password;
    user.name = params.name;
    user.lastname = params.lastname;
    user.phone = params.phone;
      user.save(function(err){
      if(err){
        console.log(err);
        return res.sendStatus(503);
      }
      return res.redirect('/usuarios');
    });
  });
};

module.exports.createAPI = function (req,res){
  var params = req.body;
  var user = new User();

  user.email = params.email;
  user.password = params.password;
  user.name = params.name;
  user.lastname = params.lastname;
  user.phone = params-phone;
  user.createdAt = Date.now();


  user.save(function(err){
    if(err){
      return res.sendStatus(503);
    }
    return res.sendStatus(200);
  });
};

module.exports.editAPI = function(err,user){
  var id = mongoose.Types.ObjectId(req.params.id);
  var params = req.body;
  User.findOne({_id: id},
 function(err,user){
   if(err) return res.sendStatus(503);

   user.password = params.password;
   user.name = params.name;
   user.lastname = params.lastname;
   user.phone = params.phone;

   user.save(function(err){
     if (err){
       console.log(err);
       return res.sendStatus(503);
     }
   });
 });
};
