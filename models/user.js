var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
    email: String,
    password: String,
    name: String,
    lastname: String,
    phone: String,
    createdAt:{ type: Date, default: Date.now},
    //dietFavorites: [String],
});

module.exports = mongoose.model('User',userSchema);

//
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/212asfs',function(err){
//   if(err)
//   throw console.error('No conecto la base de datos');
//   else
//   console.log('Conectado a Mongodb');
// });
//
// var userSchema = new mongoose.Schema({
//
//   name: String,
//   password: String,
//   lastname: String,
//   email: {type: String, unique: true},
//   phone: String,
// });
//
// module.exports = mongoose.model('User', userSchema);
