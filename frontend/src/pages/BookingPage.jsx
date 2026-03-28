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
  const [status, setStatus] = useState('')
  const [success, setSuccess] = useState(false)
  const [submitDisabled, setSubmitDisabled] = useState(false)

  if (!tour) {
    return (
      <section className="tour-detail">
        <p className="tour-detail__missing">Tour not found. Please choose another experience.</p>
      </section>
    )
  }

  const isSafariTour = safariTours.some((entry) => String(entry.id) === String(tourId))
  const isZanzibarExcursion = zanzibarTours.some((entry) => String(entry.id) === String(tourId))
  const tourOrigin = safariTours.find((entry) => String(entry.id) === String(tourId))?.origin

  const parseBasePrice = (priceString) => {
    const match = String(priceString).match(/[\d.,]+/)
    if (!match) {
      return 0
    }
    return Number(match[0].replace(/,/g, ''))
  }

  const basePrice = parseBasePrice(tour.price)
  const isFromZanzibarOrArusha = isZanzibarExcursion || tourOrigin === 'From Zanzibar' || tourOrigin === 'From Arusha'
  const deduction = isFromZanzibarOrArusha ? 20 : 10
  const childRate = isFromZanzibarOrArusha
    ? Math.max(0, basePrice - deduction)
    : tour.childPrice ?? Math.max(0, basePrice - deduction)

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

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submitDisabled) {
      return
    }
    setStatus('Sending booking...')
    setSubmitDisabled(true)
    const payload = new FormData()
    payload.append('_subject', `New Booking Request - ${tour.title}`)
    payload.append('_captcha', 'false')
    payload.append('tour', tour.title)
    payload.append('tourId', tour.id)
    payload.append('duration', tour.duration)
    payload.append('price', tour.price)
    payload.append('name', formData.name)
    payload.append('email', formData.email)
    payload.append('phone', formData.phone)
    payload.append('adults', formData.adults)
    payload.append('children', formData.children)

    try {
      const response = await fetch('https://formsubmit.co/info@zanzibarexcursion.com', {
        method: 'POST',
        body: payload,
      })
      if (!response.ok) {
        throw new Error('Request failed')
      }
      setFormData({
        name: '',
        email: '',
        phone: '',
        adults: '1',
        children: '0',
      })
      setStatus('✅ Booking submitted! We’ll be in touch shortly.')
      setSuccess(true)
      setTimeout(() => {
        setStatus('')
        setSuccess(false)
        setSubmitDisabled(false)
      }, 5000)
    } catch (error) {
      setStatus('❌ Unable to send booking. Please try again.')
      setSubmitDisabled(false)
    }
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
            <button className="tour-detail__form-btn" type="submit" disabled={submitDisabled}>
              {submitDisabled ? 'Sending…' : 'Confirm Booking'}
            </button>
          </form>

          {status && <p className="form-success">{status}</p>}
          {success && (
            <div className="tour-detail__confirmation">
              <p>We received your booking details and will reply shortly to confirm.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default BookingPage
