import { useMemo, useState } from 'react'
import PageMeta from '../components/PageMeta'
import { safariTours, zanzibarTours } from '../data/tours'

const filters = [
  { key: 'all', label: 'All' },
  { key: 'half', label: 'Half-day Excursions' },
  { key: 'full', label: 'Full-day Excursions' },
  { key: 'one-day', label: 'One Day Safari' },
  { key: 'multi-day', label: 'Three Days Safari' },
]

const getSafariCategory = (duration) => {
  if (duration === '1 Day') {
    return 'one-day'
  }

  return 'multi-day'
}

const normalizeSafariCard = (tour) => ({
  id: tour.id,
  type: 'safari',
  filterKey: getSafariCategory(tour.duration),
  badge: tour.origin,
  title: tour.title,
  summary: tour.summary,
  image: tour.image,
  price: tour.price,
  rating: tour.rating,
  detailUrl: tour.detailUrl || '/contact',
})

const normalizeExcursionCard = (tour) => ({
  id: tour.id,
  type: 'excursion',
  filterKey: tour.type,
  badge: tour.type === 'half' ? 'Half-day Excursions' : 'Full-day Excursions',
  title: tour.title,
  summary: tour.summary,
  image: tour.image,
  price: tour.price,
  rating: tour.rating,
  detailUrl: tour.detailUrl,
})

function ToursPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const tourCards = useMemo(() => {
    const excursionCards = zanzibarTours.map(normalizeExcursionCard)
    const safariCards = safariTours.map(normalizeSafariCard)
    return [...excursionCards, ...safariCards]
  }, [])

  const visibleCards = useMemo(() => {
    if (activeFilter === 'all') {
      return tourCards
    }

    return tourCards.filter((card) => card.filterKey === activeFilter)
  }, [activeFilter, tourCards])

  return (
    <>
      <PageMeta
        title="Tours"
        description="Browse Zanzibar excursions and safari packages in a modern card layout with quick filters."
      />

      <section className="page-hero page-hero--tours">
        <div className="container">
          <p className="section-tag">Tours & Safaris</p>
          <h1>Choose the Zanzibar escape or wildlife journey that fits your mood.</h1>
        </div>
      </section>

      <section className="section tours-format-section">
        <div className="container">
          <div className="tour-filter-shell">
            <div className="tour-chip-row">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  className={`tour-chip ${activeFilter === filter.key ? 'tour-chip--active' : ''}`}
                  type="button"
                  onClick={() => setActiveFilter(filter.key)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="tour-format-grid">
            {visibleCards.map((card) => (
              <article className="tour-format-card" key={card.id}>
                <div className="tour-format-card__media">
                  <img src={card.image} alt={card.title} />
                  <div className="tour-format-card__overlay">
                    <span className="tour-format-pill">{card.badge}</span>
                    <span className="tour-rating-pill">
                      <span className="tour-rating-pill__star">*</span>
                      {card.rating}
                    </span>
                  </div>
                </div>

                <div className="tour-format-card__body">
                  <h3>{card.title}</h3>
                  <p>{card.summary}</p>
                  <div className="tour-format-card__footer">
                    <strong>{card.price}</strong>
                    <a href={card.detailUrl} target="_blank" rel="noreferrer">
                      View Details
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ToursPage
