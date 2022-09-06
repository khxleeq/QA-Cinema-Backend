const express = require('express');
const router = express.Router();

const {getAllBookings, postBooking, getBookingByID, updateBooking, deleteBooking} = require("../controllers/bookingController");


router
.route('/')
.get(getAllBookings)
.post(postBooking)


router.route('/:id')
.get(getBookingByID)
.put(updateBooking)
.delete(deleteBooking)


module.exports = router;