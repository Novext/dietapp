var Comments = require('../models/comment');


module.exports.get = function (req,res) {


    var params = req.body;
    var id = mongoose.Types.ObjectId(req.params.id);

    Comments.findOne({_id: id
    }, function(err,comment){

        if(err) return res.sendStatus(503);
        if(!comment) return;

        var ctx = {};
        ctx.comment = comment;

        User.findOne({_id:mongoose.Types.ObjectId(comment.userId)},function (err,user) {
            if(err) return console.log(err);
            if(!user) return;

            ctx.user = user;

            return res.json(ctx);
        })
    });

}


module.exports.edit = function (req,res){
  var params = req.body;
  var id = mongoose.Types.ObjectId(req.params.id);

  Comments.findOne({_id: id
  }, function(err,user){

    if(err)
    {
      console.log(err);
      return res.sendStatus(503);
    }
    comment.text = params.text;
    comment.save(function(err){
      if(err) return res.sendStatus(503);
      else return res.sendStatus(200);
    });
  });
};

module.export.create = function (req,res){
  var params = req.body;
  var comment = new Comments();
  console.log(params);

  comment.text = params.text;
  comment.dietId = params.dietId;
  comment.userId = params.userId;
  comment.createdOn = Date.now();

  comment.save(function(err,user){
    if(err){
      console.log(err);
      return res.sendStatus(503);
    }
    else return res.sendStatus(200);
  });
};
