// var connection = require('./db').connect()
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usersSchema = new Schema({
  username:  {type:String, unique:true},
  email:  {type:String, unique:true},
  password: String,
  follow: {type:Array, default:[]},
  followedBy: {type:Array, default:[]}
});

var userModel = mongoose.model('users', usersSchema);

module.exports = userModel



// registerUser();
