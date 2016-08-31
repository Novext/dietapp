var Messages = require('../models/message');

module.exports.create = function (req,res) {

    var params = req.body;
    var message = new Messages();
    console.log(params);

    message.text = params.text;
    message.userId = params.userId;
    message.createdOn = Date.now();

    message.save(function(err, user) {
        if (err) {
            console.log(err);
          return res.sendStatus(503);
        }
        else return res.redirect('/message');
    });
};
module.exports.edit = function (req,res) {
  var params = req.body;

  Messages.findOne({ _id: req.params.id}, function(err,user){
    if(err) return res.sendStatus(503);
    if(!user) return res.sendStatus(503);
    console.log(user.userId);
    user.text = params.text;
    user.save(function(err){
      if(err){
        console.log(err);
        return res.sendStatus(503);
      }
      return res.redirect('/message');
    });
  });
};


module.exports.editAPI = function (req,res){
  var params = req.body;
  var id = mongoose.Types.ObjectId(req.params.id);

  Messages.findOne({_id: id
  }, function(err,user){
    if(err)
    {
      console.log(err);
      return res.sendStatus(503);
    }
    if(!user) return res.sendStatus(503);
    user.text = params.text;
    user.save(function(err){
      if(err) return res.sendStatus(503);
      else return res.sendStatus(200);
    });
  });
};

module.export.createAPI = function (req,res){
  var params = req.body;
  var message = new Messages();
  console.log(params);

  message.text = params.text;
  message.userId = params.userId;
  message.createdOn = Date.now();

  message.save(function(err,user){
    if(err){
      console.log(err);
      return res.sendStatus(503);
    }
    return res.sendStatus(200);
  });
};
