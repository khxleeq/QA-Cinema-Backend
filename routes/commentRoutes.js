const express = require('express');
const router = express.Router();

const {getAllComments, postComment, getCommentByID} = require("../controllers/commentController");

router
.route('/')
.get(getAllComments)

router.route('/post/')
.post(postComment)

router.route('/:id')
.get(getCommentByID)

module.exports = router;