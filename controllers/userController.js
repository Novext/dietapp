var User = require('../models/user');

module.exports.view = function(req, res, next) {
  res.render('client/register');
};

module.exports.create = function (req,res){
  var params = req.body;
  var user = new User();

  user.email = params.email;
  user.password = params.password;
  user.name = params.name;
  user.lastname = params.lastname;
  user.phone = params.phone;
  user.createdAt = Date.now();

  user.save(function(err){
    if(err){
      return res.sendStatus(503);
    }
    else {
        res.redirect('/user/api');
    }
  });
};

module.exports.edit = function(err,user){
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

module.exports.getAll = function (req,res) {
    return res.sendStatus(200);
}

module.exports.getOne = function (req,res) {
    return res.sendStatus(200);
}

module.exports.createSocial = function (req,res) {
    var params = req.body;

    User.findOne({email:params.email},function (err,user) {
        if(err) return res.sendStatus(503);
        if(!user){
            var user = new User();
            user.name = params.name;
            user.lastname = params.lastname;
            user.email = params.email;

            user.save(function (err) {
                if(err) return res.sendStatus(503)
                return res.sendStatus(200);
            });
        }

        res.sendStatus(200);

    })


}
