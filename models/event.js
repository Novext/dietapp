var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    start: Date,
    end: Date,
    subject: String,
    createdAt: {
        type:Date,
        default: new Date()
    }
});
