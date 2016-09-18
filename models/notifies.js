var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var notifySchema = new Schema({
    start: Date,
    end: Date,
    subject: String,
    createdAt: {
        type:Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Notifies',notifySchema);
