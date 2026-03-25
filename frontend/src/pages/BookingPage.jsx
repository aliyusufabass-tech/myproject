import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { tours } from '../data/tours'

function BookingPage() {
  const { tourId } = useParams()
  const tour = tours.find((entry) => String(entry.id) === String(tourId))
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    notes: '',
  })
  const [confirmed, setConfirmed] = useState(false)

  if (!tour) {
    return (
      <section className="tour-detail">
        <p className="tour-detail__missing">Tour not found. Please choose another experience.</p>
      </section>
    )
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setConfirmed(true)
  }

  return (
    <section className="tour-detail">
      <div
        className="tour-detail__hero"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(4, 36, 46, 0.8), rgba(6, 77, 89, 0.6)), url(${tour.image})`,
        }}
      />

      <div className="tour-detail__info-bar">
        <div>📍 Location: Continuing in Zanzibar</div>
        <div>⏱ Duration: {tour.duration}</div>
        <div>👥 Group Size: Max 10</div>
        <div>⭐ Reviews: 120</div>
      </div>

      <div className="tour-detail__container">
        <div className="tour-booking__card">
          <div className="tour-booking__summary">
            <h2>Booking summary</h2>
            <div className="tour-booking__summary-row">
              <span>Tour</span>
              <span>{tour.title}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>Duration</span>
              <span>{tour.duration}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>Price</span>
              <span>{tour.price}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>Full name</span>
              <span>{formData.name || '—'}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>Email</span>
              <span>{formData.email || '—'}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>Phone</span>
              <span>{formData.phone || '—'}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>Guests</span>
              <span>{formData.guests || '—'}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>Notes</span>
              <span>{formData.notes || '—'}</span>
            </div>
          </div>

          <form className="tour-detail__form" onSubmit={handleSubmit}>
            <label>
              Full name
              <input name="name" type="text" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone number
              <input name="phone" type="tel" value={formData.phone} onChange={handleChange} />
            </label>
            <label>
              Guests
              <input
                name="guests"
                type="number"
                min="1"
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Notes / requests
              <textarea name="notes" value={formData.notes} onChange={handleChange} rows="3" />
            </label>
            <button className="tour-detail__form-btn" type="submit">
              Confirm Booking
            </button>
          </form>

          {confirmed && (
            <div className="tour-detail__confirmation">
              <p>Booking confirmed for {formData.name || 'your name'}.</p>
              <p>
                We will contact you at <strong>{formData.email}</strong> to finalize the details.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default BookingPage
