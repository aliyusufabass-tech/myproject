import { useState } from 'react'
import Button from '../components/Button'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import { transferOptions } from '../data/tours'

const initialForm = {
  name: '',
  email: '',
  route: '',
  passengers: '',
}

function TransfersPage() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <>
      <PageMeta
        title="Transfers"
        description="Book Zanzibar airport and hotel transfers with private cars, vans, and group transport options."
      />
      <section className="page-hero page-hero--transfers">
        <div className="container">
          <p className="section-tag">Transfers</p>
          <h1>Reliable airport and hotel transfers across Zanzibar.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Vehicle Options"
            title="Comfortable choices for solo travelers, families, and groups"
          />
          <div className="grid grid--three">
            {transferOptions.map((option) => (
              <article className="info-card" key={option.name}>
                <h3>{option.name}</h3>
                <p className="info-card__meta">{option.capacity}</p>
                <p>{option.detail}</p>
                <strong>{option.price}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container split split--wide">
          <div>
            <SectionHeading
              eyebrow="Booking Form"
              title="Request your transfer in a few quick steps"
              text="This demo uses local React form handling, ready to be connected to an API or WhatsApp workflow later."
            />
            <p className="muted">
              Popular routes include Zanzibar Airport to Stone Town, Nungwi, Kendwa,
              Paje, and Jambiani resorts.
            </p>
          </div>

          <form className="form-card" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Route
              <input
                name="route"
                placeholder="Airport to Nungwi"
                value={form.route}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Passengers
              <input
                name="passengers"
                type="number"
                min="1"
                value={form.passengers}
                onChange={handleChange}
                required
              />
            </label>
            <Button type="submit">Request Transfer</Button>
            {submitted ? <p className="form-success">Transfer request captured successfully.</p> : null}
          </form>
        </div>
      </section>
    </>
  )
}

export default TransfersPage
