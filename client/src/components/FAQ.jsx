import { useState } from 'react'

const faqs = [
  {
    q: 'Do I need to book an appointment?',
    a: 'Yes, we recommend booking in advance to ensure availability. You can book online through our website or call us directly. Walk-ins are welcome based on availability.'
  },
  {
    q: 'What is your cancellation policy?',
    a: 'We request at least 24 hours notice for cancellations. Late cancellations or no-shows may be subject to a cancellation fee of 20% of the service cost.'
  },
  {
    q: 'Which products do you use?',
    a: 'We use only premium international brands like Loreal, Schwarzkopf, OPI, and MAC. All our products are dermatologically tested and safe for all skin and hair types.'
  },
  {
    q: 'Can I book for a large group or party?',
    a: 'Absolutely! We offer special group packages for bridal parties, birthdays, and corporate events. Contact us in advance so we can arrange the best experience for your group.'
  },
  {
    q: 'How do I choose the right service for me?',
    a: 'Our expert stylists will consult with you before any service to understand your needs and recommend the best treatments. You can also call us for a free consultation.'
  },
  {
    q: 'What are your working hours?',
    a: 'We are open Monday to Saturday from 10:00 AM to 8:00 PM and Sunday from 11:00 AM to 6:00 PM. We are closed on national holidays.'
  },
  {
    q: 'Do you offer home services?',
    a: 'Yes! We offer select home services for bridal makeup, mehendi, and special occasions. Additional charges may apply based on location. Contact us to know more.'
  },
  {
    q: 'Is parking available at the salon?',
    a: 'Yes, we have free parking available for all our clients right outside the salon. We also have easy access via public transport.'
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" style={{
      backgroundColor: '#FAF7F5',
      padding: '80px 40px',
      display: 'flex',
      gap: '60px',
      alignItems: 'flex-start',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {/* Left Side Image */}
      <div style={{
        width: '420px',
        height: '500px',
        borderRadius: '20px',
        overflow: 'hidden',
        flexShrink: 0,
        boxShadow: '0 20px 60px rgba(139,47,201,0.15)'
      }}>
        <img
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800"
          alt="Salon FAQ"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Right Side FAQs */}
      <div style={{ flex: 1 }}>
        <p style={{
          color: '#8B2FC9', fontWeight: '600',
          letterSpacing: '2px', fontSize: '13px', marginBottom: '10px'
        }}>GOT QUESTIONS?</p>

        <h2 style={{
          fontSize: '40px', fontWeight: '800',
          color: '#1a1a2e', marginBottom: '10px'
        }}>Frequently Asked Questions</h2>

        <p style={{
          color: '#888', fontSize: '15px', marginBottom: '35px'
        }}>
          Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
        </p>

        {/* FAQ Items */}
        {faqs.map((faq, index) => (
          <div key={index} style={{
            borderBottom: '1px solid #e8e8e8',
            marginBottom: '5px'
          }}>
            {/* Question */}
            <button
              onClick={() => toggle(index)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '18px 0',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <span style={{
                fontSize: '15px',
                fontWeight: '600',
                color: openIndex === index ? '#8B2FC9' : '#1a1a2e'
              }}>{faq.q}</span>
              <span style={{
                fontSize: '20px',
                color: '#8B2FC9',
                fontWeight: '300',
                marginLeft: '15px'
              }}>
                {openIndex === index ? '−' : '+'}
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <p style={{
                fontSize: '14px',
                color: '#666',
                lineHeight: '1.8',
                paddingBottom: '18px'
              }}>{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ