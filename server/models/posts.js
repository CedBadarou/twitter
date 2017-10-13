// var connection = require('./db').connect()
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var postsSchema = new Schema({
  content:  {type:String, max:140},
  author: String,
  date:{ type: Date, default: Date.now },
  hashtags:{ type: Array, default: [] }
});

var postModel = mongoose.model('posts', postsSchema);

module.exports = postModel



// registerUser();
