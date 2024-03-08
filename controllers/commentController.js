//import model
const Post = require("..models/postModel");
const Comment = require("../models/commentModel");

// business logic

exports.createComment = async (req, res) => {

    // object create kaena 
    // fetch data from req body
    try{
        const {post, user, body} = req.body;

        // create a comment object
        const comment = new Comment({
            post,user,body
        });

        // save the new comment into the database
        const savedaComment = await comment.save();
        
        // find the post by id, add the new comment to its comment array
        const updatedPost = await post.findByIdAndUpdate(post, {$push: {comments: savedaComment._id}}, {new:true})
                 
              // populate the comment array with comment documents
                  .populate("comments")
                  .exec();

                  res.json({
                    post: updatedPost,

                  })
    }

    catch(error){
        return res.status(500).json({
            error:"Errorr with create comment",
        })
    }
}