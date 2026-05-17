import { useState } from 'react'

const services = [
  {
    name: 'Luxury Hair Treatment',
    price: '₹2,500',
    image: '/hair.jpg',
    desc: 'Deep conditioning & nourishing treatment for silky smooth hair.',
    types: [
      { name: 'Deep Conditioning', price: '₹2,500' },
      { name: 'Keratin Treatment', price: '₹4,500' },
      { name: 'Hair Spa', price: '₹1,800' },
      { name: 'Scalp Treatment', price: '₹2,000' },
      { name: 'Protein Treatment', price: '₹3,000' },
    ]
  },
  {
    name: 'Bridal Makeup',
    price: '₹8,500',
    image: '/bridal.jpg',
    desc: 'Complete bridal look with premium products for your special day.',
    types: [
      { name: 'Basic Bridal Makeup', price: '₹8,500' },
      { name: 'HD Bridal Makeup', price: '₹12,000' },
      { name: 'Airbrush Bridal Makeup', price: '₹15,000' },
      { name: 'Engagement Makeup', price: '₹6,000' },
      { name: 'Reception Makeup', price: '₹7,500' },
    ]
  },
  {
    name: 'Premium Facial',
    price: '₹3,200',
    image: '/facial.jpg',
    desc: 'Rejuvenating facial for glowing, youthful and radiant skin.',
    types: [
      { name: 'Basic Cleanup', price: '₹800' },
      { name: 'Fruit Facial', price: '₹1,500' },
      { name: 'Gold Facial', price: '₹2,500' },
      { name: 'Diamond Facial', price: '₹3,200' },
      { name: 'Anti-Aging Facial', price: '₹4,000' },
      { name: 'Hydrating Facial', price: '₹3,500' },
      { name: 'Brightening Facial', price: '₹3,800' },
    ]
  },
  {
    name: 'Nail Art Design',
    price: '₹1,800',
    image: '/nails.jpg',
    desc: 'Creative nail art designs with long-lasting premium nail colors.',
    types: [
      { name: 'Basic Nail Paint', price: '₹300' },
      { name: 'French Tips', price: '₹800' },
      { name: 'Gel Nail Paint', price: '₹1,200' },
      { name: 'Nail Art Design', price: '₹1,800' },
      { name: 'Gel Extensions', price: '₹2,500' },
      { name: 'Acrylic Extensions', price: '₹3,000' },
    ]
  },
  {
    name: 'Hair Coloring',
    price: '₹4,500',
    image: '/color.jpg',
    desc: 'Global, highlights, balayage with international color brands.',
    types: [
      { name: 'Global Color', price: '₹4,500' },
      { name: 'Highlights', price: '₹5,500' },
      { name: 'Balayage', price: '₹7,000' },
      { name: 'Ombre', price: '₹6,500' },
      { name: 'Root Touch Up', price: '₹2,500' },
      { name: 'Fashion Colors', price: '₹8,000' },
    ]
  },
  {
    name: 'Spa & Massage',
    price: '₹3,800',
    image: '/spa.jpg',
    desc: 'Full body relaxation spa with aromatic oils and techniques.',
    types: [
      { name: 'Swedish Massage', price: '₹3,800' },
      { name: 'Deep Tissue Massage', price: '₹4,500' },
      { name: 'Aromatherapy', price: '₹4,000' },
      { name: 'Hot Stone Massage', price: '₹5,000' },
      { name: 'Head Massage', price: '₹1,500' },
      { name: 'Back Massage', price: '₹2,000' },
    ]
  },
  {
    name: 'Mehendi Design',
    price: '₹1,200',
    image: '/mehendi.jpg',
    desc: 'Beautiful traditional and contemporary mehendi designs.',
    types: [
      { name: 'Simple Mehendi', price: '₹500' },
      { name: 'Bridal Mehendi (Hands)', price: '₹2,500' },
      { name: 'Bridal Mehendi (Full)', price: '₹5,000' },
      { name: 'Arabic Mehendi', price: '₹1,200' },
      { name: 'Indo-Arabic Mehendi', price: '₹1,800' },
    ]
  },
  {
    name: 'Threading & Waxing',
    price: '₹500',
    image: '/threading.jpg',
    desc: 'Precise threading and smooth waxing for flawless skin.',
    types: [
      { name: 'Eyebrow Threading', price: '₹100' },
      { name: 'Upper Lip Threading', price: '₹50' },
      { name: 'Full Face Threading', price: '₹300' },
      { name: 'Half Leg Waxing', price: '₹500' },
      { name: 'Full Leg Waxing', price: '₹800' },
      { name: 'Full Body Waxing', price: '₹2,500' },
    ]
  },
]

function Services() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="services" style={{
      backgroundColor: '#FAF7F5',
      padding: '80px 40px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <p style={{
          color: '#8B2FC9', fontWeight: '600',
          letterSpacing: '2px', fontSize: '13px', marginBottom: '10px'
        }}>WHAT WE OFFER</p>
        <h2 style={{
          fontSize: '40px', fontWeight: '800',
          color: '#1a1a2e', marginBottom: '15px'
        }}>Featured Services</h2>
        <p style={{ color: '#888', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
          Discover our most popular treatments, designed to make you look and feel your best.
        </p>
      </div>

      {/* Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '25px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {services.map(service => (
          <div key={service.name}
            onClick={() => setSelected(service)}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(139,47,201,0.15)'
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
            }}>

            {/* Image */}
            <div style={{ height: '180px', overflow: 'hidden' }}>
              <img src={service.image} alt={service.name}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s'
                }}
              />
            </div>

            {/* Content */}
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h3 style={{
                fontSize: '16px', fontWeight: '700',
                color: '#1a1a2e', marginBottom: '8px'
              }}>{service.name}</h3>
              <p style={{
                fontSize: '13px', color: '#888',
                lineHeight: '1.6', marginBottom: '12px'
              }}>{service.desc}</p>
              <div style={{
                color: '#8B2FC9', fontWeight: '800',
                fontSize: '18px', marginBottom: '8px'
              }}>{service.price}</div>
              <div style={{
                color: '#8B2FC9', fontSize: '13px', fontWeight: '600'
              }}>View Details →</div>
            </div>
          </div>
        ))}
      </div>

      {/* Book Button */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <a href="#booking" style={{
          backgroundColor: '#8B2FC9', color: 'white',
          padding: '14px 35px', borderRadius: '30px',
          textDecoration: 'none', fontWeight: '700', fontSize: '15px'
        }}>Book A Service</a>
      </div>

      {/* Modal */}
      {selected && (
        <div style={{
          position: 'fixed', top: 0, left: 0,
          width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', zIndex: 9999
        }}
          onClick={() => setSelected(null)}
        >
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            maxWidth: '500px',
            width: '90%',
            position: 'relative',
            maxHeight: '85vh',
            overflowY: 'auto'
          }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div style={{ height: '200px', overflow: 'hidden', borderRadius: '24px 24px 0 0' }}>
              <img src={selected.image} alt={selected.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ padding: '30px' }}>
              <button onClick={() => setSelected(null)} style={{
                position: 'absolute', top: '15px', right: '20px',
                background: 'white', border: 'none',
                fontSize: '20px', cursor: 'pointer',
                color: '#888', borderRadius: '50%',
                width: '32px', height: '32px'
              }}>✕</button>

              <h2 style={{
                fontSize: '24px', fontWeight: '800',
                color: '#1a1a2e', marginBottom: '8px'
              }}>{selected.name}</h2>
              <p style={{
                color: '#888', fontSize: '14px',
                marginBottom: '20px'
              }}>{selected.desc}</p>

              {/* Price List */}
              <h3 style={{
                fontSize: '16px', fontWeight: '700',
                color: '#1a1a2e', marginBottom: '15px',
                borderBottom: '2px solid #f3e8ff',
                paddingBottom: '10px'
              }}>Price List</h3>

              {selected.types.map((type, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: '1px solid #f5f5f5'
                }}>
                  <span style={{
                    fontSize: '14px', color: '#444', fontWeight: '500'
                  }}>{type.name}</span>
                  <span style={{
                    fontSize: '15px', color: '#8B2FC9', fontWeight: '700'
                  }}>{type.price}</span>
                </div>
              ))}

              <a href="#booking"
                onClick={() => setSelected(null)}
                style={{
                  display: 'block',
                  backgroundColor: '#8B2FC9', color: 'white',
                  padding: '14px', borderRadius: '30px',
                  textDecoration: 'none', fontWeight: '700',
                  fontSize: '15px', textAlign: 'center',
                  marginTop: '25px'
                }}>
                Book This Service ✨
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Services