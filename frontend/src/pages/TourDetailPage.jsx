import { useParams } from 'react-router-dom'
import { tours } from '../data/tours'

const tourDetailContent = {
  1: {
    location: 'Mnemba Reef',
    groupSize: 'Max 16',
    reviews: '189 reviews',
    experiences: [
      'Snorkel the protected Mnemba Atoll lagoon',
      'Meet colorful reef fish and turtles',
      'Enjoy a guided reef tour with marine notes',
      'Sip sodas and light bites on the boat',
    ],
    includes: ['Roundtrip transfer', 'Snorkeling gear', 'Guide', 'Light lunch'],
  },
  2: {
    location: 'Stone Town',
    groupSize: 'Max 20',
    reviews: '142 reviews',
    experiences: [
      'Walk UNESCO alleys with a local guide',
      'Visit historic doors, mosques, and markets',
      'Discover stories from the Old Fort to the Planetarium',
      'Taste street food and aromatic spices',
    ],
    includes: ['Walking tour', 'Guide', 'Bottled water', 'Light snack'],
  },
  3: {
    location: 'Jozani Forest',
    groupSize: 'Max 18',
    reviews: '210 reviews',
    experiences: [
      'Step into Jozani’s mangrove boardwalk',
      'Spot the red colobus monkeys up close',
      'Stroll through a working spice farm',
      'Finish with Stone Town culture highlights',
    ],
    includes: ['Entrance fees', 'Lunch', 'Guide', 'Transport'],
  },
  4: {
    location: 'Safari Blue',
    groupSize: 'Max 30',
    reviews: '254 reviews',
    experiences: [
      'Cruise aboard a traditional dhow',
      'Snorkel at a crystal-clear sandbank',
      'Enjoy a seafood feast with local flavors',
      'Toast with a sunset drink before heading back',
    ],
    includes: ['Dhow cruise', 'Snorkeling gear', 'Seafood lunch', 'Soft drinks'],
  },
}

const defaultContent = {
  location: 'Zanzibar',
  groupSize: 'Max 10',
  reviews: '120 reviews',
  experiences: ['Cultural stories', 'Local guiding', 'Signature moments', 'Taste authentic food'],
  includes: ['Transport', 'Guide', 'Meals'],
}

function TourDetailPage() {
  const { tourId } = useParams()
  const tour = tours.find((entry) => String(entry.id) === String(tourId))
  const content = tourDetailContent[tour?.id] ?? defaultContent

  if (!tour) {
    return (
      <div className="tour-detail">
        <p className="tour-detail__missing">Tour not found. Please choose another experience.</p>
      </div>
    )
  }

  return (
    <section className="tour-detail">
      <div
        className="tour-detail__hero"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(4, 36, 46, 0.8), rgba(6, 77, 89, 0.6)), url(${tour.image})`,
        }}
      />

      <div className="tour-detail__info-bar">
        <div>📍 Location: {content.location}</div>
        <div>⏱ Duration: {tour.duration}</div>
        <div>👥 Group Size: {content.groupSize}</div>
        <div>⭐ Reviews: {content.reviews}</div>
      </div>

      <div className="tour-detail__container">
        <div className="tour-detail__content">
          <h1>{tour.title}</h1>
          <p>{tour.description}</p>

          <h2>Experience</h2>
          <ul>
            {content.experiences.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Included</h2>
          <ul>
            {content.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="tour-detail__booking">
          <h3>Tour Booking</h3>
          <p>
            <strong>Duration:</strong> {tour.duration}
          </p>
          <div className="tour-detail__price">{tour.price}</div>
          <button className="tour-detail__btn">Reserve Your Spot</button>
        </div>
      </div>
    </section>
  )
}

export default TourDetailPage
