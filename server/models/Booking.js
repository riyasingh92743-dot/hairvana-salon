const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  service: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  message: { type: String },
  status: { type: String, default: 'pending' }
}, { timestamps: true })

module.exports = mongoose.model('Booking', bookingSchema)