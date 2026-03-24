import { useState } from 'react'
import PageMeta from '../components/PageMeta'

const initialForm = {
  fullName: '',
  email: '',
  message: '',
}

function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
    setForm(initialForm)
  }

  return (
    <>
      <PageMeta
        title="Contact"
        description="Contact Zanzibar Excursion Company Ltd for bookings, travel guidance, and personalised Zanzibar trip planning."
      />

      <section className="contact-hero">
        <div className="container contact-hero__content">
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="section contact-page-section">
        <div className="container contact-page-container">
          <div className="contact-page-grid">
            <div className="contact-form-box">
              <h2>Send Us a Message</h2>

              <form className="contact-page-form" onSubmit={handleSubmit}>
                <div className="contact-form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button className="contact-submit-btn" type="submit">
                  Send Message
                </button>

                {sent ? <p className="form-success">Your message has been sent successfully.</p> : null}
              </form>
            </div>

            <div className="contact-info-box">
              <h2>Contact Information</h2>

              <div className="contact-info-item">
                <strong>Phone:</strong>
                <p>+255 700 000 000</p>
              </div>

              <div className="contact-info-item">
                <strong>Email:</strong>
                <p>info@zanzibarexcursion.com</p>
              </div>

              <div className="contact-info-item">
                <strong>Location:</strong>
                <p>Zanzibar, Tanzania</p>
              </div>

              <div className="contact-info-item">
                <strong>Working Hours:</strong>
                <p>Mon - Sun: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          <div className="contact-map-box">
            <iframe
              title="Zanzibar map"
              src="https://www.google.com/maps?q=Zanzibar&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
