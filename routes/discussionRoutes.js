

const express = require('express');
const router = express.Router();

const {getAllDiscussions, postDiscussion, getDiscussionByID, deleteDiscussion} = require("../controllers/discussionController");

router
.route('/')
.get(getAllDiscussions)

router.route('/post/')
.post(postDiscussion)

router.route('/:id')
.get(getDiscussionByID)
.delete(deleteDiscussion)

module.exports = router;