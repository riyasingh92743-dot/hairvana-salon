function Footer() {
  return (
    <footer id="footer" style={{
      backgroundColor: '#1a1a2e',
      color: '#ffffff',
      padding: '60px 40px 30px'
    }}>
      {/* Top Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: '40px',
        marginBottom: '50px'
      }}>

        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
            <div style={{
              backgroundColor: '#8B2FC9',
              color: 'white',
              borderRadius: '50%',
              width: '40px', height: '40px',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold', fontSize: '16px'
            }}>HS</div>
            <span style={{ fontWeight: '700', fontSize: '18px' }}>Hairvana Salon</span>
          </div>
          <p style={{
            color: '#aaa', fontSize: '14px',
            lineHeight: '1.8', maxWidth: '280px'
          }}>
            Your sanctuary for luxury beauty and self-care. 
            We are dedicated to making you look and feel your absolute best.
          </p>
          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
            {['📘', '📸', '🐦', '▶️'].map((icon, i) => (
              <div key={i} style={{
                width: '38px', height: '38px',
                backgroundColor: '#8B2FC9',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer', fontSize: '16px'
              }}>{icon}</div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{
            fontSize: '16px', fontWeight: '700',
            marginBottom: '20px', color: '#ffffff'
          }}>Quick Links</h4>
          {['Home', 'About', 'Services', 'Gallery', 'Team', 'Booking'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              display: 'block', color: '#aaa',
              textDecoration: 'none', fontSize: '14px',
              marginBottom: '10px', transition: 'color 0.3s'
            }}
            onMouseOver={e => e.target.style.color = '#8B2FC9'}
            onMouseOut={e => e.target.style.color = '#aaa'}
            >→ {link}</a>
          ))}
        </div>

        {/* Services */}
        <div>
          <h4 style={{
            fontSize: '16px', fontWeight: '700',
            marginBottom: '20px', color: '#ffffff'
          }}>Our Services</h4>
          {['Hair Treatment', 'Bridal Makeup', 'Premium Facial', 'Nail Art', 'Hair Coloring', 'Spa & Massage'].map(s => (
            <p key={s} style={{
              color: '#aaa', fontSize: '14px', marginBottom: '10px'
            }}>→ {s}</p>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{
            fontSize: '16px', fontWeight: '700',
            marginBottom: '20px', color: '#ffffff'
          }}>Contact Us</h4>
          {[
            { icon: '📍', text: '123 Beauty Lane, Sector 18, Noida, UP' },
            { icon: '📞', text: '+91 98765 43210' },
            { icon: '📧', text: 'hello@hairvana.com' },
            { icon: '🕐', text: 'Mon-Sat: 10AM - 8PM' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', gap: '10px',
              marginBottom: '12px', alignItems: 'flex-start'
            }}>
              <span style={{ fontSize: '16px' }}>{item.icon}</span>
              <span style={{ color: '#aaa', fontSize: '13px', lineHeight: '1.6' }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid #2d2d4e', paddingTop: '25px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <p style={{ color: '#666', fontSize: '13px' }}>
            © 2026 Hairvana Salon. All rights reserved.
          </p>
          <p style={{ color: '#666', fontSize: '13px' }}>
            Made with 💜 for beauty lovers
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer