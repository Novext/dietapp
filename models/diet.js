// var mongoose = require('mongoose');
//
// var Schema = mongoose.Schema;
//
// var dietSchema = new Schema({
//
    // image: String,
    // title : String,
    // description: String,
    // preparation:String,
    // //ingredients: [String],
    // createdAt:{ type: Date, default: Date.now},
    // userId : String,
    // //userFavorites: [String],
// });
//
//
// module.exports = mongoose.model('Diet',dietSchema);

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var dietSchema = new Schema({

    image: String,
    title: String,
    description: String,
    preparation: String,
    userID: String,
    createdAt:{ type: Date, default: Date.now},
    // //ingredients: [String],
    // createdAt:{ type: Date, default: Date.now},
    // userId : String,
    // //userFavorites: [String],
});

module.exports = mongoose.model('Diet',dietSchema);
