"use strict";

const mongoose = require('mongoose');

const commentMovieSchema = mongoose.Schema(
  {
    commentMovieAuthor: {
      type: String,
      required: true,
    },
    commentMovie: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);




module.exports = mongoose.model('Discussion', commentMovieSchema)