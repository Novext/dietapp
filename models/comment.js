var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    text : String,
    dietId : String,
    userId : String
    createdAt: {
        type: Date,
        default: new Date()
    }
});


module.exports = mongoose.model('Comments',commentSchema);
