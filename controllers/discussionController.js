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
  const post = await Discussion.create({
  topic: req.body.topic,
  topicAuthor: req.body.topicAuthor,
  comment: req.body.comment
  });
  res.status(201).json(post);
});

// @desc  update Topic
//@route  PUT /api/discussion/:id
//@access Private
const updateDiscussion = asyncHandler(async (req, res) => {
    const discussion = await Discussion.findById(req.params.id);
    if (!discussion) {
      res.status(400).json({ message: `Topic not found` });
    }
    const updateSchema = await Discussion.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updateSchema);
  });

  const deleteDiscussion = asyncHandler(async (req, res) => {
    const discussion = await Discussion.findById(req.params.id);
    if (!discussion) {
      res.status(400).json({ message: `Movie not found` });
    }
  
    await discussion.remove();
  
    res.status(204).json({ id: req.params.id });
  });


module.exports = {
    getAllDiscussions, updateDiscussion, getDiscussionByID, postDiscussion, deleteDiscussion
}