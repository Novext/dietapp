var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var favoriteSchema = new Schema({
    text : String,
    dietId : [ObjectId],
    userId : ObjectId,
    createdAt: {
        type: Date,
        default: new Date()
    }
});


module.exports = mongoose.model('favorites',favoriteSchema);
