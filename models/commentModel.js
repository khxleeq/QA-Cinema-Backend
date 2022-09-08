"use strict";

const mongoose = require('mongoose');

const commentSchema = mongoose.Schema(
  {
    topicID: {
      type: String,
      required: true,
    },

    commentAuthor: {
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




module.exports = mongoose.model('Comment', commentSchema)