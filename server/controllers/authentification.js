var db = require('../models/db')
var model = require('../models/users')
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken')
var decode = require('jwt-decode')
const saltRounds = 10;

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

exports.register = function (req, res) {
  if(!req.body.username || !req.body.email || !req.body.password){
    res.status(400).json("All fills are required")
  }
  var regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/
  if (!regex.test(req.body.email)){
    response.data=["Invalid email"]
    res.status(200).json(response)
  }
  else{
    model.findOne({username:req.body.username}, function(err, user){
      if(err){res.status(404).json({error:err});}
      if(user){
        response.data=["Username already used"]
        return res.status(200).json(response)
      }
      else{
        model.findOne({email:req.body.email}, function(err, user){
          if(err){res.status(404).json({error:err});}
          if(user){
            response.data=["Email already used"]
            return res.status(200).json(response)
          }
          else{
            var salt = bcrypt.genSaltSync(saltRounds);
            var hashPassword = bcrypt.hashSync(req.body.password, salt);
            var newUser = new model (({username: req.body.username, email :req.body.email, password: hashPassword}));
            newUser.save(function (err,resl) {
              if (err) {
                response.data = ['Registration failed'];
              }
              if (resl) {
                response.data = ['Inserted successfully'];
              }
              res.status(200).json(response)
            });
          }
        })
      }
    })
  }

};

exports.login = function (req, res) {
  if(!req.body.username || !req.body.password){
    return res.status(400).json({mess:"All fills are required"})
  }
  model.findOne({username:req.body.username}, function(err, user){
    if(err){res.status(404).json({error:err});}
    if(user){
      var matchPasswords = bcrypt.compareSync(req.body.password, user.password);
      if(matchPasswords){
        response.data = jwt.sign({ username: user.username, _id: user._id}, 'RESTFULAPIs');
        response.message=user.username;
        console.log(response.data);
        response.message = "You're now connected"
        res.status(200).json(response);
      }
      else{
        response= "Invalid password"
        res.status(501).json(response)
      }
    }
    else{
      response= "Invalid username"
      res.status(501).json(response)
    }
  })
};

exports.loginRequired = function (req, res, next){
  if(req.headers.cookie){
    var token = req.headers.cookie;
    var decoded = decode(token),
    username = decoded.username;
    model.findOne({username:username}, function(err, user){
      if(err){res.status(404).json({error:err});}
      if(user){
        next()
      }
      else{
        return res.status(501).json({message:"Unauthorized user"})
      }
    })
  }
  else{
    return res.status(501).json({message:"Unauthorized user"})
  }
}
