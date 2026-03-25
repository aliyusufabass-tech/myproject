import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import TourFormatCard from '../components/TourFormatCard'
import { testimonials, zanzibarTours, safariTours } from '../data/tours'
import homeHeroImage from '../assets/image.jpeg'

const reasons = [
  {
    title: 'Local Expertise',
    text: 'Our team combines genuine hospitality with strong local knowledge and well-considered recommendations.',
  },
  {
    title: 'Flexible Planning',
    text: 'Choose private experiences, family-friendly itineraries, or straightforward transfers with confidence.',
  },
  {
    title: 'Trusted Service',
    text: 'Count on clear communication, punctual service, and attentive support from arrival to departure.',
  },
]

const buildHomeCards = () => {
  const excursionCards = zanzibarTours.slice(0, 3).map((tour) => ({
    id: tour.id,
    badge: tour.type === 'half' ? 'Half-day' : 'Full-day',
    title: tour.title,
    summary: tour.summary,
    image: tour.image,
    price: tour.price,
    rating: tour.rating,
    detailUrl: `/tours/${tour.id}`,
  }))

  const safariCard = safariTours.slice(0, 1).map((tour) => ({
    id: tour.id,
    badge: 'Safari',
    title: tour.title,
    summary: tour.summary,
    image: tour.image,
    price: tour.price,
    rating: tour.rating,
    detailUrl: `/tours/${tour.id}`,
  }))

  return [...excursionCards, ...safariCard]
}

function HomePage() {
  const homeTourCards = useMemo(buildHomeCards, [])
  return (
    <>
      <PageMeta
        title="Home"
        description="Discover tours, transfers, and tailored island experiences with Zanzibar Excursion Company Ltd."
      />
      <section
        className="hero hero--home"
        style={{ '--home-hero-image': `url(${homeHeroImage})` }}
      >
        <div className="container hero__content">
          <h1>Discover the Beauty of Zanzibar</h1>
          <p>
            Zanzibar Excursion Company Ltd curates memorable beach escapes, cultural
            experiences, and dependable transfers for guests who want to explore the island with ease.
          </p>
          <div className="hero__actions">
            <Button to="/tours">Explore Tours</Button>
          </div>
        </div>
      </section>

      <section className="section tours-format-section">
        <div className="container">
          <SectionHeading
            eyebrow="Featured Tours"
            title="Handpicked tours that mirror the experiences in our full catalogue"
            text="Taste the variety of Zanzibar with curated experiences that blend culture, wildlife, and ocean moments."
            align="center"
          />

          <div className="tour-format-grid">
            {homeTourCards.map((card) => (
              <TourFormatCard card={card} key={card.id} />
            ))}
          </div>

          <div className="tour-format-cta">
            <Button to="/tours" variant="secondary">
              View all tours
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--accent">
        <div className="container">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Travel support that feels personal, reliable, and deeply rooted in local knowledge"
            className="section-heading--compact"
            align="center"
          />
          <div className="grid grid--three">
            {reasons.map((reason, index) => (
              <article className="info-card" key={reason.title}>
                <span className="info-card__icon">{`0${index + 1}`}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="section-tag">Plan with confidence</p>
            <h2 className="home-section-title--compact">
              Need transfers, tours, and quick local guidance in one place?
            </h2>
            <p className="muted">
              We help guests move smoothly from airport arrival to hotel check-in, then
              into unforgettable island experiences without the usual coordination stress.
            </p>
            <Link className="text-link" to="/transfers">
              See transfer options
            </Link>
          </div>
          <div className="feature-panel">
            <div>
              <strong>Airport pickup</strong>
              <p>Professional meet-and-greet service with luggage support and direct hotel drop-off.</p>
            </div>
            <div>
              <strong>Custom combinations</strong>
              <p>Combine snorkeling, cultural visits, and sunset experiences within one itinerary.</p>
            </div>
            <div>
              <strong>Fast response</strong>
              <p>Responsive support for last-minute bookings, schedule changes, and travel updates.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <SectionHeading
            eyebrow="Testimonials"
            title="What guests value most about travelling with us"
            align="center"
          />
          <div className="grid grid--three">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <p>"{item.quote}"</p>
                <strong>{item.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
