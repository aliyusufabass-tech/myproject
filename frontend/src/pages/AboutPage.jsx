import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'

const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '50+', label: 'Tour Packages' },
  { value: '5+', label: 'Years Experience' },
]

const services = [
  {
    title: 'Beach Tours',
    text: 'Enjoy the beauty of Zanzibar beaches, sandbanks, and island escapes.',
  },
  {
    title: 'Safari Trips',
    text: 'Experience wildlife adventures in Tanzania national parks and reserves.',
  },
  {
    title: 'Transfers',
    text: 'Reliable airport and hotel transport with friendly local coordination.',
  },
]

function AboutPage() {
  return (
    <>
      <PageMeta
        title="About"
        description="Discover Zanzibar Excursion, our story, services, and trusted travel experience."
      />

      <section className="about-hero">
        <div className="container about-hero__content">
          <h1>Discover Zanzibar With Us</h1>
          <p>Your trusted travel partner for unforgettable experiences</p>
        </div>
      </section>

      <section className="section about-page-section">
        <div className="container about-page-container">
          <div className="about-grid">
            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
              alt="Zanzibar ocean experience"
            />

            <div className="about-text">
              <h2>About Zanzibar Excursion</h2>
              <p>
                Zanzibar Excursion is a professional tourism company offering the best
                travel experiences across Zanzibar and Tanzania. From beach holidays to
                wildlife safaris, we make every journey unforgettable.
              </p>
              <p>
                We focus on quality service, safety, and customer satisfaction while
                showcasing the beauty of nature, culture, and coastal adventure.
              </p>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat) => (
              <div className="about-stat" key={stat.label}>
                <h2>{stat.value}</h2>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="about-services">
            <h2>What We Offer</h2>
            <div className="about-service-boxes">
              {services.map((service) => (
                <article className="about-service-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="about-cta">
            <h2>Start Your Journey Today</h2>
            <p>Book your tour now and explore Zanzibar like never before</p>
            <Link className="about-cta__button" to="/tours">
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
