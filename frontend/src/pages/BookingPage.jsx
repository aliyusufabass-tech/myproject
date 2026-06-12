import { useMemo, useState } from 'react'
import { useTranslation } from '../i18n'
import { useLocation, useParams } from 'react-router-dom'
import { tours, safariTours, zanzibarTours } from '../data/tours'

function BookingPage() {
  const { t } = useTranslation()
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

  if (!tour) {
    return (
      <section className="tour-detail">
        <p className="tour-detail__missing">{t('page.booking.page.tour.nao.encontrado.escolha.outra.experiencia')}</p>
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
      setStatus('Booking sent successfully! We will contact you shortly.')
      setSuccess(true)
      setTimeout(() => {
        setStatus('')
        setSuccess(false)
        setSubmitDisabled(false)
      }, 5000)
    } catch (error) {
      setStatus('Could not send the booking. Please try again.')
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
        <div>{t('page.booking.page.localizacao')}: {t('page.booking.page.zanzibar')}</div>
        <div>{t('page.booking.page.duracao')}: {t(tour.duration)}</div>
        <div>{t('page.booking.page.tamanho.do.grupo')}: {t('page.booking.page.maximo.10')}</div>
        <div>{t('page.booking.page.avaliacoes')}: 120</div>
      </div>

      <div className="tour-detail__container">
        <div className="tour-booking__card">
          <div className="tour-booking__summary">
            <h2>{t('page.booking.page.resumo.da.reserva')}</h2>
            <div className="tour-booking__summary-row">
              <span>{t('page.booking.page.tour')}</span>
              <span>{t(tour.title)}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>{t('page.booking.page.duracao')}</span>
              <span>{t(tour.duration)}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>{t('page.booking.page.preco')}</span>
              <span>{t(tour.price)}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>{t('page.booking.page.nome.completo')}</span>
              <span>{formData.name || t('page.booking.page.n.d')}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>{t('page.booking.page.email')}</span>
              <span>{formData.email || t('page.booking.page.n.d')}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>{t('page.booking.page.telefone')}</span>
              <span>{formData.phone || t('page.booking.page.n.d')}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>{t('page.booking.page.adultos')}</span>
              <span>{formData.adults || t('page.booking.page.n.d')}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>{t('page.booking.page.criancas')}</span>
              <span>{formData.children || t('page.booking.page.n.d')}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>{t('page.booking.page.data.do.tour')}</span>
              <span>{formData.tourDate || t('page.booking.page.nao.definida')}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>{t('page.booking.page.tarifa.de.crianca')}</span>
              <span>{currency.format(childRate)}</span>
            </div>
            <div className="tour-booking__summary-row">
              <span>{t('page.booking.page.total')}</span>
              <span>{formattedTotal}</span>
            </div>
          </div>

          <form className="tour-detail__form" onSubmit={handleSubmit}>
            <label>
              {t('page.booking.page.nome.completo')}
              <input name="name" type="text" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              {t('page.booking.page.email')}
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              {t('page.booking.page.numero.de.telefone')}
              <input name="phone" type="tel" value={formData.phone} onChange={handleChange} />
            </label>
            <label>
              {t('page.booking.page.data.do.tour')}
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
              {t('page.booking.page.adultos')}
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
              {t('page.booking.page.criancas')}
              <input
                name="children"
                type="number"
                min="0"
                value={formData.children}
                onChange={handleChange}
              />
            </label>
            <button className="tour-detail__form-btn" type="submit" disabled={submitDisabled}>
              {submitDisabled ? t('page.booking.page.a.enviar') : t('page.booking.page.confirmar.reserva')}
            </button>
          </form>

          {status && <p className="form-success">{t(status)}</p>}
          {success && (
            <div className="tour-detail__confirmation">
              <p>{t('page.booking.page.recebemos.os.detalhes.da.sua.reserva.e.responderemos')}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default BookingPage

