// 1 controller ko import kar lete hai 
// 2 fir mapping karte hai
// 3 export karn Hai

// router leke aao (to fir hame express ka referance lena hoga)
const express = require("express");
const router = express.Router();

// import controller 
const {dummyLink, likePost, unlikePost}= require("../controllers/likeController");
const {createComment} = require("../controllers/commentController");
const {createPost, getAllPosts} = require("../controllers/postController");


// mapping create
router.get("/dummyrouter", dummyLink);
router.post("/comments/router", createComment);
router.post("/posts/router", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

//export
module.exports = router;