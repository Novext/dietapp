var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var chatSchema = new Schema({
    creatorId: String,
    participants: [String],
    createdAt: {
        type:String,
        default: new Date()
    }
});


module.exports = mongoose.model('Chats',chatSchema);
