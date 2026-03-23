import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import { galleryImages, team } from '../data/tours'

function AboutPage() {
  return (
    <>
      <PageMeta
        title="About"
        description="Learn about Zanzibar Excursion, our mission, team, and guest-focused travel services."
      />
      <section className="page-hero page-hero--about">
        <div className="container">
          <p className="section-tag">About Us</p>
          <h1>We design Zanzibar experiences with warmth, ease, and island insight.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <SectionHeading
              eyebrow="Mission & Vision"
              title="Helping every visitor experience Zanzibar beyond the brochure"
              text="Our mission is to make travel in Zanzibar feel seamless and inspiring through trusted tours, reliable transfers, and genuine local connection."
            />
          </div>
          <div className="feature-panel">
            <div>
              <strong>Mission</strong>
              <p>Deliver safe, beautiful, and guest-centered excursions with local expertise.</p>
            </div>
            <div>
              <strong>Vision</strong>
              <p>Become the most trusted island travel partner for memorable and meaningful journeys.</p>
            </div>
            <div>
              <strong>Services</strong>
              <p>Tours, airport transfers, hotel pickup, custom itineraries, and concierge support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--accent">
        <div className="container">
          <SectionHeading
            eyebrow="Our Team"
            title="Friendly experts behind every transfer and excursion"
          />
          <div className="grid grid--three">
            {team.map((member) => (
              <article className="team-card" key={member.name}>
                <div
                  className="team-card__image"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Gallery"
            title="A glimpse of the coast, culture, and calm we share with our guests"
          />
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div
                key={image}
                className="gallery-grid__item"
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
