

exports.dummyLink = (req,res) => {
    res.send("this is your dummy page");
}


exports.likePost = async (req, res) => {

    // object create kaena 
    // fetch data from req body
    try{
        const {post, user} = req.body;

        // create a comment object
        const like = new like({
            post,user,
        });

        // save the new comment into the database
        const savedaLike = await like.save();
        
        // find the post by id, add the new comment to its comment array
        const updatedPost = await post.findByIdAndUpdate(post, {$push: {likes: savedaLike._id}}, {new:true});

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


exports.unlikePost = async (req, res) => {

    // object create kaena 
    // fetch data from req body
    try{
        const {post, like} = req.body;

        // find and delete the like collection me se
        const deleteLike = await like.findOneAndDelete({post:post, _id:like});
        
        // find the post by id, add the new comment to its comment array
        const updatedPost = await post.findByIdAndUpdate(post, {$pull: {like: deleteLike._id}}, {new:true});

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