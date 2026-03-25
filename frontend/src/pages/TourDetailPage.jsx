import { useParams, useNavigate } from 'react-router-dom'
import { safariTours, tours, zanzibarTours } from '../data/tours'

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
    overview: `A driver collects you at the hotel and transports you to a fragrant spice estate for a guided walk through plots of cloves, cinnamon, ginger, vanilla, and cardamom. You can touch, smell, and sample each plant while your guide explains its local uses.

The tour then transforms into a cooking session where local chefs help you prepare Swahili favorites like Pilau, kebabs, and spiced vegetables using the ingredients you just inspected. End the experience by sharing the meal you helped create and hearing more about Zanzibar's food heritage.`,
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
    overview: `The morning begins with a pickup for a brisk walk through Stone Town’s historic quarter, where you learn about the city’s trade routes, architecture, and cultural fusion before the crowds arrive.

After the urban stroll, you visit a nearby spice plantation to see how cloves, cardamom, cinnamon, and nutmeg are cultivated and used in local kitchens and remedies, complete with fragrant tasting samples.

The experience ends with a hearty Zanzibari lunch cooked using the farm’s produce, giving you a flavorful farewell before returning to your accommodations.`,
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
  'full-4': {
    location: 'Stone Town, Prison Island & Nakupenda',
    groupSize: 'Max 20',
    reviews: '350 reviews',
    experiences: [
      'Sail to Prison Island and meet the gentle Aldabra tortoises',
      'Spend time on Nakupenda Sandbank, swimming, sunbathing, and snorkeling',
      'Enjoy a seafood barbecue and tropical sides by the turquoise water',
      'Return to Stone Town for an easy-going cultural walk through the old quarter',
    ],
    includes: [
      'Boat transfers to Prison Island and Nakupenda',
      'Admission to Prison Island and marine conservation fees',
      'Seafood barbecue lunch with tropical fruits',
      'Guided Stone Town walk',
      'Mineral water',
      'All applicable taxes',
    ],
    overview: `Experience the best of Zanzibar with a full-day blend of history, beach time, and culture. Begin with a boat ride to Prison Island to observe the impressive Aldabra tortoise population and learn about the island's historic prison.

Then relax at Nakupenda Sandbank, lounging on pearly sand, cooling off in clear shallows, and savoring a freshly grilled seafood lunch served nearby.

Finish the day back in Stone Town, where a local guide leads you through winding lanes, markets, and landmarks that highlight the island’s layered past.`,
    note: 'Hotel pickup/drop-off charges depend on your accommodation.',
  },
  'full-5': {
    location: 'South West Coast',
    groupSize: 'Max 25',
    reviews: '102 reviews',
    experiences: [
      'Cruise from Fumba aboard a traditional dhow',
      'Relax on an untouched sandbank and swim in calm shallows',
      'Snorkel in vibrant reefs near Kwale Island',
      'Feast on a seafood barbecue lunch before visiting the iconic baobab tree',
    ],
    includes: [
      'Dhow cruise charter',
      'Snorkeling gear',
      'Seafood barbecue with tropical fruits',
      'Soft drinks and mineral water',
      'Marine conservation fees and taxes',
    ],
    overview: `Set sail from Fumba Fishing Village for a classic Blue Safari day. Glide across turquoise water, unwind on a secluded sandbank, then plunge into colorful snorkeling spots teeming with tropical life. Later, anchor near Kwale Island for a fire-grilled seafood lunch and toast the day beside Zanzibar’s famous baobab before heading home.`,
    note: 'Hotel pickup/drop-off fees vary by hotel location.',
  },
  'full-6': {
    location: 'Southern Coast',
    groupSize: 'Max 15',
    reviews: '110 reviews',
    experiences: [
      'Depart from Kizimkazi and scan the horizon for playful dolphins',
      'Swim alongside the pod when conditions allow',
      'Snorkel the lively reefs around Pungume Island',
      'Relax on the soft beach and enjoy a shaded picnic lunch',
    ],
    includes: [
      'Roundtrip boat transfers',
      'Snorkeling equipment',
      'Seafood barbecue lunch',
      'Tropical fruits and water',
      'Marine park fees',
    ],
    overview: `Head south from Kizimkazi for a marine adventure around Pungume. The boat ride offers a strong chance of dolphin sightings, and you can dive into clear water to swim near them. After splashing in the reef, unwind on the island’s white sand while enjoying a freshly prepared lunch beneath the shade.`,
    note: 'Pickup and drop-off surcharges are based on hotel location.',
  },
  'full-7': {
    location: 'Mnemba Atoll & Kendwa',
    groupSize: 'Max 30',
    reviews: '200 reviews',
    experiences: [
      'Snorkel the Mnemba Atoll lagoon where colorful fish abound',
      'Spot dolphins en route and float beside them if the tide allows',
      'Visit the Turtle Aquarium for a guaranteed encounter and swim',
      'End with free time at Kendwa Beach to swim or take in sunset vibes',
    ],
    includes: [
      'Private boat for Mnemba snorkeling',
      'Snorkeling gear and guide',
      'Lunch (seafood BBQ, chicken, or vegetarian options)',
      'Tropical fruits and soft drinks',
      'Aquarium access and government fees',
    ],
    overview: `Your day starts from Muyuni Beach with a transfer to Mnemba Atoll, where you snorkel among vibrant corals and keep watch for dolphins. The tour then swings by the Turtle Aquarium for up-close encounters before finishing with leisure time at the stunning Kendwa Beach.`,
    note: 'Hotel pickup/drop-off is extra and depends on location.',
  },
  'full-8': {
    location: 'East Coast & Stone Town',
    groupSize: 'Max 20',
    reviews: '120 reviews',
    experiences: [
      'Walk through Jozani Forest to see red colobus monkeys and mangrove life',
      'Swim in the clear pool at Kuza Cave',
      'Spend time soaking up the vibe at Paje Beach',
      'Dine at the Rock Restaurant with ocean views',
    ],
    includes: [
      'Guided services for each stop',
      'Entrances to Jozani, Kuza Cave, and Rock Restaurant',
      'Lunch or dinner with drinks',
      'Drinking water',
      'All government fees',
    ],
    overview: `Begin with a scenic pickup to Jozani Forest, where your guide leads a nature walk through mangroves and wildlife zones. Continue east to Kuza Cave for a refreshing swim, then enjoy free time at Paje Beach. Cap the day with a table at the famed Rock Restaurant perched above the sea.`,
    note: 'Pickup/drop-off fees change based on hotel zone.',
  },
  'full-9': {
    location: 'East Coast Trail',
    groupSize: 'Max 30',
    reviews: '150 reviews',
    experiences: [
      'Swim in the crystal-clear spring inside Maalum Cave',
      'Relax along the peaceful shores of Mtende Beach',
      'Experience the lively atmosphere at Paje Beach',
      'Dine with panoramic ocean views at the Rock Restaurant',
    ],
    includes: [
      'Entrance fees to Maalum Cave and Mtende Beach',
      'Guided service throughout',
      'Lunch or supper at the Rock Restaurant',
      'Mineral water',
      'All government fees',
    ],
    overview: `Enjoy a day that blends cave swimming, quiet beaches, and iconic dining. Start at Maalum Cave’s freshwater pool, head to Mtende for seaside serenity, wander Paje Beach’s white sand, and finish with breathtaking coastal cuisine at the Rock Restaurant.`,
    note: 'Extra charges for hotel pickup/drop-off apply.',
  },
  'half-1': {
    location: 'Stone Town',
    groupSize: 'Max 30',
    reviews: 'Varied reviews',
    experiences: [
      'Meander through Stone Town’s historic alleys',
      'See the House of Wonders, Sultan’s Palace, and Freddie Mercury House',
      'Browse Darajani Market and the Forodhani waterfront',
      'Hear stories of commerce, architecture, and cultural fusion',
    ],
    includes: ['Guided walk', 'Entrance fee at Slave Memorial Market', 'Mineral water'],
    overview: `Spend 2-3 hours with a guide who explains Stone Town’s layered history, from its stately palaces to its bustling markets and famous music heritage.`,
    note: 'Pickup fees depend on hotel location.',
  },
  'half-2': {
    location: 'Spice Farm',
    groupSize: 'Max 30',
    reviews: 'Varied reviews',
    experiences: [
      'Join a two-hour walk through lush spice plantations',
      'Smell and taste turmeric, cinnamon, cardamom, cloves, and nutmeg',
      'Learn how spices are harvested and used locally',
      'Shop for fresh spices to take home',
    ],
    includes: ['Guide services', 'Spice tasting', 'Tropical fruits', 'Drinking water', 'Entrance fees'],
    overview: `Immerse yourself in Zanzibar’s spice heritage with an expert guide who leads you through aromatic fields and explains traditional uses of each plant.`,
    note: 'Hotel pickup/drop-off charges vary by location.',
  },
  'half-3': {
    location: 'Jozani Forest',
    groupSize: 'Max 25',
    reviews: 'Varied reviews',
    experiences: [
      'Walk the boardwalk through Jozani’s mangrove habitats',
      'Spot the red colobus monkeys up close',
      'See other forest wildlife such as blue monkeys and elephant shrews',
      'Enjoy guided storytelling about the forest ecosystem',
    ],
    includes: ['Guide', 'Entrance fees', 'Drinking water'],
    overview: `Visit Zanzibar’s only national park to witness unique primates, mangroves, and biodiversity on a peaceful half-day hike.`,
    note: 'Transport surcharges apply depending on your hotel.',
  },
  'half-4': {
    location: 'Nakupenda Sandbank',
    groupSize: 'Max 20',
    reviews: 'Varied reviews',
    experiences: [
      'Boat out to Nakupenda for white-sand beach time',
      'Swim, snorkel, and relax with beachfront snacks',
      'Enjoy a light seafood bite with tropical fruit',
    ],
    includes: ['Private boat', 'Snacks', 'Soft drinks', 'Guide', 'Entrance fees'],
    overview: `Take a short cruise from Stone Town to Nakupenda Sandbank for swimming, snorkeling, and an alfresco snack while surrounded by azure water.`,
    note: 'Pickup/drop-off fees depend on hotel.',
  },
  'half-5': {
    location: 'Prison Island',
    groupSize: 'Max 20',
    reviews: 'New package',
    experiences: [
      'Boat ride from Stone Town to Prison Island',
      'See Aldabra giant tortoises and peacocks',
      'Tour the historic prison facility and learn its stories',
    ],
    includes: ['Boat transfer', 'Entrance fees', 'Marine conservation fee', 'Mineral water'],
    overview: `Embark on a quick boat journey to Prison Island to meet giant tortoises, enjoy the island’s calm atmosphere, and explore its colonial prison buildings.`,
    note: 'Additional pickup costs apply per hotel location.',
  },
  'half-6': {
    location: 'Coastal Sunset',
    groupSize: 'Varies',
    reviews: 'Varied reviews',
    experiences: [
      'Set sail aboard a traditional dhow between 4 PM and 6:30 PM',
      'Cruise along scenic coasts tailored to your pickup area',
      'Relax on deck while the sky fills with sunset color',
    ],
    includes: ['Dhow cruise', 'Soft drinks', 'Taxes'],
    overview: `Enjoy a peaceful afternoon on a wooden boat, drifting along Zanzibar’s shores while the sun dips below the horizon.`,
    note: 'Hotel transfer fees are extra.',
  },
  'half-7': {
    location: 'Blue Lagoon / Starfish',
    groupSize: 'Max 20',
    reviews: 'Varied reviews',
    experiences: [
      'Ride from Pingwe Beach to the Blue Lagoon area',
      'Snorkel among bright coral and tropical fish',
      'Visit the shallow starfish lagoon for photos and calm waters',
      'Float and rest in the sheltered lagoon afterwards',
    ],
    includes: ['Private boat', 'Snorkeling gear', 'Tropical fruits', 'Mineral water', 'Guide', 'Entrance fees'],
    overview: `Cruise from Pingwe to the tranquil Blue Lagoon for snorkeling and starfish viewing, then relax in its sheltered waters before returning to shore.`,
    note: 'Pickup/drop-off charges depend on hotel location.',
  },
  'half-8': {
    location: 'Mnemba Snorkeling',
    groupSize: 'Max 25',
    reviews: 'Varied reviews',
    experiences: [
      'Transfer from Muyuni Beach to Mnemba Atoll',
      'Snorkel in crystal-clear water with chances to see dolphins',
      'Pause at a sandbank for sunbathing and starfish spotting (tide dependent)',
    ],
    includes: ['Boat', 'Snorkeling gear', 'Tropical fruits', 'Drinking water', 'Taxes'],
    overview: `Spend a half-day exploring the marine-rich Mnemba Atoll, with dolphin watching, reef snorkeling, and optional sandbank visits when the water is calm.`,
    note: 'Extra hotel pickup fees may apply.',
  },
  'half-9': {
    location: 'Tumbatu Island',
    groupSize: 'Max 20',
    reviews: 'Varied reviews',
    experiences: [
      'Cruise to Tumbatu Island through crystal waters',
      'Dive and snorkel along vibrant coral reefs',
      'Chill on the quiet beach and appreciate the secluded scenery',
    ],
    includes: ['Private boat', 'Snorkeling gear', 'Tropical fruits', 'Drinking water', 'Guide', 'Fees'],
    overview: `Discover a secluded snorkeling spot near Tumbatu, where calm seas, colorful reefs, and serene beaches offer an intimate marine day trip.`,
    note: 'Hotel transfer surcharges depend on location.',
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
  const allTours = [...tours, ...zanzibarTours, ...safariTours]
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
