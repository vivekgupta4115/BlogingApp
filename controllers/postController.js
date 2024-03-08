const Post = require("../models/postModel");

exports.createPost = async (req, res) => {

    try {

        const {title, body} = req.body;

        const post = new Post({
            title, body,
        })

        const savePost = await Post.save();

        res.json({
            post: savePost,

        })
        
    } 
    
    catch(error){
        return res.status(400).json({
            error:"Errorr with create comment",
        })
    }

};


exports.getAllPosts = async (req, res) => {
    try{
        const post = await Post.find().populate("comment").exec();

        res.json({
            posts,
        })
    }

    catch(error){
        return res.status(400).json({
            error:"Errorr with create comment",
        })
    }
}


    
