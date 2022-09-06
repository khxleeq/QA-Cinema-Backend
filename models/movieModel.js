const mongoose = require('mongoose');

const moviesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 2,
  },
  classification: {
    type: String,
    required: true,
    min: 1,
    max: 3
  },
  actors: {
    type: String,
    required: true,
    min: 3
  },
  director: {
    type: String,
    required: true,
  },
  showtimes: {
    type: Array,
    required: false,
    min: 1,
  },
  description: {
    type: String,
    required: true,
  },
  dateReleased: {
    type: String,
    required: true,
    min: 10,
    max: 10,
  },
  ratings: {
    type: Number,
    required: true,
  },
  poster: {
    type: String,
    required: false,
    min: 4
  }
});
module.exports = mongoose.model('Movie', moviesSchema);