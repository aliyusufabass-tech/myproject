import { useState } from 'react'
import PageMeta from '../components/PageMeta'
import { transferOptions, transferVehicles } from '../data/tours'
import transfersHero from '../assets/98.jpeg'

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  pickup: '',
  dropoff: '',
  date: '',
  time: '',
  adults: '1',
  kids: '0',
  message: '',
}

function TransfersPage() {
  const [formData, setFormData] = useState(initialForm)
  const [status, setStatus] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('Sending booking...')
    const payload = new FormData()
    payload.append('_subject', 'New Transfer Booking')
    payload.append('_captcha', 'false')
    Object.entries(formData).forEach(([key, value]) => payload.append(key, value))

    try {
      const response = await fetch('https://formsubmit.co/info@zanzibarexcursion.com', {
        method: 'POST',
        body: payload,
      })
      if (!response.ok) {
        throw new Error('Booking request failed.')
      }
      setFormData(initialForm)
      setSuccess(true)
      setStatus('✅ Booking submitted! We’ll reply shortly.')
      setTimeout(() => {
        setStatus('')
        setSuccess(false)
      }, 4000)
    } catch (error) {
      setStatus('❌ Unable to send booking. Please try again.')
    }
  }

  return (
    <>
      <PageMeta
        title="Transfers"
        description="Professional airport pickup, hotel transfers, private trips, and vehicle booking services across Zanzibar."
      />

      <section
        className="transfers-hero"
        style={{ '--transfers-hero-image': `url(${transfersHero})` }}
      >
        <div className="container transfers-hero__content">
          <h1>Transfer Services</h1>
        </div>
      </section>

      <section className="section transfers-page-section">
        <div className="container transfers-page-container">
          <div className="transfers-title-block">
            <h2>Our Services</h2>
          </div>

          <div className="transfers-card-grid">
            {transferOptions.map((service) => (
              <article className="transfers-service-card" key={service.name}>
                <h3>{service.name}</h3>
                <p>{service.detail}</p>
              </article>
            ))}
          </div>

          <div className="transfers-title-block transfers-title-block--spaced">
            <h2>Our Vehicles</h2>
          </div>

          <div className="transfers-vehicle-grid">
            {transferVehicles.map((vehicle) => (
              <article className="transfers-vehicle-card" key={vehicle.name}>
                <img src={vehicle.image} alt={vehicle.name} />
                <div className="transfers-vehicle-card__info">
                  <h3>{vehicle.name}</h3>
                  <p>{vehicle.capacity}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="transfers-booking">
            <h2>Reserve Your Transfer</h2>
            <form className="transfers-booking-form" onSubmit={handleSubmit}>
              <div className="transfers-form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="transfers-form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="transfers-form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="transfers-form-group">
                <label htmlFor="pickup">Pickup Location</label>
                <input
                  id="pickup"
                  name="pickup"
                  type="text"
                  value={formData.pickup}
                  onChange={handleChange}
                  placeholder="Hotel / Airport"
                  required
                />
              </div>
              <div className="transfers-form-group">
                <label htmlFor="dropoff">Destination</label>
                <input
                  id="dropoff"
                  name="dropoff"
                  type="text"
                  value={formData.dropoff}
                  onChange={handleChange}
                  placeholder="Hotel / Area"
                  required
                />
              </div>
              <div className="transfers-form-row">
                <div className="transfers-form-group">
                  <label htmlFor="date">Travel Date</label>
                  <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} />
                </div>
                <div className="transfers-form-group">
                  <label htmlFor="time">Time</label>
                  <input id="time" name="time" type="time" value={formData.time} onChange={handleChange} />
                </div>
              </div>
              <div className="transfers-form-row">
                <div className="transfers-form-group">
                  <label htmlFor="adults">Adults</label>
                  <input
                    id="adults"
                    name="adults"
                    type="number"
                    min="1"
                    value={formData.adults}
                    onChange={handleChange}
                  />
                </div>
                <div className="transfers-form-group">
                  <label htmlFor="kids">Kids</label>
                  <input
                    id="kids"
                    name="kids"
                    type="number"
                    min="0"
                    value={formData.kids}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="transfers-form-group">
                <label htmlFor="message">Notes / Special Requests</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Let us know any details"
                />
              </div>
              <button className="transfers-submit-btn" type="submit">
                Submit Booking
              </button>
              {status && <p className="form-success">{status}</p>}
              {success && (
                <div className="success">
                  <h3>✅ Booking Submitted!</h3>
                  <p>We will reach out shortly to confirm the transfer.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default TransfersPage
