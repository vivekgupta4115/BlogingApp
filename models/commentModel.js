// schema likhne ke liye mongoose ka use karte hai 

// 1 import mongoose
const mongoose = require("mongoose");

// 2 router handler

// commentSchema define kiya
const commentSchema = new mongoose.Schema({

    // koun se post par comment kar rahe ho
    post: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Post",    //reference to the post model
    },

    // koun comment kar raha hai
    user: {
        type:String,
        required: true
    },

    // kya comment kar raha hai
    body: {
        type:String,
        required: true
    }
})

//export 
    module.exports = mongoose.model("comment", commentSchema);