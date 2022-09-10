
const express = require('express');
const router = express.Router();

const {getAllDiscussions, postDiscussion, getDiscussionByID, deleteDiscussion, updateDiscussion} = require("../controllers/discussionController");

router
.route('/')
.get(getAllDiscussions)
.post(postDiscussion)

// router.route('/post/')
// .post(postDiscussion)

router.route('/:id')
.get(getDiscussionByID)
.put(updateDiscussion)
.delete(deleteDiscussion)

module.exports = router;