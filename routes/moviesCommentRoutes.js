const express = require('express');
const router = express.Router();

const {getAllMovieComments, postMovieComment, getMovieCommentByID} = require("../controllers/commentMovieController");

router
.route('/')
.get(getAllMovieComments)

router.route('/post/')
.post(postMovieComment)

router.route('/:id')
.get(getMovieCommentByID)

module.exports = router;