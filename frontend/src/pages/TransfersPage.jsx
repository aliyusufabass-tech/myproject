import { useState } from 'react'
import PageMeta from '../components/PageMeta'
import { transferOptions, transferVehicles } from '../data/tours'
import transfersHero from '../assets/98.jpeg'

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  transferType: 'Airport Pickup',
  pickup: '',
  dropoff: '',
  date: '',
  time: '',
}

function TransfersPage() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
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
            <h2>Book Your Transfer</h2>

            <form className="transfers-booking-form" onSubmit={handleSubmit}>
              <div className="transfers-form-group">
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

              <div className="transfers-form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="transfers-form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="transfers-form-group">
                <label htmlFor="transferType">Transfer Type</label>
                <select
                  id="transferType"
                  name="transferType"
                  value={form.transferType}
                  onChange={handleChange}
                >
                  <option>Airport Pickup</option>
                  <option>Hotel Transfer</option>
                  <option>Private Trip</option>
                </select>
              </div>

              <div className="transfers-form-row">
                <div className="transfers-form-group">
                  <label htmlFor="pickup">Pickup</label>
                  <input
                    id="pickup"
                    name="pickup"
                    type="text"
                    value={form.pickup}
                    onChange={handleChange}
                  />
                </div>

                <div className="transfers-form-group">
                  <label htmlFor="dropoff">Drop-off</label>
                  <input
                    id="dropoff"
                    name="dropoff"
                    type="text"
                    value={form.dropoff}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="transfers-form-row">
                <div className="transfers-form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                  />
                </div>

                <div className="transfers-form-group">
                  <label htmlFor="time">Time</label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    value={form.time}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button className="transfers-submit-btn" type="submit">
                Confirm Booking
              </button>

              {submitted ? (
                <p className="form-success">Your booking request has been received successfully.</p>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default TransfersPage
