var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dietSchema = new Schema({

    image: String,
    title : String,
    description: String,
    preparation:String,
    ingredients: [String],
    date: Date,
    dietId : String,
    userId : String
});


module.exports = mongoose.model('Diets',dietSchema);
