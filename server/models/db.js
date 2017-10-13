var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/microblog'
var promise = mongoose.connect(dbURI, {
  useMongoClient: true,
});
exports.user = require('./users')

exports.connect = function (){
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log("yeh")
  });
}
