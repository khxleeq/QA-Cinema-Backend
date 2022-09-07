"use strict";

const mongoose = require('mongoose');

const discussionSchema = mongoose.Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    topicAuthor: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);




module.exports = mongoose.model('Discussion', discussionSchema)