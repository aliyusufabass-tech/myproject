import { useCallback, useEffect, useRef, useState } from 'react'
import PageMeta from '../components/PageMeta'
import { transferOptions, transferVehicles } from '../data/tours'
import transfersHero from '../assets/98.jpeg'

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  country: '',
  transferType: 'Airport Pickup',
  pickup: '',
  dropoff: '',
  date: '',
  time: '',
  adults: '1',
  kids: '0',
  message: '',
}

const airportPrices = { north: 42, south: 47, 'south east': 42, 'north east': 42, east: 39, west: 20 }
const hotelPrices = {
  north: { 'north east': 40, 'south east': 65, south: 65, east: 50, west: 39 },
  south: { north: 65, 'south east': 40, east: 47, west: 42 },
  'north east': { north: 38, 'south east': 40, east: 40, west: 42 },
  'south east': { north: 65, 'north east': 40, east: 40, west: 42 },
  east: { north: 50, south: 47, 'north east': 40, 'south east': 40, west: 39 },
  west: { north: 50, south: 47, 'north east': 40, 'south east': 40, east: 40 },
}

const getVehicle = (pax) => (pax <= 4 ? 'Alphard / Sedan' : pax <= 8 ? 'Hiace' : 'Coaster')

const detectRegion = (place) => {
  if (!place) return null
  const lat = place.geometry?.location?.lat?.() ?? null
  const lng = place.geometry?.location?.lng?.() ?? null
  const text = ((place.name || '') + ' ' + (place.formatted_address || '')).toLowerCase()
  const fumbaAreas = ['fumba', 'bweleo', 'dimani', 'nyamanzi', 'kisakasaka', 'kibondeni', 'kwahani']
  const westAreas = ['stone town', 'mjini', 'bububu', 'fuji beach']
  if (fumbaAreas.some((a) => text.includes(a))) return 'east'
  if (westAreas.some((a) => text.includes(a))) return 'west'
  if (lat !== null && lat > -5.9) return 'north'
  if (lat !== null && lat < -6.45) return 'south'
  if (lat !== null && lat <= -6.2 && lng !== null && lng > 39.4) return 'south east'
  if (lat !== null && lat > -6.2 && lng !== null && lng > 39.45) return 'north east'
  return 'east'
}

const GOOGLE_MAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY

function TransfersPage() {
  const [formData, setFormData] = useState(initialForm)
  const [status, setStatus] = useState('')
  const [success, setSuccess] = useState(false)
  const [pickupPlace, setPickupPlace] = useState(null)
  const [dropPlace, setDropPlace] = useState(null)
  const [priceInfo, setPriceInfo] = useState({
    adultRate: 0,
    kidsRate: 0,
    total: 0,
    vehicle: '',
    pickupRegion: '',
    dropRegion: '',
  })

  const pickupRef = useRef(null)
  const dropRef = useRef(null)
  const listenerRef = useRef(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const initAutocomplete = useCallback(() => {
    if (!window.google?.maps?.places || listenerRef.current) {
      return
    }
    if (!pickupRef.current || !dropRef.current) {
      return
    }
    const options = { componentRestrictions: { country: 'tz' } }
    const pickupAuto = new window.google.maps.places.Autocomplete(pickupRef.current, options)
    const dropAuto = new window.google.maps.places.Autocomplete(dropRef.current, options)
    pickupAuto.addListener('place_changed', () => {
      const place = pickupAuto.getPlace()
      setPickupPlace(place)
      setFormData((current) => ({ ...current, pickup: pickupRef.current?.value || '' }))
    })
    dropAuto.addListener('place_changed', () => {
      const place = dropAuto.getPlace()
      setDropPlace(place)
      setFormData((current) => ({ ...current, dropoff: dropRef.current?.value || '' }))
    })
    listenerRef.current = true
  }, [])

  useEffect(() => {
    if (window.google?.maps?.places) {
      initAutocomplete()
      return
    }
    if (!GOOGLE_MAPS_KEY) {
      return
    }
    if (document.getElementById('google-maps-script')) {
      document
        .getElementById('google-maps-script')
        .addEventListener('load', initAutocomplete, { once: true })
      return
    }
    const script = document.createElement('script')
    script.id = 'google-maps-script'
    script.async = true
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&libraries=places`
    script.onload = initAutocomplete
    document.body.appendChild(script)
  }, [initAutocomplete])

  const computePrice = useCallback(() => {
    if (!pickupPlace || !dropPlace) {
      setPriceInfo((prev) => ({ ...prev, total: 0 }))
      return
    }
    const pr = detectRegion(pickupPlace)
    const dr = detectRegion(dropPlace)
    if (!pr || !dr) {
      setPriceInfo((prev) => ({ ...prev, total: 0 }))
      return
    }
    const adults = Number(formData.adults) || 0
    const kids = Number(formData.kids) || 0
    const pax = Math.max(adults + kids, 1)
    let basePrice = pr === 'west' || dr === 'west' ? 20 : hotelPrices[pr]?.[dr] || airportPrices[dr] || 0
    if (pax === 2) basePrice += 10
    if (pax === 3) basePrice += 20
    const adultRate = basePrice
    const kidsRate = Math.max(adultRate - 10, 0)
    const total = adults * adultRate + kids * kidsRate
    setPriceInfo({
      adultRate,
      kidsRate,
      total,
      vehicle: getVehicle(pax),
      pickupRegion: pr,
      dropRegion: dr,
    })
  }, [dropPlace, formData.adults, formData.kids, pickupPlace])

  useEffect(() => {
    computePrice()
  }, [computePrice])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!formData.fullName || !formData.email || !formData.phone || !formData.pickup || !formData.dropoff) {
      setStatus('Please fill the required fields before submitting.')
      return
    }
    if (!priceInfo.total) {
      setStatus('Select valid pickup and drop-off locations to view pricing.')
      return
    }
    setStatus('Sending booking request...')
    const payload = new FormData()
    payload.append('_subject', 'New Transfer Booking')
    payload.append('_captcha', 'false')
    Object.entries(formData).forEach(([key, value]) => payload.append(key, value))
    payload.append('vehicle', priceInfo.vehicle)
    payload.append('pickupRegion', priceInfo.pickupRegion)
    payload.append('dropRegion', priceInfo.dropRegion)
    payload.append('totalPrice', `$${priceInfo.total.toFixed(2)}`)

    try {
      const response = await fetch('https://formsubmit.co/info@zanzibarexcursion.com', {
        method: 'POST',
        body: payload,
      })
      if (!response.ok) {
        throw new Error('Booking request failed.')
      }
      setFormData(initialForm)
      setPickupPlace(null)
      setDropPlace(null)
      setStatus('✅ Booking submitted! We’ll reply shortly.')
      setSuccess(true)
      setTimeout(() => {
        setStatus('')
        setSuccess(false)
      }, 5000)
    } catch (error) {
      setStatus('❌ Unable to submit booking. Please try again.')
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
            <h2>Book Your Transfer</h2>
            <form className="transfers-booking-form" onSubmit={handleSubmit}>
              <div className="transfers-form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="transfers-form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="transfers-form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  autoComplete="tel"
                />
              </div>
              <div className="transfers-form-group">
                <label htmlFor="country">Country</label>
                <input
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Country"
                  required
                  autoComplete="country"
                />
              </div>
              <div className="transfers-form-group">
                <label htmlFor="transferType">Transfer Type</label>
                <select id="transferType" name="transferType" value={formData.transferType} onChange={handleInputChange}>
                  <option>Airport Pickup</option>
                  <option>Hotel Transfer</option>
                  <option>Private Trip</option>
                </select>
              </div>
              <div className="transfers-form-row">
                <div className="transfers-form-group">
                  <label htmlFor="pickup">Pickup</label>
                <input
                  ref={pickupRef}
                  id="pickup"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleInputChange}
                  placeholder="Pickup location"
                  required
                  autoComplete="off"
                />
                </div>
                <div className="transfers-form-group">
                  <label htmlFor="dropoff">Drop-off</label>
                <input
                  ref={dropRef}
                  id="dropoff"
                  name="dropoff"
                  value={formData.dropoff}
                  onChange={handleInputChange}
                  placeholder="Drop-off location"
                  required
                  autoComplete="off"
                />
                </div>
              </div>
              <div className="transfers-form-row">
                <div className="transfers-form-group">
                  <label htmlFor="date">Date</label>
                  <input id="date" name="date" type="date" value={formData.date} onChange={handleInputChange} />
                </div>
                <div className="transfers-form-group">
                  <label htmlFor="time">Time</label>
                  <input id="time" name="time" type="time" value={formData.time} onChange={handleInputChange} />
                </div>
              </div>
              <div className="transfers-form-row">
                <div className="transfers-form-group">
                  <label htmlFor="adults">Adults</label>
                  <input id="adults" name="adults" type="number" min="1" value={formData.adults} onChange={handleInputChange} />
                </div>
                <div className="transfers-form-group">
                  <label htmlFor="kids">Kids</label>
                  <input id="kids" name="kids" type="number" min="0" value={formData.kids} onChange={handleInputChange} />
                </div>
              </div>
              <div className="transfers-form-group">
                <label htmlFor="message">Notes</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Any special requests?"
                  autoComplete="off"
                />
              </div>
              <div className="transfers-summary-card">
                <h3>Route & Price</h3>
                <p>
                  <strong>Pickup:</strong> {formData.pickup || 'Select location'}
                </p>
                <p>
                  <strong>Drop-off:</strong> {formData.dropoff || 'Select location'}
                </p>
                <p>
                  <strong>Vehicle:</strong> {priceInfo.vehicle || 'Awaiting route'}
                </p>
                <p>
                  <strong>Total:</strong> {priceInfo.total ? `$${priceInfo.total.toFixed(2)}` : 'Waiting for route'}
                </p>
              </div>
              <button className="transfers-submit-btn" type="submit">
                Confirm Booking
              </button>
              {status && <p className="form-success">{status}</p>}
            </form>
            {success && (
              <div className="success">
                <h3>✅ Booking Submitted!</h3>
                <p>We received your transfer request and will reach out with confirmation.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default TransfersPage
