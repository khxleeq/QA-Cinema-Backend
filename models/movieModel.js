const mongoose = require('mongoose');

const moviesSchema = mongoose.Schema({
  fullTitle: {
    type: String,
    required: true,
    min: 2,
  },
  poster: {
    type: String,
    required: false,
    min: 4
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
  directors: {
    type: String,
    required: true,
  },
  showtimes: {
    type: String,
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
  genre: {
    type: String,
    required: true,
  }
});
module.exports = mongoose.model('Movie', moviesSchema);