const images = [
  { src: '/bride.jpg', alt: 'Bridal Look' },
  { src: '/extensions.jpg', alt: 'Hair Extensions' },
  { src: '/haircut.jpg', alt: 'Hair Cut' },
  { src: '/interior.jpg', alt: 'Salon Interior' },
  { src: '/manicure.jpg', alt: 'Manicure' },
  { src: '/keratin.jpg', alt: 'Keratin Treatment' },
]

function Gallery() {
  return (
    <section id="gallery" style={{
      backgroundColor: '#ffffff',
      padding: '80px 40px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <p style={{
          color: '#8B2FC9', fontWeight: '600',
          letterSpacing: '2px', fontSize: '13px', marginBottom: '10px'
        }}>OUR WORK</p>
        <h2 style={{
          fontSize: '40px', fontWeight: '800',
          color: '#1a1a2e', marginBottom: '15px'
        }}>Our Gallery</h2>
        <p style={{ color: '#888', fontSize: '16px' }}>
          A glimpse of our finest work and beautiful transformations.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {images.map((img, index) => (
          <div key={index} style={{
            borderRadius: '16px',
            overflow: 'hidden',
            height: '280px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            transition: 'transform 0.3s',
            cursor: 'pointer'
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={img.src} alt={img.alt}
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery