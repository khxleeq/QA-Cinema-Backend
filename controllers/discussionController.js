const asyncHandler = require('express-async-handler'); //have functions in controller

const Discussion = require('../models/discussionModel');

const getAllDiscussions = asyncHandler(async (req, res) => {
const posts = await Discussion.find();
res.status(200).json(posts)
});

const getDiscussionByID = asyncHandler(async (req, res) => {
    const posts = await Discussion.findById(req.params.id);
    res.status(200).json(posts)
    });

const postDiscussion = asyncHandler(async (req, res) => {
    const post = new Discussion(req.body);

    const created = await post.save();
    res.status(200).json(created);

});
const deleteDiscussion = asyncHandler(async (req, res) => {
const discussion = await Discussion.findById(req.params.id);
if (!discussion) {
  res.status(400).json({ message: `Discussion not found` });
}

await discussion.remove();

res.status(200).json({ id: req.params.id });
});

module.exports = {
    getAllDiscussions, getDiscussionByID, postDiscussion, deleteDiscussion
}


