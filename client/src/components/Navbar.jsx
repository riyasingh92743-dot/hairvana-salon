import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{
      backgroundColor: '#FAF7F5',
      padding: '15px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          backgroundColor: '#8B2FC9',
          color: 'white',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '16px'
        }}>HS</div>
        <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#1a1a2e' }}>
          Hairvana Salon
        </span>
      </div>

      {/* Desktop Menu */}
      <div style={{ display: 'flex', gap: '30px', listStyle: 'none' }}>
        {['Home','About','Services','Gallery','Team','Booking','Contact'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            textDecoration: 'none',
            color: '#1a1a2e',
            fontWeight: '500',
            fontSize: '15px',
            transition: 'color 0.3s'
          }}
          onMouseOver={e => e.target.style.color = '#8B2FC9'}
          onMouseOut={e => e.target.style.color = '#1a1a2e'}
          >{item}</a>
        ))}
      </div>

      {/* Book Now Button */}
      <a href="#booking" style={{
        backgroundColor: '#8B2FC9',
        color: 'white',
        padding: '10px 22px',
        borderRadius: '25px',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '14px'
      }}>Book Now</a>
    </nav>
  )
}
export default Navbar