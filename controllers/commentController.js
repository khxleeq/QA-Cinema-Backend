const asyncHandler = require('express-async-handler'); //have functions in controller

const Post = require('../models/commentModel');

const getAllComments = asyncHandler(async (req, res) => {
const posts = await Post.find();
res.status(200).json(posts)
});

const getCommentByID = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post)
    });

const postComment = asyncHandler(async (req, res) => {
    const post = new Post(req.body);

    const created = await post.save();
    res.status(200).json(created);

});

module.exports = {
    getAllComments, getCommentByID, postComment
}