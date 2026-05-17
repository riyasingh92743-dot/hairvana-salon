function About() {
  return (
    <section id="about" style={{
      backgroundColor: '#ffffff',
      padding: '80px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '60px'
    }}>
      {/* Left - Image */}
      <div style={{
        width: '480px',
        height: '500px',
        borderRadius: '20px',
        overflow: 'hidden',
        flexShrink: 0,
        boxShadow: '0 20px 60px rgba(139,47,201,0.15)'
      }}>
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800"
          alt="About Hairvana"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Right - Text */}
      <div style={{ maxWidth: '550px' }}>
        <p style={{
          color: '#8B2FC9',
          fontWeight: '600',
          letterSpacing: '2px',
          fontSize: '13px',
          marginBottom: '12px'
        }}>ABOUT US</p>

        <h2 style={{
          fontSize: '40px',
          fontWeight: '800',
          color: '#1a1a2e',
          marginBottom: '20px',
          lineHeight: '1.2'
        }}>About Hairvana Salon</h2>

        <p style={{
          color: '#555',
          fontSize: '16px',
          lineHeight: '1.8',
          marginBottom: '15px'
        }}>
          Hairvana Salon is more than just a place to get your hair done. 
          It's a sanctuary of luxury and self-care, where our team of passionate 
          experts dedicate themselves to making you feel confident and beautiful.
        </p>

        <p style={{
          color: '#555',
          fontSize: '16px',
          lineHeight: '1.8',
          marginBottom: '35px'
        }}>
          We believe in continuous learning, staying ahead of the latest trends, 
          and using only the highest quality products to deliver results that 
          exceed your expectations.
        </p>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '40px', marginBottom: '35px' }}>
          {[
            { icon: '😊', num: '5000+', label: 'Happy Clients' },
            { icon: '💼', num: '15+', label: 'Expert Stylists' },
            { icon: '💝', num: '100+', label: 'Luxury Services' }
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', marginBottom: '5px' }}>{stat.icon}</div>
              <div style={{ fontSize: '24px', fontWeight: '800', color: '#8B2FC9' }}>
                {stat.num}
              </div>
              <div style={{ fontSize: '13px', color: '#888' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <a href="#booking" style={{
          backgroundColor: '#8B2FC9',
          color: 'white',
          padding: '14px 32px',
          borderRadius: '30px',
          textDecoration: 'none',
          fontWeight: '700',
          fontSize: '15px'
        }}>Book An Appointment</a>
      </div>
    </section>
  )
}

export default About