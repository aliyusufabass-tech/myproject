import { forwardRef, useImperativeHandle, useMemo, useState, useRef } from 'react'

const DEFAULT_ENDPOINT = 'https://formsubmit.co/info@zanexcursions.com'

const BookingForm = forwardRef(function BookingForm(
  {
    endpoint,
    subject = 'Novo Pedido de Reserva',
    fields = [],
    hiddenFields = {},
    buttonText = 'Enviar Reserva',
    adultPrice = 0,
    isSafari = false,
    formClassName,
  },
  ref,
) {
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
    setStatus('A enviar...')

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
        throw new Error('Failed to Enviar Reserva')
      }
      setValues(fields.reduce((acc, field) => ({ ...acc, [field.name]: field.value ?? '' }), {}))
      setStatus('Reserva enviada com sucesso!')
      setTimeout(() => {
        setStatus('')
      }, 3000)
    } catch (error) {
      setStatus('Erro de rede, tente novamente.')
    }
  }

  const innerRef = useRef(null)
  useImperativeHandle(ref, () => innerRef.current)

  return (
    <form ref={innerRef} className={formClassName ?? 'transfers-booking-form'} onSubmit={handleSubmit}>
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
          <h4>Resumo da Reserva</h4>
          <p>Tarifa de adulto: ${adultRate.toFixed(2)} por pessoa</p>
          <p>Tarifa de crianca: ${kidsRate.toFixed(2)} por pessoa</p>
          <p>
            {adultCount} adulto(s) + {kidsCount} crianca(s) = ${totalCost.toFixed(2)}
          </p>
          <small>
            Desconto de safari: ${adultDiscount} por adulto aplicado; criancas pagam $10 a menos.
          </small>
        </div>
      )}

      <button className="transfers-submit-btn" type="submit">
        {buttonText}
      </button>

      {status && <p className="form-success">{status}</p>}
  </form>
)
})

export default BookingForm

