import PageMeta from '../components/PageMeta'
import contactHero from '../assets/picha.jpeg'

function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact Us"
        description="Contact Zan Excursions for bookings, travel guidance, and personalised Zanzibar trip planning."
      />

      <section className="contact-hero" style={{ '--contact-hero-image': `url(${contactHero})` }}>
        <div className="container contact-hero__content">
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="section contact-page-section">
        <div className="container contact-page-container">
          <div className="contact-page-grid">
            <div className="contact-info-box contact-info-box--wide">
              <h2>Talk to Zan Excursions</h2>
              <p>Send us your travel details via the form or contact the office directly.</p>

              <div className="contact-info-item">
                <strong>Email:</strong>
                <p>
                  <a href="mailto:info@zanexcursions.com">info@zanexcursions.com</a>
                </p>
              </div>

              <div className="contact-info-item">
                <strong>Phone:</strong>
                <p>+255 792 692 084</p>
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

            <div className="contact-form-box">
              <h2>Share your travel details</h2>
              <form className="contact-page-form">
                <div className="contact-form-group">
                  <label htmlFor="contact-fullname">Full name</label>
                  <input id="contact-fullname" type="text" placeholder="Your full name" required />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input id="contact-email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-phone">Phone number</label>
                  <input id="contact-phone" type="tel" placeholder="+255 7XX XXX XXX" required />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    placeholder="Tell us about your preferred dates, group size, and requests."
                    required
                  />
                </div>
                <button className="contact-submit-btn" type="submit">
                  Submit travel info
                </button>
              </form>
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
