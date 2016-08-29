var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    text : String,
    userId : String
    createdAt: {
        type:Date,
        default: new Date()
    },
});


module.exports = mongoose.model('Messages',messageSchema);
