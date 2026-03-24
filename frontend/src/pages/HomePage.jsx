import { Link } from 'react-router-dom'
import Button from '../components/Button'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import TourCard from '../components/TourCard'
import { testimonials, tours } from '../data/tours'

const reasons = [
  {
    title: 'Local Expertise',
    text: 'Our guides blend warm hospitality with real island knowledge and tailored recommendations.',
  },
  {
    title: 'Flexible Planning',
    text: 'Choose private experiences, family itineraries, or simple point-to-point bookings with ease.',
  },
  {
    title: 'Trusted Service',
    text: 'Clear communication, on-time pickups, and thoughtful details from first message to farewell.',
  },
]

function HomePage() {
  return (
    <>
      <PageMeta
        title="Home"
        description="Discover tours, transfers, and tailored island experiences with Zanzibar Excursion Company Ltd."
      />
      <section className="hero">
        <div className="container hero__content">
          <p className="section-tag">Island journeys with style</p>
          <h1>Discover the Beauty of Zanzibar</h1>
          <p>
            Zanzibar Excursion Company Ltd curates beach escapes, cultural tours, and smooth
            transfers for travelers who want the island to feel effortless and unforgettable.
          </p>
          <div className="hero__actions">
            <Button to="/tours">Explore Tours</Button>
            <Button to="/contact" variant="secondary">
              Book Now
            </Button>
          </div>
          <div className="hero__stats">
            <div>
              <strong>20+</strong>
              <span>signature experiences</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>guest satisfaction</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>travel support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Featured Tours"
            title="Handpicked experiences for sea lovers, explorers, and culture seekers"
            text="From reef adventures to Stone Town stories, our most-loved tours are designed to show Zanzibar from every angle."
          />
          <div className="grid grid--three">
            {tours.slice(0, 3).map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--accent">
        <div className="container">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Travel support that feels polished, personal, and deeply local"
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
            <h2>Need transfers, tours, and quick local guidance in one place?</h2>
            <p className="muted">
              We help guests move smoothly from the airport to their hotel, then into
              memorable island experiences without the usual coordination stress.
            </p>
            <Link className="text-link" to="/transfers">
              See transfer options
            </Link>
          </div>
          <div className="feature-panel">
            <div>
              <strong>Airport pickup</strong>
              <p>Meet-and-greet arrivals with luggage support and hotel drop-off.</p>
            </div>
            <div>
              <strong>Custom combinations</strong>
              <p>Pair snorkeling, cultural stops, and dinner cruises in one itinerary.</p>
            </div>
            <div>
              <strong>Fast response</strong>
              <p>Friendly coordination for last-minute bookings and travel adjustments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <SectionHeading
            eyebrow="Testimonials"
            title="What our guests remember most"
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
