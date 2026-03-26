import { useMemo, useState } from 'react'
import PageMeta from '../components/PageMeta'
import { safariTours, zanzibarTours } from '../data/tours'
import homeHeroImage from '../assets/image.jpeg'
import TourFormatCard from '../components/TourFormatCard'

const filters = [
  { key: 'all', label: 'All' },
  { key: 'half', label: 'Half-day Excursions' },
  { key: 'full', label: 'Full-day Excursions' },
  { key: 'zanzibar', label: 'Safaris From Zanzibar' },
  { key: 'arusha', label: 'Safaris From Arusha' },
]

const normalizeSafariCard = (tour) => ({
  id: tour.id,
  type: 'safari',
  filterKey: tour.origin === 'From Arusha' ? 'arusha' : 'zanzibar',
  badge: tour.origin,
  title: tour.title,
  summary: tour.summary,
  image: tour.image,
  price: tour.price,
  rating: tour.rating,
  detailUrl: `/tours/${tour.id}`,
})

const normalizeExcursionCard = (tour) => ({
  id: tour.id,
  type: 'excursion',
  filterKey: tour.type,
  badge: tour.type === 'half' ? 'Half-day' : 'Full-day',
  title: tour.title,
  summary: tour.summary,
  image: tour.image,
  price: tour.price,
  rating: tour.rating,
  detailUrl: `/tours/${tour.id}`,
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
        description="Browse Zanzibar excursions and safari packages through a polished card layout with quick filters."
      />

      <section
        className="page-hero page-hero--tours"
        style={{ '--tours-hero-image': `url(${homeHeroImage})` }}
      >
        <div className="page-hero__content container">
          <h1>Explore Zanzibar Like Never Before
From ocean adventures to wildlife safaris, discover it all.</h1>
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
              <TourFormatCard card={card} key={card.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ToursPage
