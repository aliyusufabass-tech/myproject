import { useParams, useNavigate } from 'react-router-dom'
import { safariTours, tours } from '../data/tours'

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
      "Step into Jozani's mangrove boardwalk",
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
  'full-1': {
    location: 'Spice Farm',
    groupSize: 'Max 30',
    reviews: '234 reviews',
    experiences: [
      'Cooking of Zanzibar cuisines from scratch',
      'Having lunch after cooking',
      'Guided walk through a Zanzibar spice farm',
      'Touch, smell, and taste fresh spices with local experts',
      'Learn to cook traditional Swahili dishes',
      'Enjoy the meal you prepared in true Zanzibari style',
    ],
    includes: [
      'Guided tour of a Zanzibar spice plantation',
      'Spice tasting and hands-on learning experience',
      'Cooking class with professional local chefs',
      'All fresh ingredients and cooking materials',
      'Traditional Zanzibari lunch prepared during the class',
      'Cultural insights, storytelling, and recipe sharing',
      'Bottled water during the experience',
    ],
    overview: `Your experience begins with a convenient hotel pickup, followed by a scenic drive to one of Zanzibar's renowned spice farms. Upon arrival, you'll embark on a guided walking tour through the lush, aromatic plantations. Discover how various spices and tropical fruits such as cloves, cinnamon, turmeric, ginger, vanilla, nutmeg, black pepper, lemongrass, and cardamom are grown, harvested, and used in everyday life. You'll touch, smell, and taste these spices while learning about their culinary, medicinal, and cosmetic benefits directly from local experts.

After exploring the spice farm, your experience transitions into an interactive Zanzibar Cooking Class, where you'll use the same freshly harvested spices to prepare authentic Swahili and Zanzibari dishes. Guided by skilled local chefs, you'll learn step-by-step how to cook traditional meals such as Zanzibar Pilau, Kebab, Ndizi Mbivu, and Mboga Mboga. Finally, enjoy the delicious meal you've prepared in true Zanzibari style.`,
  },
  'full-2': {
    location: 'Stone Town & Spice Farm',
    groupSize: 'Max 30',
    reviews: '57 reviews',
    experiences: [
      'Start your day in Stone Town in the cool morning hours',
      'Explore historic streets and admire ancient buildings',
      'Learn how Zanzibar commerce shaped trade across East Africa',
      'Visit a spice farm and see how cloves, cinnamon, cardamom, and nutmeg grow',
      'Enjoy a traditional Zanzibari lunch prepared with farm-fresh spices',
    ],
    includes: [
      "Tour guide's commission",
      'All government taxes',
      'Entrance fees to Stone Town Slave Museum and Spice Farm',
      'Traditional Zanzibari lunch with local food',
      'Bottled water during the tour',
      'Transfer between Stone Town and the Spice Farm',
    ],
    overview: `Start your day with a convenient hotel pickup, then head to Stone Town in the cool morning hours, the perfect time to explore while avoiding the midday heat and crowds. Wander through its historic streets, ancient buildings, and bustling markets, as you learn about the town’s rich heritage and vibrant culture.

Next, continue to a spice farm, where you’ll stroll through lush gardens filled with clove, cinnamon, cardamom, and nutmeg trees. Discover how these spices are grown, harvested, and used in local cuisine, while enjoying the aromatic scents that earned Zanzibar its title as the Spice Island.

Your tour concludes with a traditional Zanzibari lunch, lovingly prepared using fresh ingredients and spices from the farm, offering a true taste of Zanzibar.`,
  },
  'full-3': {
    location: 'Jozani Forest, Spice Farm & Stone Town',
    groupSize: 'Max 30',
    reviews: '118 reviews',
    experiences: [
      'Explore the lush Jozani Forest and spot the rare Red Colobus monkeys',
      'Visit aromatic Spice Farms and enjoy a traditional spiced lunch with tropical fruits',
      'Discover Stone Town landmarks like the House of Wonders, Freddie Mercury House, and Old Fort',
      'Browse Spice Market stories and reflect at the Slave Memorial Market',
    ],
    includes: [
      'Tour guide services',
      'Entrance fees to Jozani Forest, Spice Farm, and Old Slave Museum',
      'Lunch of local Zanzibari cuisine at the Spice Farm',
      'Drinking water',
      'All government fees',
    ],
    overview: `Your day begins with a hotel pickup and a scenic drive to Jozani Forest, where you will enjoy a guided walk through the natural habitat of the rare Red Colobus monkeys, mangrove forests, and rich biodiversity.

Next, head to the Spice Farms to explore Zanzibar's aromatic spices and tropical fruits. Learn how spices are grown and used in local culture, then enjoy a traditional spiced lunch infused with fresh, natural flavors.

In the afternoon, journey to Stone Town for a guided historical tour through its winding streets and iconic landmarks such as the House of Wonders, Sultan's Palace, Freddie Mercury House, Old Fort, and Darajani Market. Discover the mix of cultures, architecture, and stories that make Stone Town a UNESCO World Heritage Site.`,
  },
}
const defaultContent = {
  location: 'Zanzibar',
  groupSize: 'Max 10',
  reviews: '120 reviews',
  experiences: ['Cultural stories', 'Local guiding', 'Signature moments', 'Taste authentic food'],
  includes: ['Transport', 'Guide', 'Meals'],
}

const createFallbackContent = (tour) => ({
  location: tour.origin ?? defaultContent.location,
  groupSize: tour.maxGuests ?? defaultContent.groupSize,
  reviews: tour.reviews ?? defaultContent.reviews,
  experiences: tour.tags?.length ? tour.tags : defaultContent.experiences,
  includes: tour.includes ?? defaultContent.includes,
})

function TourDetailPage() {
  const { tourId } = useParams()
  const allTours = [...tours, ...safariTours]
  const tour = allTours.find((entry) => String(entry.id) === String(tourId))
  const navigate = useNavigate()
  const handleReserve = () => {
    if (tour) {
      navigate(`/booking/${tour.id}`)
    }
  }

  if (!tour) {
    return (
      <div className="tour-detail">
        <p className="tour-detail__missing">Tour not found. Please choose another experience.</p>
      </div>
    )
  }

  const staticContent = tourDetailContent[tour.id]
  const content = staticContent ?? createFallbackContent(tour)
  const description = staticContent?.overview || tour.description || tour.summary || ''

  return (
    <section className="tour-detail">
      <div
        className="tour-detail__hero"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(4, 36, 46, 0.8), rgba(6, 77, 89, 0.6)), url(${tour.image})`,
        }}
      />

      <div className="tour-detail__info-bar">
        <div>Location: {content.location}</div>
        <div>Duration: {tour.duration}</div>
        <div>Group Size: {content.groupSize}</div>
        <div>Reviews: {content.reviews}</div>
      </div>

      <div className="tour-detail__container">
        <div className="tour-detail__content">
          <h1>{tour.title}</h1>
          {description && (
            <>
              <h2>Tour Overview</h2>
              <p>{description}</p>
            </>
          )}

          <h2>Tour Highlights</h2>
          <ul>
            {content.experiences.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Price Includes</h2>
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
          <button className="tour-detail__btn" type="button" onClick={handleReserve}>
            Reserve Your Spot
          </button>
        </div>
      </div>
    </section>
  )
}

export default TourDetailPage
