import { Link } from 'react-router-dom'
import Button from '../components/Button'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import TourCard from '../components/TourCard'
import { testimonials, tours } from '../data/tours'

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
            Zanzibar Excursion Company Ltd curates memorable beach escapes, cultural
            experiences, and dependable transfers for guests who want to explore the island with ease.
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
            title="Signature experiences for ocean lovers, explorers, and culture seekers"
            text="From reef adventures to historic town walks, these guest favourites reveal Zanzibar from several memorable perspectives."
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
            title="Travel support that feels personal, reliable, and deeply rooted in local knowledge"
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
