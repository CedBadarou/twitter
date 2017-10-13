const express = require('express');
const router = express.Router();
var ctrlUsers = require('../controllers/users');
var ctrlAuth = require('../controllers/authentification');
var ctrlPosts = require('../controllers/posts');



//USERS
router.get('/users', function(req, res){
  ctrlUsers.usersReadAll(req, res);
})

router.get('/get_followers/:username', function(req, res){
  ctrlUsers.getFollowers(req, res);
})

router.post('/register', function(req, res){
  ctrlAuth.register(req, res);
})

router.post('/login', function(req, res){
  ctrlAuth.login(req, res);
})

router.post('/follow', function(req, res){
  ctrlUsers.follow(req, res);
})

router.post('/unfollow', function(req, res){
  ctrlUsers.unfollow(req, res);
})

// POSTS
router.post('/new_post', function(req, res, next){
  ctrlAuth.loginRequired(req, res, next)
},
function(req, res){
  ctrlPosts.newPost(req, res);
})

router.delete('/delete_post/:id', function(req, res, next){
  ctrlAuth.loginRequired(req, res, next)
},
function(req, res){
  ctrlPosts.deletePost(req, res);
})

router.get('/get_posts/:author', function(req, res){
  ctrlPosts.getUserPosts(req, res)
})

router.get('/get_last_posts', function(req, res){
  ctrlPosts.getLastPosts(req, res)
})

router.post('/get_followed_post', function(req, res){
  ctrlPosts.getFollowedPosts(req, res)
})

router.post('/get_post_by_hash', function(req, res){
  ctrlPosts.getPostsByHash(req, res)
})

router.post('/get_current_user_posts', function(req, res){
  ctrlPosts.getUserPosts(req, res)
})

module.exports = router;
