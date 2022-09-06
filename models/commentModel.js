"use strict";

const mongoose = require('mongoose');

const commentSchema = mongoose.Schema(
  {
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




module.exports = mongoose.model('Discussion', commentSchema)