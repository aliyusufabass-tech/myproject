import { useState } from 'react'
import { useTranslation } from '../i18n'
import PageMeta from '../components/PageMeta'
import { transferOptions, transferVehicles } from '../data/tours'
import TransfersHero from '../assets/98.jpeg'

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
  const { t } = useTranslation()
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
    payload.append('_subject', 'Novo Pedido de Transfer')
    payload.append('_captcha', 'false')
    Object.entries(formData).forEach(([key, value]) => payload.append(key, value))

    try {
      const response = await fetch('https://formsubmit.co/info@zanexcursions.com', {
        method: 'POST',
        body: payload,
      })
      if (!response.ok) {
        throw new Error('Falha no pedido de reserva.')
      }
      setFormData(initialForm)
      setSuccess(true)
      setStatus('Booking sent successfully! We will reply soon.')
      setTimeout(() => {
        setStatus('')
        setSuccess(false)
      }, 4000)
    } catch (error) {
      setStatus('Could not send the booking. Please try again.')
    }
  }

  return (
    <>
      <PageMeta
        title={t('page.transfers.page.transfers')}
        description={t('page.transfers.page.recolha.profissional.no.aeroporto.transfers.de.hotel.viagens')}
      />

      <section
        className="transfers-hero"
        style={{ '--transfers-hero-image': `url(${TransfersHero})` }}
      >
        <div className="container transfers-hero__content">
          <h1>{t('page.transfers.page.servicos.de.transfer')}</h1>
        </div>
      </section>

      <section className="section transfers-page-section">
        <div className="container transfers-page-container">
          <div className="transfers-title-block">
            <h2>{t('page.transfers.page.os.nossos.servicos')}</h2>
          </div>

          <div className="transfers-card-grid">
            {transferOptions.map((service) => (
              <article className="transfers-service-card" key={service.name}>
                <h3>{t(service.name)}</h3>
                <p>{t(service.detail)}</p>
              </article>
            ))}
          </div>

          <div className="transfers-title-block transfers-title-block--spaced">
            <h2>{t('page.transfers.page.as.nossas.viaturas')}</h2>
          </div>

          <div className="transfers-vehicle-grid">
            {transferVehicles.map((vehicle) => (
              <article className="transfers-vehicle-card" key={vehicle.name}>
                <img src={vehicle.image} alt={t(vehicle.name)} />
                <div className="transfers-vehicle-card__info">
                  <h3>{t(vehicle.name)}</h3>
                  <p>{t(vehicle.capacity)}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="transfers-booking">
            <h2>{t('page.transfers.page.reserve.o.seu.transfer')}</h2>
            <form className="transfers-booking-form" onSubmit={handleSubmit}>
              <div className="transfers-form-group">
                <label htmlFor="fullName">{t('page.transfers.page.nome.completo')}</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={t('page.transfers.page.nome.completo')}
                  required
                />
              </div>
              <div className="transfers-form-group">
                <label htmlFor="email">{t('page.transfers.page.email')}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('page.transfers.page.email')}
                  required
                />
              </div>
              <div className="transfers-form-group">
                <label htmlFor="phone">{t('page.transfers.page.telefone')}</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('page.transfers.page.telefone')}
                  required
                />
              </div>
              <div className="transfers-form-group">
                <label htmlFor="pickup">{t('page.transfers.page.local.de.recolha')}</label>
                <input
                  id="pickup"
                  name="pickup"
                  type="text"
                  value={formData.pickup}
                  onChange={handleChange}
                  placeholder={t('page.transfers.page.hotel.aeroporto')}
                  required
                />
              </div>
              <div className="transfers-form-group">
                <label htmlFor="dropoff">{t('page.transfers.page.destino')}</label>
                <input
                  id="dropoff"
                  name="dropoff"
                  type="text"
                  value={formData.dropoff}
                  onChange={handleChange}
                  placeholder={t('page.transfers.page.hotel.zona')}
                  required
                />
              </div>
              <div className="transfers-form-row">
                <div className="transfers-form-group">
                  <label htmlFor="date">{t('page.transfers.page.data.do.transfer')}</label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="transfers-form-group">
                  <label htmlFor="time">{t('page.transfers.page.horario.preferido')}</label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="transfers-form-row">
                <div className="transfers-form-group">
                  <label htmlFor="adults">{t('page.transfers.page.adultos')}</label>
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
                  <label htmlFor="kids">{t('page.transfers.page.criancas')}</label>
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
              <div className="transfers-form-group transfers-form-group--full">
                <label htmlFor="message">{t('page.transfers.page.notas.pedidos.especiais')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('page.transfers.page.partilhe.detalhes.importantes')}
                />
              </div>
              <button className="transfers-submit-btn" type="submit">
                {t('page.transfers.page.enviar.reserva')}
              </button>
              {status && <p className="form-success">{t(status)}</p>}
              {success && (
                <div className="success">
                  <h3>{t('page.transfers.page.reserva.enviada')}</h3>
                  <p>{t('page.transfers.page.entraremos.em.contacto.em.breve.para.confirmar.o')}</p>
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

