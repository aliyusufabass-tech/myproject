import { useState } from 'react'
import PageMeta from '../components/PageMeta'
import { safariTours, zanzibarTours } from '../data/tours'

function ToursPage() {
  const [tourFilter, setTourFilter] = useState('all')
  const [safariFilter, setSafariFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const visibleZanzibarTours = zanzibarTours.filter((tour) => {
    if (tourFilter === 'all') {
      return true
    }

    return tour.type === tourFilter
  })

  const visibleSafaris = safariTours.filter((tour) => {
    const matchesOrigin =
      safariFilter === 'all' ||
      (safariFilter === 'zanzibar' && tour.origin === 'From Zanzibar') ||
      (safariFilter === 'arusha' && tour.origin === 'From Arusha')

    const query = searchTerm.trim().toLowerCase()
    const haystack = [tour.title, tour.summary, tour.origin, ...tour.tags].join(' ').toLowerCase()
    const matchesSearch = query === '' || haystack.includes(query)

    return matchesOrigin && matchesSearch
  })

  return (
    <>
      <PageMeta
        title="Tours"
        description="Browse Zanzibar tours and wildlife safaris with full-day, half-day, and safari finder filters."
      />

      <section className="page-hero page-hero--tours">
        <div className="container">
          <p className="section-tag">Tours</p>
          <h1>Explore island escapes and wildlife journeys built around your pace.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="tours-header">
            <p className="section-tag">Zanzibar Day Tours</p>
            <h2>Choose from curated full-day and half-day island experiences</h2>
          </div>

          <div className="filter-btns">
            <button
              className={`filter-btn ${tourFilter === 'all' ? 'active' : ''}`}
              type="button"
              onClick={() => setTourFilter('all')}
            >
              All Tours
            </button>
            <button
              className={`filter-btn ${tourFilter === 'full' ? 'active' : ''}`}
              type="button"
              onClick={() => setTourFilter('full')}
            >
              Full Day
            </button>
            <button
              className={`filter-btn ${tourFilter === 'half' ? 'active' : ''}`}
              type="button"
              onClick={() => setTourFilter('half')}
            >
              Half Day
            </button>
          </div>

          <div className="tour-grid">
            {visibleZanzibarTours.map((tour) => (
              <article className="tour-showcase-card" key={tour.id}>
                <img src={tour.image} alt={tour.title} />
                <div className="tour-showcase-card__content">
                  <h3>{tour.title}</h3>
                  <p>{tour.summary}</p>

                  <div className="tour-tags">
                    {tour.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="tour-info">
                    <span>{tour.duration}</span>
                    <span>{tour.maxGuests}</span>
                    <span>{tour.reviews}</span>
                  </div>

                  <div className="tour-price">{tour.price}</div>

                  <div className="tour-button">
                    <a href={tour.detailUrl} target="_blank" rel="noreferrer">
                      View Details
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--accent">
        <div className="container">
          <div className="safari-shell">
            <div className="safari-header">
              <div>
                <p className="section-tag">Wildlife Experiences</p>
                <h2>Find the right wildlife experience</h2>
                <p>
                  Search Mikumi, Serengeti, Ngorongoro, Tarangire, or browse by
                  departure point to quickly narrow the best safari option.
                </p>
              </div>

              <div className="safari-controls">
                <input
                  className="safari-search"
                  type="search"
                  placeholder="Search Mikumi, Serengeti, Ngorongoro..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />

                <div className="safari-filter-row">
                  <button
                    className={`filter-btn ${safariFilter === 'all' ? 'active' : ''}`}
                    type="button"
                    onClick={() => setSafariFilter('all')}
                  >
                    All Safaris
                  </button>
                  <button
                    className={`filter-btn ${safariFilter === 'zanzibar' ? 'active' : ''}`}
                    type="button"
                    onClick={() => setSafariFilter('zanzibar')}
                  >
                    From Zanzibar
                  </button>
                  <button
                    className={`filter-btn ${safariFilter === 'arusha' ? 'active' : ''}`}
                    type="button"
                    onClick={() => setSafariFilter('arusha')}
                  >
                    From Arusha
                  </button>
                </div>
              </div>
            </div>

            <div className="tour-grid safari-grid">
              {visibleSafaris.map((tour) => (
                <article className="tour-showcase-card safari-card" key={tour.id}>
                  <img src={tour.image} alt={tour.title} />
                  <div className="tour-showcase-card__content">
                    <span className="safari-origin">{tour.origin}</span>
                    <h3>{tour.title}</h3>
                    <p>{tour.summary}</p>

                    <div className="tour-tags">
                      {tour.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <div className="tour-info">
                      <span>{tour.duration}</span>
                      <span>{tour.origin}</span>
                    </div>

                    <div className="safari-price-block">
                      <strong>{tour.price}</strong>
                      <span>per person</span>
                    </div>

                    <div className="tour-button">
                      <a href="/contact">View Details</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {visibleSafaris.length === 0 ? (
              <div className="empty-state">
                <h3>No safaris match that search yet.</h3>
                <p>Try a destination name like Mikumi or switch the departure filter.</p>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  )
}

export default ToursPage
