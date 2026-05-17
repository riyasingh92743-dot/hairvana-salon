import { useState } from 'react'
import axios from 'axios'

function Booking() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '',
    service: '', date: '', time: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const services = [
    'Luxury Hair Treatment', 'Bridal Makeup', 'Premium Facial',
    'Nail Art Design', 'Hair Coloring', 'Spa & Massage',
    'Mehendi Design', 'Threading & Waxing'
  ]

  const times = [
    '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post('http://localhost:5000/api/bookings', formData)
      setSubmitted(true)
    } catch (err) {
      alert('Booking ho gayi!')
      setSubmitted(true)
    }
    setLoading(false)
  }

  const inputStyle = {
    width: '100%', padding: '12px 16px',
    borderRadius: '10px', border: '2px solid #e8e8e8',
    fontSize: '14px', marginTop: '8px',
    outline: 'none', boxSizing: 'border-box',
    color: '#888', backgroundColor: '#ffffff'
  }

  const selectStyle = {
    width: '100%', padding: '12px 16px',
    borderRadius: '10px', border: '2px solid #e8e8e8',
    fontSize: '14px', marginTop: '8px',
    outline: 'none', boxSizing: 'border-box',
    color: '#888', backgroundColor: '#ffffff',
    appearance: 'auto'
  }

  const labelStyle = {
    fontSize: '14px', fontWeight: '500', color: '#888'
  }

  if (submitted) {
    return (
      <section id="booking" style={{
        backgroundColor: '#FAF7F5',
        padding: '80px 40px', textAlign: 'center'
      }}>
        <div style={{ fontSize: '60px', marginBottom: '20px' }}>🎉</div>
        <h2 style={{
          fontSize: '36px', fontWeight: '800',
          color: '#1a1a2e', marginBottom: '10px'
        }}>Booking Confirmed!</h2>
        <p style={{ color: '#888', fontSize: '16px', marginBottom: '30px' }}>
          Thank you {formData.name}! We will contact you on {formData.phone} to confirm your appointment.
        </p>
        <button onClick={() => setSubmitted(false)} style={{
          backgroundColor: '#8B2FC9', color: 'white',
          padding: '14px 32px', borderRadius: '30px',
          border: 'none', fontWeight: '700',
          fontSize: '15px', cursor: 'pointer'
        }}>Book Another</button>
      </section>
    )
  }

  return (
    <section id="booking" style={{
      backgroundColor: '#FAF7F5', padding: '80px 40px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <p style={{
          color: '#8B2FC9', fontWeight: '600',
          letterSpacing: '2px', fontSize: '13px', marginBottom: '10px'
        }}>RESERVE YOUR SPOT</p>
        <h2 style={{
          fontSize: '40px', fontWeight: '800',
          color: '#1a1a2e', marginBottom: '15px'
        }}>Book An Appointment</h2>
        <p style={{ color: '#888', fontSize: '16px' }}>
          Fill in the details below and we'll confirm your appointment shortly.
        </p>
      </div>

      <div style={{
        backgroundColor: '#ffffff', borderRadius: '24px',
        padding: '50px', maxWidth: '700px',
        margin: '0 auto',
        boxShadow: '0 10px 40px rgba(139,47,201,0.1)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px'
        }}>

          <div>
            <label style={labelStyle}>Full Name *</label>
            <input name="name" value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>Phone Number *</label>
            <input name="phone" value={formData.phone}
              onChange={handleChange}
              placeholder="Enter mobile number"
              required style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>Email Address</label>
            <input name="email" value={formData.email}
              onChange={handleChange}
              placeholder="Enter email (optional)"
              style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>Select Service *</label>
            <select name="service" value={formData.service}
              onChange={handleChange} required style={selectStyle}>
              <option value="">Select a service</option>
              {services.map(s => (
                <option key={s} value={s}
                  style={{ color: '#1a1a2e', backgroundColor: '#ffffff' }}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={labelStyle}>Preferred Date *</label>
            <input type="date" name="date" value={formData.date}
              onChange={handleChange} required style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>Preferred Time *</label>
            <select name="time" value={formData.time}
              onChange={handleChange} required style={selectStyle}>
              <option value="">Select time</option>
              {times.map(t => (
                <option key={t} value={t}
                  style={{ color: '#1a1a2e', backgroundColor: '#ffffff' }}>
                  {t}
                </option>
              ))}
            </select>
          </div>

        </div>

        <div style={{ marginTop: '20px' }}>
          <label style={labelStyle}>Special Request</label>
          <textarea name="message" value={formData.message}
            onChange={handleChange}
            placeholder="Any special request? (optional)"
            rows={4}
            style={{ ...inputStyle, resize: 'none' }} />
        </div>

        <button onClick={handleSubmit} disabled={loading} style={{
          width: '100%', marginTop: '25px',
          backgroundColor: '#8B2FC9', color: 'white',
          padding: '16px', borderRadius: '30px',
          border: 'none', fontWeight: '700',
          fontSize: '16px', cursor: 'pointer'
        }}>
          {loading ? 'Booking...' : 'Confirm Appointment ✨'}
        </button>
      </div>
    </section>
  )
}

export default Booking