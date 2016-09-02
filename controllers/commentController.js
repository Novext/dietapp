var Comments = require('../models/comment');


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
    user.text = params.text;
    user.save(function(err){
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

// module.exports.editAPI = function (req,res){
//   var params = req.body;
//   var id = mongoose.Types.ObjectId(req.params.id);
//
//   Comments.findOne({_id: id
//   }, function(err,user){
//
//     if(err)
//     {
//       console.log(err);
//       return res.sendStatus(503);
//     }
//     user.text = params.text;
//     user.save(function(err){
//       if(err) return res.sendStatus(503);
//       else return res.sendStatus(200);
//     });
//   });
// };
//
// module.export.createAPI = function (req,res){
//   var params = req.body;
//   var comment = new Comments();
//   console.log(params);
//
//   comment.text = params.text;
//   comment.dietId = params.dietId;
//   comment.userId = params.userId;
//   comment.createdOn = Date.now();
//
//   comment.save(function(err,user){
//     if(err){
//       console.log(err);
//       return res.sendStatus(503);
//     }
//     else return res.sendStatus(200);
//   });
// };
