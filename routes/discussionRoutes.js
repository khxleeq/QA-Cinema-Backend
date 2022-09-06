const express = require('express');
const router = express.Router();

const {getAllDiscussions, postDiscussion} = require("../controllers/discussionController");

router
.route('/')
.get(getAllDiscussions)

router.route('/post')
.post(postDiscussion)

module.exports = router;