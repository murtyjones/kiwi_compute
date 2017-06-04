
var mongoose = require('mongoose');

var textSchema = new mongoose.Schema({
  postid: {type: String, required: false},
  text: {type: String, required: false},
});

var TextSave = mongoose.model('Text', textSchema);

module.exports = TextSave;
