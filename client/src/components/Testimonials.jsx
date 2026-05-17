const reviews = [
  {
    name: 'Priya Sharma',
    role: 'Happy Client',
    emoji: '👩',
    stars: 5,
    review: 'An absolute dream! The luxury hair treatment left my hair feeling brand new. The staff is incredibly professional and the ambiance is so relaxing. I felt like royalty!'
  },
  {
    name: 'Anjali Mehta',
    role: 'Bride-to-be',
    emoji: '👰',
    stars: 5,
    review: 'I had my bridal makeup trial here and it was perfect. They understood exactly what I wanted. I cannot wait for my wedding day! Highly recommend Hairvana Salon.'
  },
  {
    name: 'Sameer Kumar',
    role: 'Regular Customer',
    emoji: '👨',
    stars: 5,
    review: 'I have been coming here for my regular haircut and styling for over a year. The service is consistently top notch. Best salon in town, hands down!'
  },
  {
    name: 'Neha Singh',
    role: 'Nail Art Lover',
    emoji: '💅',
    stars: 5,
    review: 'Got the most beautiful nail art done here! Riya is so talented and creative. The salon is super clean and hygienic. Will definitely come back again!'
  },
  {
    name: 'Pooja Verma',
    role: 'Spa Enthusiast',
    emoji: '🧖‍♀️',
    stars: 5,
    review: 'The spa and massage service was absolutely heavenly. I walked out feeling completely refreshed and rejuvenated. Worth every rupee. Highly recommended!'
  },
  {
    name: 'Rahul Mehta',
    role: 'First Time Visitor',
    emoji: '😊',
    stars: 5,
    review: 'Came here for the first time for a haircut and I am blown away by the quality. Very friendly staff, great ambiance and amazing results. My new go-to salon!'
  },
]

function Testimonials() {
  return (
    <section id="testimonials" style={{
      backgroundColor: '#ffffff',
      padding: '80px 40px'
    }}>
      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <p style={{
          color: '#8B2FC9', fontWeight: '600',
          letterSpacing: '2px', fontSize: '13px', marginBottom: '10px'
        }}>CLIENT LOVE</p>
        <h2 style={{
          fontSize: '40px', fontWeight: '800',
          color: '#1a1a2e', marginBottom: '15px'
        }}>What Our Clients Say</h2>
        <p style={{ color: '#888', fontSize: '16px' }}>
          We are proud to have earned the trust of our clients. Here's what they think about us.
        </p>
      </div>

      {/* Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '25px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {reviews.map((review, index) => (
          <div key={index} style={{
            backgroundColor: '#FAF7F5',
            borderRadius: '20px',
            padding: '30px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            transition: 'transform 0.3s',
            cursor: 'default'
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {/* Stars */}
            <div style={{ marginBottom: '15px' }}>
              {'⭐'.repeat(review.stars)}
            </div>

            {/* Review Text */}
            <p style={{
              color: '#555', fontSize: '14px',
              lineHeight: '1.8', marginBottom: '20px',
              fontStyle: 'italic'
            }}>"{review.review}"</p>

            {/* Client Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '45px', height: '45px',
                borderRadius: '50%',
                backgroundColor: '#f3e8ff',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                border: '2px solid #8B2FC9'
              }}>{review.emoji}</div>
              <div>
                <div style={{
                  fontWeight: '700', color: '#1a1a2e', fontSize: '15px'
                }}>{review.name}</div>
                <div style={{
                  color: '#8B2FC9', fontSize: '12px', fontWeight: '500'
                }}>{review.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials