var db = require('../models/db')
var model = require('../models/users')

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

exports.usersReadAll = function(req, res){
  model.find(function(err, user){
    if(err) {res.status(404).json(err);}
    response.data = user;
    res.status(200).json(response);
  })
}

exports.getFollowers = function(req, res){
  var username = req.url.split("/").slice(2)[0]
  model.find({username:username}, {_id:0, followedBy:1, follow:1}, function(err, user){
    if(err) {res.status(404).json(err);}
    if(user){
      console.log(user[0])
      response.data = user[0];
      res.status(200).json(response);
    }
    else{
      res.status(404).json("No followers")
    }
  })
}

exports.follow = function(req, res){
  model.update({username:req.body.follower},
    {$addToSet: {follow: req.body.username}},
    {},
    function(err, object) {
      if (err){
        console.warn(err.message);  // returns error if no matching object found
      }
      else{
        response.data = "You're now following "+ req.body.username
        res.status(200).json(response);
      }
  });
  model.update({username:req.body.username},
    {$addToSet: {followedBy: req.body.follower}},
    {},
    function(err, object) {
      if (err){
        console.warn(err.message);  // returns error if no matching object found
      }
  });
}

exports.unfollow = function(req, res){
  model.update({username:req.body.follower},
    {$pull: {follow: req.body.username}},
    {},
    function(err, object) {
      if (err){
        console.warn(err.message);  // returns error if no matching object found
      }
      else{
        response.data = "You're not following "+ req.body.username+" anymore"
        res.status(200).json(response);
      }
  });

  model.update({username:req.body.username},
    {$pull: {followedBy: req.body.follower}},
    {},
    function(err, object) {
      if (err){
        console.warn(err.message);  // returns error if no matching object found
      }
  });
}
