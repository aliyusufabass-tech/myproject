import { useState } from 'react'
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
  const [formData, setFormData] = useState(initialForm)
  const [status, setStatus] = useState('')
  const [success, setSuccess] = useState(false)

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
        title="Transfers"
        description="Recolha profissional no aeroporto, Transfers de hotel, viagens privadas e servicos de viaturas em Zanzibar."
      />

      <section
        className="Transfers-hero"
        style={{ '--Transfers-hero-image': `url(${TransfersHero})` }}
      >
        <div className="container Transfers-hero__content">
          <h1>Servicos de Transfer</h1>
        </div>
      </section>

      <section className="section Transfers-page-section">
        <div className="container Transfers-page-container">
          <div className="Transfers-title-block">
            <h2>Os Nossos Servicos</h2>
          </div>

          <div className="Transfers-card-grid">
            {transferOptions.map((service) => (
              <article className="Transfers-service-card" key={service.name}>
                <h3>{service.name}</h3>
                <p>{service.detail}</p>
              </article>
            ))}
          </div>

          <div className="Transfers-title-block Transfers-title-block--spaced">
            <h2>As Nossas Viaturas</h2>
          </div>

          <div className="Transfers-vehicle-grid">
            {transferVehicles.map((vehicle) => (
              <article className="Transfers-vehicle-card" key={vehicle.name}>
                <img src={vehicle.image} alt={vehicle.name} />
                <div className="Transfers-vehicle-card__info">
                  <h3>{vehicle.name}</h3>
                  <p>{vehicle.capacity}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="Transfers-booking">
            <h2>Reserve o Seu Transfer</h2>
            <form className="transfers-booking-form" onSubmit={handleSubmit}>
              <div className="Transfers-form-group">
                <label htmlFor="fullName">Nome Completo</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Nome Completo"
                  required
                />
              </div>
              <div className="Transfers-form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="Transfers-form-group">
                <label htmlFor="phone">Telefone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Telefone"
                  required
                />
              </div>
              <div className="Transfers-form-group">
                <label htmlFor="pickup">Local de Recolha</label>
                <input
                  id="pickup"
                  name="pickup"
                  type="text"
                  value={formData.pickup}
                  onChange={handleChange}
                  placeholder="Hotel / Aeroporto"
                  required
                />
              </div>
              <div className="Transfers-form-group">
                <label htmlFor="dropoff">Destino</label>
                <input
                  id="dropoff"
                  name="dropoff"
                  type="text"
                  value={formData.dropoff}
                  onChange={handleChange}
                  placeholder="Hotel / Zona"
                  required
                />
              </div>
              <div className="Transfers-form-row">
                <div className="Transfers-form-group">
                  <label htmlFor="date">Data do transfer</label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="Transfers-form-group">
                  <label htmlFor="time">Horario preferido</label>
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
              <div className="Transfers-form-row">
                <div className="Transfers-form-group">
                  <label htmlFor="adults">Adultos</label>
                  <input
                    id="adults"
                    name="adults"
                    type="number"
                    min="1"
                    value={formData.adults}
                    onChange={handleChange}
                  />
                </div>
                <div className="Transfers-form-group">
                  <label htmlFor="kids">Criancas</label>
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
              <div className="Transfers-form-group">
                <label htmlFor="message">Notas / Pedidos Especiais</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Partilhe detalhes importantes"
                />
              </div>
              <button className="Transfers-submit-btn" type="submit">
                Enviar Reserva
              </button>
              {status && <p className="form-success">{status}</p>}
              {success && (
                <div className="success">
                  <h3>Reserva Enviada!</h3>
                  <p>Entraremos em contacto em breve para confirmar o transfer.</p>
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

