var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email:String,
    password: String,
    name: String,
    lastname: String,
    phone: String,
    createdAt:{
        type:String,
        default: new Date()
    }
});


module.exports = mongoose.model('Users',userSchema);
