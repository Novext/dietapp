var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    text : String,
    date: Date,
    dietId : String,
    userId : String
});


module.exports = mongoose.model('Users',userSchema);
