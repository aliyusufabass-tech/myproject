import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PageMeta from '../components/PageMeta'
import { transferOptions, transferVehicles } from '../data/tours'
import TransfersHero from '../assets/98.jpeg'
import { translateText } from '../utils/i18nText'

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
  const { i18n } = useTranslation()
  const [formData, setFormData] = useState(initialForm)
  const [status, setStatus] = useState('')
  const [success, setSuccess] = useState(false)
  const tr = (text) => translateText(text, i18n.language)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('A enviar reserva...')
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
      setStatus('Reserva enviada com sucesso! Responderemos em breve.')
      setTimeout(() => {
        setStatus('')
        setSuccess(false)
      }, 4000)
    } catch (error) {
      setStatus('Nao foi possivel enviar a reserva. Tente novamente.')
    }
  }

  return (
    <>
      <PageMeta
        title={tr('Transfers')}
        description={tr('Recolha profissional no aeroporto, Transfers de hotel, viagens privadas e servicos de viaturas em Zanzibar.')}
      />

      <section
        className="transfers-hero"
        style={{ '--transfers-hero-image': `url(${TransfersHero})` }}
      >
        <div className="container transfers-hero__content">
          <h1>{tr('Servicos de Transfer')}</h1>
        </div>
      </section>

      <section className="section transfers-page-section">
        <div className="container transfers-page-container">
          <div className="transfers-title-block">
            <h2>{tr('Os Nossos Servicos')}</h2>
          </div>

          <div className="transfers-card-grid">
            {transferOptions.map((service) => (
              <article className="transfers-service-card" key={service.name}>
                <h3>{tr(service.name)}</h3>
                <p>{tr(service.detail)}</p>
              </article>
            ))}
          </div>

          <div className="transfers-title-block transfers-title-block--spaced">
            <h2>{tr('As Nossas Viaturas')}</h2>
          </div>

          <div className="transfers-vehicle-grid">
            {transferVehicles.map((vehicle) => (
              <article className="transfers-vehicle-card" key={vehicle.name}>
                <img src={vehicle.image} alt={tr(vehicle.name)} />
                <div className="transfers-vehicle-card__info">
                  <h3>{tr(vehicle.name)}</h3>
                  <p>{tr(vehicle.capacity)}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="transfers-booking">
            <h2>{tr('Reserve o Seu Transfer')}</h2>
            <form className="transfers-booking-form" onSubmit={handleSubmit}>
              <div className="transfers-form-group">
                <label htmlFor="fullName">{tr('Nome Completo')}</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={tr('Nome Completo')}
                  required
                />
              </div>
              <div className="transfers-form-group">
                <label htmlFor="email">{tr('Email')}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={tr('Email')}
                  required
                />
              </div>
              <div className="transfers-form-group">
                <label htmlFor="phone">{tr('Telefone')}</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={tr('Telefone')}
                  required
                />
              </div>
              <div className="transfers-form-group">
                <label htmlFor="pickup">{tr('Local de Recolha')}</label>
                <input
                  id="pickup"
                  name="pickup"
                  type="text"
                  value={formData.pickup}
                  onChange={handleChange}
                  placeholder={tr('Hotel / Aeroporto')}
                  required
                />
              </div>
              <div className="transfers-form-group">
                <label htmlFor="dropoff">{tr('Destino')}</label>
                <input
                  id="dropoff"
                  name="dropoff"
                  type="text"
                  value={formData.dropoff}
                  onChange={handleChange}
                  placeholder={tr('Hotel / Zona')}
                  required
                />
              </div>
              <div className="transfers-form-row">
                <div className="transfers-form-group">
                  <label htmlFor="date">{tr('Data do transfer')}</label>
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
                  <label htmlFor="time">{tr('Horario preferido')}</label>
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
                  <label htmlFor="adults">{tr('Adultos')}</label>
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
                  <label htmlFor="kids">{tr('Criancas')}</label>
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
                <label htmlFor="message">{tr('Notas / Pedidos Especiais')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={tr('Partilhe detalhes importantes')}
                />
              </div>
              <button className="transfers-submit-btn" type="submit">
                {tr('Enviar Reserva')}
              </button>
              {status && <p className="form-success">{status}</p>}
              {success && (
                <div className="success">
                  <h3>{tr('Reserva Enviada!')}</h3>
                  <p>{tr('Entraremos em contacto em breve para confirmar o transfer.')}</p>
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

