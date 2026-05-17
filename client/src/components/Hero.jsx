function Hero() {
  return (
    <section id="home" style={{
      backgroundColor: '#FAF7F5',
      padding: '80px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: '90vh'
    }}>
      {/* Left Side - Text */}
      <div style={{ maxWidth: '550px' }}>
        <div style={{
          display: 'inline-block',
          border: '1px solid #8B2FC9',
          borderRadius: '20px',
          padding: '6px 16px',
          marginBottom: '20px',
          fontSize: '12px',
          color: '#8B2FC9',
          letterSpacing: '2px'
        }}>✨ THE PREMIER LUXURY EXPERIENCE</div>

        <h1 style={{
          fontSize: '58px',
          fontWeight: '800',
          color: '#1a1a2e',
          lineHeight: '1.1',
          marginBottom: '10px'
        }}>Luxury Meets</h1>

        <h1 style={{
          fontSize: '58px',
          fontWeight: '800',
          color: '#8B2FC9',
          lineHeight: '1.1',
          marginBottom: '25px'
        }}>Confidence</h1>

        <p style={{
          fontSize: '17px',
          color: '#555',
          lineHeight: '1.7',
          marginBottom: '35px',
          maxWidth: '450px'
        }}>
          Experience world-class beauty and wellness services at Hairvana Salon. 
          Your sanctuary for self-care and transformation.
        </p>

        <div style={{ display: 'flex', gap: '15px' }}>
          <a href="#booking" style={{
            backgroundColor: '#8B2FC9',
            color: 'white',
            padding: '15px 35px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '16px'
          }}>Book Your Glow ✨</a>

          <a href="#services" style={{
            backgroundColor: 'transparent',
            color: '#8B2FC9',
            padding: '15px 35px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '16px',
            border: '2px solid #8B2FC9'
          }}>Our Services</a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          gap: '40px',
          marginTop: '50px'
        }}>
          {[
            { num: '5000+', label: 'Happy Clients' },
            { num: '15+', label: 'Expert Stylists' },
            { num: '100+', label: 'Luxury Services' }
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ fontSize: '28px', fontWeight: '800', color: '#8B2FC9' }}>
                {stat.num}
              </div>
              <div style={{ fontSize: '13px', color: '#888' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Image */}
      <div style={{
        width: '480px',
        height: '520px',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(139,47,201,0.2)'
      }}>
        <img
          src="/salon.jpg"
          alt="Hairvana Salon"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </section>
  )
}

export default Hero