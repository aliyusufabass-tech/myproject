import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { tours, safariTours, zanzibarTours } from '../data/tours'

function BookingPage() {
  const { tourId } = useParams()
  const tour =
    tours.find((entry) => String(entry.id) === String(tourId)) ||
    safariTours.find((entry) => String(entry.id) === String(tourId)) ||
    zanzibarTours.find((entry) => String(entry.id) === String(tourId))
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    adults: '1',
    children: '0',
  })
  const [confirmed, setConfirmed] = useState(false)

  if (!tour) {
    return (
      <section className="tour-detail">
        <p className="tour-detail__missing">Tour not found. Please choose another experience.</p>
      </section>
    )
  }

  const childRate = tour.childPrice ?? 10
  const basePrice = parseFloat(String(tour.price).replace(/[^0-9.]/g, '')) || 0
  const adultsCount = Number(formData.adults) || 0
  const childrenCount = Number(formData.children) || 0
  const total = adultsCount * basePrice + childrenCount * childRate
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const formattedTotal = currency.format(total)

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
        <div>Location: Continuing in Zanzibar</div>
        <div>Duration: {tour.duration}</div>
        <div>Group Size: Max 10</div>
        <div>Reviews: 120</div>
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
              <span>{formData.name || 'N/A'}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>Email</span>
              <span>{formData.email || 'N/A'}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>Phone</span>
              <span>{formData.phone || 'N/A'}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>Adults</span>
              <span>{formData.adults || 'N/A'}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>Children</span>
              <span>{formData.children || 'N/A'}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>Child rate</span>
              <span>{currency.format(childRate)}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>Total</span>
              <span>{formattedTotal}</span>
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
              Adults
              <input
                name="adults"
                type="number"
                min="1"
                value={formData.adults}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Children
              <input
                name="children"
                type="number"
                min="0"
                value={formData.children}
                onChange={handleChange}
              />
            </label>
            <button className="tour-detail__form-btn" type="submit">
              Confirm Booking
            </button>
          </form>

          {confirmed && (
            <div className="tour-detail__confirmation">
              <p>
                Booking confirmed for {formData.name || 'your name'} ({formData.adults || 0} adults,
                {formData.children || 0} children).
              </p>
              <p>
                {`We will contact you at `}
                <strong>{formData.email}</strong> {` and confirm the ${formattedTotal} charge.`}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default BookingPage
