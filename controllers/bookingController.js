const asyncHandler = require('express-async-handler'); //have functions in controller

const Booking = require('../models/bookingModel');

// @desc  get bookings
//@route  GET /api/booking
//@access Private
const getAllBookings = asyncHandler(async (req, res) => {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
})

// @desc  get movie  by name =
//@route  GET /api/booking
//@access Private
const getByMovieAndName = asyncHandler(async (req, res) => {
  const {movie, name} = req.params;
  const result = await bookingSchema.find({'title': movie, 'name': name});
  res.status(200).json(result);
});
  

// @desc  post booking
//@route  POST /api/booking
//@access Private
const postBooking = asyncHandler(async (req, res) => {
    const booking = await Booking.create({
        title: req.body.title,
        date: req.body.date,
        time: req.body.time,
        seats: req.body.seats,
        ticketType: req.body.ticketType,
        name: req.body.name
    });
    res.status(201).json(booking);
});

// @desc  get bookings
//@route  GET /api/booking/:id
//@access Private
const getBookingByID = asyncHandler(async (req, res) => {
    const booking = await Booking.findById(req.params.id);
    res.status(200).json(booking);
  });
  
// @desc  update booking
//@route  PUT /api/booking/:id
//@access Private
const updateBooking = asyncHandler(async (req, res) => {
    const booking = await Booking.findById(req.params.id);
  
    if (!booking) {
      res.status(400).json({ message: `Movie not found` });
    }
  
    const updateSchema = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updateSchema);
  });

// @desc   delete booking
//@route  DELETE /api/booking/:id
//@access Private
const deleteBooking = asyncHandler(async (req, res) => {
    const schema = await Booking.findById(req.params.id);
    if (!schema) {
      res.status(400).json({ message: `Movie not found` });
    }
  
    await schema.remove();
  
    res.status(204).json({ id: req.params.id });
  });

module.exports = {
    getAllBookings, getByMovieAndName, postBooking, getBookingByID, updateBooking, deleteBooking
}