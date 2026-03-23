import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import TourCard from '../components/TourCard'
import { tours } from '../data/tours'

function ToursPage() {
  return (
    <>
      <PageMeta
        title="Tours"
        description="Browse Zanzibar snorkeling, culture, and safari-style experiences from Zanzibar Excursion."
      />
      <section className="page-hero page-hero--tours">
        <div className="container">
          <p className="section-tag">Tours</p>
          <h1>Choose a Zanzibar experience that matches your pace and style.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Explore Experiences"
            title="Reusable tour cards make it easy to expand this catalog later"
            text="Add, edit, or replace tours from a single shared data file as your offerings grow."
          />
          <div className="grid grid--two">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ToursPage
