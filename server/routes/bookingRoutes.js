const express = require('express')
const router = express.Router()
const Booking = require('../models/Booking')

// POST - New Booking
router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body)
    await booking.save()
    res.status(201).json({
      success: true,
      message: 'Booking confirmed!',
      booking
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Booking failed!',
      error
    })
  }
})

// GET - All Bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 })
    res.json({ success: true, bookings })
  } catch (error) {
    res.status(500).json({ success: false, error })
  }
})

module.exports = router