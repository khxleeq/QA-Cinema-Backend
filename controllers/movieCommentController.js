const asyncHandler = require('express-async-handler'); //have functions in controller

const movieComment = require('../models/movieCommentModel');

const getAllMovieComments = asyncHandler(async (req, res) => {
const movieComments = await Discussion.find();
res.status(200).json(movieComments)
});

const getMovieCommentByID = asyncHandler(async (req, res) => {
    const movieComments = await movieComment.findById(req.params.id);
    res.status(200).json(movieComments)
    });

const postMovieComment = asyncHandler(async (req, res) => {
    const movieComment = new Discussion(req.body);

    const created = await movieComment.save();
    res.status(200).json(created);

});

module.exports = {
    getAllMovieComments, getMovieCommentByID, postMovieComment
}


