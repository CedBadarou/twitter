var db = require('../models/db')
var model = require('../models/posts')
var user = require('../models/users')
var decode = require('jwt-decode')

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
let responseThread = {
    status: 200,
    data: [],
    message: null
};

exports.newPost = function (req, res) {
  var token = req.headers.cookie;
  var decoded = decode(token),
  username = decoded.username;
  if(!req.body.content){
    return res.status(400).json({mess:"All fills are required"})
  }
  explode = req.body.content.split(" ")
  var newPost = new model (({content :req.body.content, author: username}));
  newPost.save(function (err,resl) {
    if (err) {
      return res.status(404).json(err);
    }
     data = { status: false, error_code: 0, message: 'Unable to insert' };
    if (resl) {
      data = { status: true, error_code: 0,result: resl, message: 'Inserted successfully' };
      explode.forEach(function(word){
        if (word.charAt(0)=="#"){
          console.log("no?")
          model.update({content:req.body.content},
            {$addToSet: {hashtags: word}},
            {},
            function(err, object) {
              if (err){
                console.warn(err.message);  // returns error if no matching object found
              }
            });
          }
        })
    }
      return res.status(200).json(data)
  });
};

exports.deletePost = function(req, res){
   var url = req.url.split("/"),
   id = url.slice(2).toString();
   model.remove({_id:id}, function(err){
    if(err){res.status(404).json({err:"An error occured : "+err});}
    response.data="Yeah bob";
    res.status(200).json(response);
  })
}

exports.getUserPosts = function (req, res) {
  if (!req.body.username){
    var url = req.url.split("/"),
    author = url.slice(2).toString();
  }
  else {
    var author = req.body.username;
  }
  model.find({author:author}, ['content', 'author', 'date'], {sort:{date: -1}}, function(err, posts){
    if(err){console.log("toto");res.status(404).json({error:err});}
    if(posts != ""){
        response.data = posts
        res.status(200).json(response);
      }
    else{
      response.data = [{err:"This user has no posts yet"}];
      res.status(200).json(response)
    }
  })
};

exports.getFollowedPosts = function (req, res) {
  response.data=[];
  user.find({username:req.body.username}, {follow: 1, _id:0}, function(err, followed){
    if(err){res.status(404).json({error:err});}
    if(followed){
      var i = 0;
      followed[0].follow.forEach(function(user){
        model.find({author:user}, ['content', 'author', 'date'], {sort:{date: -1}}, function(err, posts){
          if(err){console.log(err);res.status(404).json({error:err});}
          if(posts != ""){
              response.data.push(posts)
            }
          i+=1;
          if(i === followed[0].follow.length){
            res.status(200).json(response);
          }
        })
      })
    }
    else{
      response.data = {err:"You're not following anyone yet."}
      res.status(501).json(response)
    }
  });
}

exports.getLastPosts = function (req, res) {
  model.find({}, ['content', 'author', 'date'], {sort:{date: -1}}, function(err, posts){
    if(err){console.log(err);res.status(404).json({error:err});}
    if(posts){
        responseThread.data = posts
        res.status(200).json(responseThread);
      }
    else{
      responseThread.data = "No posts yet, be the first to twit !"
      res.status(404).json(responseThread)
    }
  })
};

exports.getPostsByHash = function(req, res){
  var hash = "#"+req.body.hashtag
  model.find({hashtags:hash},
    ['content', 'author', 'date'],
    {sort:{date:-1}},
    function(err, posts){
    if(err){res.status(404).json({error:err});}
    if(posts != ""){
        response.data = posts
        console.log(posts)
        res.status(200).json(response);
      }
    else{
      res.status(404).json({err:"Nothing found"})
    }
  })
}
