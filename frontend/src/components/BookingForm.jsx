import { useState, useMemo } from 'react'

const DEFAULT_ENDPOINT = 'https://formsubmit.co/info@zanzibarexcursion.com'

function BookingForm({
  endpoint,
  subject = 'New Booking Request',
  fields = [],
  hiddenFields = {},
  buttonText = 'Send Booking',
  adultPrice = 0,
  isSafari = false,
  formClassName,
}) {
  const [status, setStatus] = useState('')
  const [values, setValues] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: field.value ?? '' }), {}),
  )

  const targetEndpoint = useMemo(() => endpoint || DEFAULT_ENDPOINT, [endpoint])
  const adultDiscount = isSafari ? 20 : 10
  const adultRate = Math.max(Number(adultPrice || 0) - adultDiscount, 0)
  const kidsRate = Math.max(adultRate - 10, 0)
  const adultCount = Number(values.adults) || 0
  const kidsCount = Number(values.kids) || 0
  const totalAdult = adultCount * adultRate
  const totalKids = kidsCount * kidsRate
  const totalCost = totalAdult + totalKids
  const showSummary = Boolean(adultPrice && adultRate > 0)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('Sending…')

    const payload = new FormData()
    payload.append('_subject', subject)
    payload.append('_captcha', 'false')
    Object.entries(values).forEach(([key, val]) => payload.append(key, val))
    Object.entries(hiddenFields).forEach(([key, val]) => payload.append(key, val))

    try {
      const response = await fetch(targetEndpoint, {
        method: 'POST',
        body: payload,
      })
      if (!response.ok) {
        throw new Error('Failed to send booking')
      }
      setValues(fields.reduce((acc, field) => ({ ...acc, [field.name]: field.value ?? '' }), {}))
      setStatus('✅ Booking sent successfully!')
      setTimeout(() => {
        setStatus('')
      }, 3000)
    } catch (error) {
      setStatus('❌ Network error, please try again.')
    }
  }

  return (
    <form className={formClassName ?? 'transfers-booking-form'} onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div className="transfers-form-group" key={field.name}>
          {field.label && <label htmlFor={field.name}>{field.label}</label>}
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              rows={field.rows ?? 4}
              value={values[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
              autoComplete={field.autocomplete ?? 'off'}
            />
          ) : field.options ? (
            <select
              id={field.name}
              name={field.name}
              value={values[field.name]}
              onChange={handleChange}
              required={field.required}
            >
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type ?? 'text'}
              value={values[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
              min={field.min}
              max={field.max}
              autoComplete={field.autocomplete ?? 'off'}
            />
          )}
        </div>
      ))}

      {showSummary && (
        <div className="booking-summary">
          <h4>Booking Summary</h4>
          <p>Adult rate: ${adultRate.toFixed(2)} per person</p>
          <p>Kids rate: ${kidsRate.toFixed(2)} per person</p>
          <p>
            {adultCount} adult(s) + {kidsCount} kid(s) = ${totalCost.toFixed(2)}
          </p>
          <small>
            Safari discount: ${adultDiscount} per adult applied; kids get $10 less than adults.
          </small>
        </div>
      )}

      <button className="transfers-submit-btn" type="submit">
        {buttonText}
      </button>

      {status && <p className="form-success">{status}</p>}
    </form>
  )
}

export default BookingForm
