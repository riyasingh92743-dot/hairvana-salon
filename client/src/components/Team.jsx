import { useState } from 'react'

const team = [
  {
    name: 'Gauri Poonia',
    image: '/Gauri.jpg',
    role: 'Senior Hair Stylist',
    exp: '8 Years Experience',
    speciality: 'Hair Coloring & Balayage',
    about: 'Gauri is our star hair stylist with 8 years of experience in hair coloring, balayage, and cutting. She has trained in Mumbai and Delhi with top salons.',
    services: ['Hair Coloring', 'Balayage', 'Hair Cut', 'Hair Treatment'],
    instagram: '@gauri.styles'
  },
  {
    name: 'Sejal Jhangra',
    image: '/Sejal.jpg',
    role: 'Bridal Makeup Artist',
    exp: '6 Years Experience',
    speciality: 'Bridal & Party Makeup',
    about: 'Sejal specializes in bridal and party makeup. She has done makeup for 200+ brides and is known for her flawless skin finish and eye makeup.',
    services: ['Bridal Makeup', 'Party Makeup', 'Airbrush Makeup', 'Saree Draping'],
    instagram: '@sejal.makeupartist'
  },
  {
    name: 'Anshika Verma',
    image: '/Anshika.jpg',
    role: 'Skin Care Specialist',
    exp: '5 Years Experience',
    speciality: 'Facials & Skin Treatments',
    about: 'Anshika is a certified skin care specialist who helps clients achieve glowing, healthy skin. She specializes in advanced facials and skin treatments.',
    services: ['Premium Facial', 'Skin Analysis', 'Anti-Aging Treatment', 'Cleanup'],
    instagram: '@anshika.skincare'
  },
  {
    name: 'Khushi Sharma',
    image: '/Khushi.jpg',
    role: 'Nail Art Expert',
    exp: '4 Years Experience',
    speciality: 'Nail Art & Extensions',
    about: 'Khushi is our creative nail artist who creates stunning nail designs. From simple French tips to elaborate 3D nail art, she does it all!',
    services: ['Nail Art', 'Gel Extensions', 'Nail Polish', 'Nail Repair'],
    instagram: '@khushi.nails'
  },
]

function Team() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="team" style={{
      backgroundColor: '#FAF7F5',
      padding: '80px 40px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <p style={{
          color: '#8B2FC9', fontWeight: '600',
          letterSpacing: '2px', fontSize: '13px', marginBottom: '10px'
        }}>MEET THE EXPERTS</p>
        <h2 style={{
          fontSize: '40px', fontWeight: '800',
          color: '#1a1a2e', marginBottom: '15px'
        }}>Our Team</h2>
        <p style={{ color: '#888', fontSize: '16px' }}>
          Our passionate experts are dedicated to making you look and feel amazing.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '25px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {team.map(member => (
          <div key={member.name}
            onClick={() => setSelected(member)}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '35px 20px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              transition: 'transform 0.3s',
              cursor: 'pointer'
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-8px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img src={member.image} alt={member.name}
              style={{
                width: '90px', height: '90px',
                borderRadius: '50%',
                objectFit: 'cover',
                margin: '0 auto 15px',
                border: '3px solid #8B2FC9',
                display: 'block'
              }}
            />

            <h3 style={{
              fontSize: '18px', fontWeight: '700',
              color: '#1a1a2e', marginBottom: '5px'
            }}>{member.name}</h3>

            <p style={{
              color: '#8B2FC9', fontWeight: '600',
              fontSize: '14px', marginBottom: '5px'
            }}>{member.role}</p>

            <p style={{
              color: '#aaa', fontSize: '12px',
              marginBottom: '10px'
            }}>{member.exp}</p>

            <div style={{
              backgroundColor: '#f3e8ff',
              borderRadius: '20px',
              padding: '6px 14px',
              fontSize: '12px',
              color: '#8B2FC9',
              fontWeight: '500',
              marginBottom: '12px'
            }}>{member.speciality}</div>

            <div style={{
              color: '#8B2FC9', fontSize: '13px',
              fontWeight: '600'
            }}>View Profile →</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div style={{
          position: 'fixed', top: 0, left: 0,
          width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}
          onClick={() => setSelected(null)}
        >
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            padding: '40px',
            maxWidth: '500px',
            width: '90%',
            textAlign: 'center',
            position: 'relative'
          }}
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setSelected(null)} style={{
              position: 'absolute', top: '15px', right: '20px',
              background: 'none', border: 'none',
              fontSize: '24px', cursor: 'pointer', color: '#888'
            }}>✕</button>

            <img src={selected.image} alt={selected.name}
              style={{
                width: '100px', height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                margin: '0 auto 15px',
                border: '3px solid #8B2FC9',
                display: 'block'
              }}
            />

            <h2 style={{
              fontSize: '24px', fontWeight: '800',
              color: '#1a1a2e', marginBottom: '5px'
            }}>{selected.name}</h2>

            <p style={{
              color: '#8B2FC9', fontWeight: '600',
              fontSize: '15px', marginBottom: '5px'
            }}>{selected.role}</p>

            <p style={{
              color: '#aaa', fontSize: '13px',
              marginBottom: '15px'
            }}>{selected.exp}</p>

            <p style={{
              color: '#555', fontSize: '14px',
              lineHeight: '1.8', marginBottom: '20px'
            }}>{selected.about}</p>

            <div style={{ marginBottom: '20px' }}>
              <p style={{
                fontWeight: '700', color: '#1a1a2e',
                marginBottom: '10px', fontSize: '14px'
              }}>Services:</p>
              <div style={{
                display: 'flex', flexWrap: 'wrap',
                gap: '8px', justifyContent: 'center'
              }}>
                {selected.services.map(s => (
                  <span key={s} style={{
                    backgroundColor: '#f3e8ff',
                    color: '#8B2FC9',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>{s}</span>
                ))}
              </div>
            </div>

            <p style={{
              color: '#888', fontSize: '13px',
              marginBottom: '20px'
            }}>📸 Instagram: {selected.instagram}</p>

            <a href="#booking"
              onClick={() => setSelected(null)}
              style={{
                backgroundColor: '#8B2FC9',
                color: 'white',
                padding: '12px 30px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '14px'
              }}>
              Book with {selected.name.split(' ')[0]} ✨
            </a>
          </div>
        </div>
      )}
    </section>
  )
}

export default Team