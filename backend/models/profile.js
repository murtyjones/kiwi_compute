
var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({
  username: {type: String, required: false},
  password: {type: String, required: false},
});

var Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
