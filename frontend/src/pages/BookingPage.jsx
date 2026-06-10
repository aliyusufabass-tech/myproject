import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useParams } from 'react-router-dom'
import { tours, safariTours, zanzibarTours } from '../data/tours'
import { translateText } from '../utils/i18nText'

function BookingPage() {
  const { i18n } = useTranslation()
  const { tourId } = useParams()
  const today = useMemo(() => new Date().toISOString().split('T')[0], [])
  const location = useLocation()
  const initialTourDate = new URLSearchParams(location.search).get('tourDate') ?? ''
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
    tourDate: initialTourDate,
  })
  const [status, setStatus] = useState('')
  const [success, setSuccess] = useState(false)
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const tr = (text) => translateText(text, i18n.language)

  if (!tour) {
    return (
      <section className="tour-detail">
        <p className="tour-detail__missing">{tr('Tour nao encontrado. Escolha outra experiencia.')}</p>
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
    setStatus('A enviar reserva...')
    setSubmitDisabled(true)
    const payload = new FormData()
    payload.append('_subject', `Novo Pedido de Reserva - ${tour.title}`)
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
    payload.append('tourDate', formData.tourDate)

    try {
      const response = await fetch('https://formsubmit.co/info@zanexcursions.com', {
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
        tourDate: '',
      })
      setStatus('Reserva enviada com sucesso! Entraremos em contacto em breve.')
      setSuccess(true)
      setTimeout(() => {
        setStatus('')
        setSuccess(false)
        setSubmitDisabled(false)
      }, 5000)
    } catch (error) {
      setStatus('Nao foi possivel enviar a reserva. Tente novamente.')
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
        <div>{tr('Localizacao')}: Zanzibar</div>
        <div>{tr('Duracao')}: {tr(tour.duration)}</div>
        <div>{tr('Tamanho do grupo')}: {tr('Maximo 10')}</div>
        <div>{tr('Avaliacoes')}: 120</div>
      </div>

      <div className="tour-detail__container">
        <div className="tour-booking__card">
          <div className="tour-booking__summary">
            <h2>{tr('Resumo da Reserva')}</h2>
            <div className="tour-booking__summary-row">
              <span>{tr('Tour')}</span>
              <span>{tr(tour.title)}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>{tr('Duracao')}</span>
              <span>{tr(tour.duration)}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>{tr('Preco')}</span>
              <span>{tr(tour.price)}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>{tr('Nome completo')}</span>
              <span>{formData.name || tr('N/D')}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>{tr('Email')}</span>
              <span>{formData.email || tr('N/D')}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>{tr('Telefone')}</span>
              <span>{formData.phone || tr('N/D')}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>{tr('Adultos')}</span>
              <span>{formData.adults || tr('N/D')}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>{tr('Criancas')}</span>
              <span>{formData.children || tr('N/D')}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>{tr('Data do tour')}</span>
              <span>{formData.tourDate || tr('Nao definida')}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>{tr('Tarifa de crianca')}</span>
              <span>{currency.format(childRate)}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>{tr('Total')}</span>
              <span>{formattedTotal}</span>
            </div>
          </div>

          <form className="tour-detail__form" onSubmit={handleSubmit}>
            <label>
              {tr('Nome completo')}
              <input name="name" type="text" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              {tr('Email')}
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              {tr('Numero de telefone')}
              <input name="phone" type="tel" value={formData.phone} onChange={handleChange} />
            </label>
            <label>
              {tr('Data do tour')}
              <input
                name="tourDate"
                type="date"
                value={formData.tourDate}
                onChange={handleChange}
                required
                min={today}
              />
            </label>
            <label>
              {tr('Adultos')}
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
              {tr('Criancas')}
              <input
                name="children"
                type="number"
                min="0"
                value={formData.children}
                onChange={handleChange}
              />
            </label>
            <button className="tour-detail__form-btn" type="submit" disabled={submitDisabled}>
              {submitDisabled ? tr('A enviar...') : tr('Confirmar Reserva')}
            </button>
          </form>

          {status && <p className="form-success">{status}</p>}
          {success && (
            <div className="tour-detail__confirmation">
              <p>{tr('Recebemos os detalhes da sua reserva e responderemos em breve para confirmar.')}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default BookingPage

