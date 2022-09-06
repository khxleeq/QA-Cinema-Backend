const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema(
  {
    fullTitle: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    movieTime: {
      type: String,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    ticketType: {
      type: String,
      required: true,
    },
    bookerName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Booking', bookingSchema);