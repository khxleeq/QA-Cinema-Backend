const asyncHandler = require('express-async-handler'); //have functions in controller

const Comment = require('../models/commentModel');

const getAllComments = asyncHandler(async (req, res) => {
const comments = await Discussion.find();
res.status(200).json(comments)
});

const getCommentByID = asyncHandler(async (req, res) => {
    const comments = await Comment.findById(req.params.id);
    res.status(200).json(comments)
    });

const postComment = asyncHandler(async (req, res) => {
    const comment = new Discussion(req.body);

    const created = await comment.save();
    res.status(200).json(created);

});

module.exports = {
    getAllComments, getCommentByID, postComment
}


