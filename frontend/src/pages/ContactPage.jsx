import { useState } from 'react'
import Button from '../components/Button'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'

const initialForm = {
  name: '',
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
        description="Contact Zanzibar Excursion for tour planning, transfer bookings, and travel support."
      />
      <section className="page-hero page-hero--contact">
        <div className="container">
          <p className="section-tag">Contact</p>
          <h1>Let's plan your Zanzibar stay, transfer, or private excursion.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container split split--wide">
          <div>
            <SectionHeading
              eyebrow="Get In Touch"
              title="Send us your travel ideas and we'll help shape the right experience"
            />
            <div className="contact-stack">
              <p><strong>Phone:</strong> +255 777 123 456</p>
              <p><strong>Email:</strong> hello@zanzibarexcursion.com</p>
              <p><strong>Location:</strong> Stone Town, Zanzibar</p>
            </div>
            <div className="map-frame">
              <iframe
                title="Zanzibar map"
                src="https://www.google.com/maps?q=Stone%20Town%20Zanzibar&z=13&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form className="form-card" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>
            <Button type="submit">Send Message</Button>
            {sent ? <p className="form-success">Message sent successfully.</p> : null}
          </form>
        </div>
      </section>
    </>
  )
}

export default ContactPage
