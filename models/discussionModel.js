"use strict";

const mongoose = require('mongoose');

const discussionSchema = mongoose.Schema(
  {
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