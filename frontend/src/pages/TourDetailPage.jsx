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
    overview: `Your day starts with a morning pickup and a relaxed walk through Stone Town. You will explore the old streets, learn about the town’s history, culture, and how people lived and traded in the past, all before it gets crowded.

After that, you will visit a nearby spice farm where you will see how spices like cloves, cinnamon, cardamom, and nutmeg are grown and used. You will also smell and taste fresh spices during the tour.

At the end, enjoy a delicious Zanzibari lunch made with fresh ingredients from the farm before returning to your hotel.`,
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

Finish the day back in Stone Town, where a local guide leads you through winding lanes, markets, and landmarks that highlight the island's layered past.`,
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
    overview: `Start your trip from Fumba Fishing Village for a relaxing Blue Safari experience. Cruise across clear turquoise waters and stop at a quiet sandbank where you can relax and enjoy the peaceful surroundings.

Then go snorkeling in beautiful spots full of colorful fish and coral reefs. Later, head to Kwale Island, where you will enjoy a fresh seafood lunch prepared on the beach. You can also relax near the famous baobab tree before heading back to your hotel.`,
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
    overview: `Head south from Kizimkazi for a marine adventure around Pungume. The boat ride offers a strong chance of dolphin sightings, and you can dive into clear water to swim near them. After splashing in the reef, unwind on the island's white sand while enjoying a freshly prepared lunch beneath the shade.`,
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
    overview: `Start your day with a pickup and head to Jozani Chwaka Bay National Park, where your guide will take you on a nature walk through the forest and mangrove areas while spotting wildlife.

After that, continue to Kuza Cave for a refreshing swim in its clear natural water. Then enjoy some free time relaxing at Paje Beach.

End your day with a visit to The Rock Restaurant, where you can enjoy a meal with amazing ocean views before returning to your hotel.`,
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
    overview: `Spend a full day exploring Zanzibar's beautiful coastline with a mix of adventure and relaxation. Start at Maalum Cave, where you can swim in clear natural water in a calm and peaceful place.

Then visit Mtende Beach, known for its big rocks and quiet environment, perfect for relaxing. Continue to Paje Beach, where you can enjoy white sand, blue water, and a lively beach atmosphere.

End your day at The Rock Restaurant, where you can enjoy a meal with amazing ocean views before returning to your hotel.`,
    note: 'Extra charges for hotel pickup/drop-off apply.',
  },
  'safari-1': {
    location: 'Mikumi National Park Day Trip Safari',
    groupSize: 'Max 20',
    reviews: 'New package',
    experiences: [
      'Full-day safari from Zanzibar to Mikumi National Park',
      'Game drive with chances to see lions, elephants, giraffes, and zebras',
      'Stunning African landscapes and wildlife experience',
      'Professional safari guide throughout the trip',
      'Perfect one-day safari escape',
    ],
    includes: [
      'Return flight from Zanzibar to Mikumi',
      'All park entrance fees',
      'Safari game drive',
      'Bush lunch',
      'Professional driver/guide',
      'All taxes and VAT',
      'Hotel pick-up and drop-off',
    ],
    overview: `Early Morning Departure (5:00am)
Your day begins with an early morning transfer from your Zanzibar hotel to the airport, followed by a flight to Mikumi National Park. Upon arrival, your professional safari guide welcomes you and you immediately head into the park for a game drive.

Mikumi is home to lions, elephants, giraffes, zebras, buffaloes, and a wide variety of bird species, all playing out against open plains, acacia woodlands, and distant Uluguru Mountain views. After a few hours of spotting wildlife, pause for a bush lunch in the heart of the wilderness before resuming the safari in the afternoon.

Return to the airstrip in the late afternoon for your flight back to Zanzibar, closing the day with unforgettable memories of Tanzania’s wildlife and landscapes.`,
    note: 'Flight times and pickup schedules depend on seasonal availability.',
  },
  'half-1': {
    location: 'Stone Town',
    groupSize: 'Max 30',
    reviews: 'Varied reviews',
    experiences: [
      'Walk through historic streets',
      'Visit Forodhani Gardens and the Slave Memorial',
      'Explore Darajani Market',
    ],
    includes: ['Tour guide', 'Entrance fee', 'Mineral water'],
    overview: `Enjoy a 2–3 hour guided walk through Stone Town, exploring its narrow streets, historic buildings, and vibrant culture. Visit key landmarks like House of Wonders, Sultan's Palace, and Freddie Mercury House while learning about Zanzibar's rich history and cultural diversity.`,
    note: 'Pickup fees depend on hotel location.',
  },
  'half-2': {
    location: 'Spice Farm',
    groupSize: 'Max 30',
    reviews: 'Varied reviews',
    experiences: [
      'Walk through green spice farms with a local guide',
      'Smell, taste, and learn about a variety of spices',
      'Experience tropical plants and rainforest surroundings',
      'Shop for fresh spices to take home',
    ],
    includes: ['Guide services', 'Entrance fees', 'Tropical fruits', 'Drinking water', 'All government fees'],
    overview: `Immerse yourself in Zanzibar's spice heritage with a guided walk through lush plantations. During this approximately two-hour tour, discover, smell, and taste fresh spices such as turmeric, cinnamon, cloves, black pepper, and cardamom while learning how they are used in cooking, medicine, and local traditions.`,
    note: 'Hotel pick-up/drop-off available at extra cost depending on location. Optional spice lunch ($10 per person).',
  },
  'half-3': {
    location: 'Jozani Forest',
    groupSize: 'Max 25',
    reviews: 'Varied reviews',
    experiences: [
      "Visit Zanzibar's only national park",
      'See the rare red colobus monkeys up close',
      'Discover diverse wildlife and plant species',
      'Walk through forest paths and mangrove areas',
    ],
    includes: ['Professional tour guide', 'Entrance fees', 'All government taxes', 'Bottled mineral water'],
    overview: `Explore the natural beauty of Jozani Chwaka Bay National Park, Zanzibar's only national park and home to the rare red colobus monkeys found nowhere else in the world. Walk through lush forest trails, discover unique wildlife such as blue monkeys and elephant shrews, and experience the rich biodiversity of this protected ecosystem, including its fascinating mangrove forests.`,
    note: 'Hotel pick-up/drop-off available at extra cost depending on location.',
  },
  'half-4': {
    location: 'Nakupenda Sandbank',
    groupSize: 'Max 20',
    reviews: 'Varied reviews',
    experiences: [
      'Visit the beautiful Nakupenda Sandbank',
      'Swim, snorkel, and relax in clear turquoise waters',
      'Enjoy a peaceful and scenic environment',
      'Taste a fresh seafood BBQ with tropical fruits',
    ],
    includes: [
      'Professional tour guide',
      'Private boat transfer',
      'Seafood BBQ',
      'Snorkeling equipment',
      'Tropical fruits and soft drinks',
      'All taxes and entrance fees',
    ],
    overview: `Take a short boat ride from Stone Town to the stunning Nakupenda Sandbank, a beautiful stretch of white sand surrounded by crystal-clear turquoise waters. Known as "I love you" in Swahili, Nakupenda offers a peaceful escape where you can swim, relax under the sun, and enjoy the natural beauty of Zanzibar.

Spend your time exploring the shallow waters, snorkeling, or simply unwinding in this serene environment. Your experience is completed with a delicious seafood barbecue and fresh tropical fruits, making it a perfect day of relaxation and enjoyment.`,
    note: 'Hotel pick-up/drop-off available at extra cost depending on location.',
  },
  'half-5': {
    location: 'Prison Island',
    groupSize: 'Max 20',
    reviews: 'New package',
    experiences: [
      'Enjoy a short scenic boat ride from Stone Town',
      'See Aldabra giant tortoises and peacocks',
      'Explore the historic prison site',
      'Learn about the island’s history and culture',
    ],
    includes: [
      'Professional tour guide',
      'Entrance fees',
      'Marine conservation fees',
      'Private boat transfer',
      'Bottled mineral water',
    ],
    overview: `Take a short 20-minute boat ride from Stone Town to the beautiful Prison Island, surrounded by clear turquoise waters. Upon arrival, explore the island and meet the famous Aldabra giant tortoises, known as some of the largest tortoises in the world.

Discover the historic prison building dating back to the late 19th century and learn about its role in Zanzibar's history. Enjoy the peaceful environment while observing wildlife such as tortoises and peacocks up close.`,
    note: 'Hotel pick-up/drop-off available at extra cost depending on location.',
  },
  'half-6': {
    location: 'Sunset Cruise Tour',
    groupSize: 'Varies',
    reviews: 'Varied reviews',
    experiences: [
      'Cruise on a traditional wooden dhow or ngalawa',
      "Sail along Zanzibar's scenic coastline",
      'Enjoy a stunning sunset with colorful skies',
      'Relax on peaceful waters and capture memorable moments',
    ],
    includes: ['Traditional wooden boat (dhow/ngalawa)', 'All taxes and entrance fees'],
    overview: `Enjoy a magical half-day sunset cruise from 4:00 PM to 6:30 PM aboard a traditional wooden boat. Sail along Zanzibar's stunning coastline as you relax on calm waters and take in breathtaking ocean views.

Depending on your location, cruise past the beautiful beaches of Kendwa Beach and Nungwi Beach, the scenic Kae Funk Beach, or the iconic shoreline of Stone Town. Watch as the sun sets over the horizon, painting the sky with vibrant colors for a truly unforgettable experience.`,
    note: 'The hotel pick-up/drop-off price (extra) depends on hotel location.',
  },
  'half-7': {
    location: 'Blue Lagoon / Starfish',
    groupSize: 'Max 20',
    reviews: 'Varied reviews',
    experiences: [
      'Boat ride from Pingwe Beach to Blue Lagoon',
      'Snorkel among vibrant coral reefs and tropical fish',
      'Visit the starfish area for photos',
      'Swim and relax in calm, shallow waters',
    ],
    includes: [
      'Private boat',
      'Snorkeling equipment',
      'Tropical fruits and mineral water',
      'Professional tour guide',
      'All entrance fees and government charges',
    ],
    overview: `Start your day with a hotel pickup and transfer to Pingwe Beach near The Rock Restaurant, where your boat begins. Cruise across clear turquoise waters to the beautiful Blue Lagoon Zanzibar for an unforgettable marine experience.

Enjoy snorkeling in crystal-clear waters filled with colorful fish and coral reefs. You will also visit the famous starfish area, where you can observe and take photos of these unique sea creatures in their natural environment. The calm and shallow waters make this tour perfect for swimming, relaxing, and suitable for all ages.`,
    note: 'Hotel pick-up/drop-off available at extra cost depending on location.',
  },
  'half-8': {
    location: 'Mnemba Atoll Dolphin & Snorkeling Tour',
    groupSize: 'Max 25',
    reviews: 'Varied reviews',
    experiences: [
      'Cruise to Mnemba Atoll from Muyuni Beach',
      'High chance of spotting and swimming with dolphins',
      'Snorkel among coral reefs and tropical fish',
      'Optional sandbank and starfish experience (tide dependent)',
    ],
    includes: [
      'Private boat',
      'Snorkeling equipment',
      'Tropical fruits',
      'Drinking water',
      'All taxes and fees',
      'Professional tour guide',
    ],
    overview: `Begin your adventure with a hotel pickup and transfer to Muyuni Beach, where your boat departs toward Mnemba Atoll. Cruise across crystal-clear waters with a high chance of spotting dolphins, and if conditions allow, you may swim alongside them for a truly unforgettable experience.

At Mnemba, enjoy snorkeling in clear waters filled with vibrant coral reefs and colorful tropical fish. Please note that Mnemba Island is privately owned, so the tour takes place around the island without landing on it.

Depending on the tides, you may also visit a nearby sandbank to relax, swim, and spot starfish in shallow waters. During high tide, these areas may be covered by water.`,
    note: 'Hotel pick-up/drop-off available at extra cost depending on location.',
  },
  'half-9': {
    location: 'Snorkeling Tour Near Tumbatu Island',
    groupSize: 'Max 20',
    reviews: 'Varied reviews',
    experiences: [
      'Cruise to Tumbatu Island through clear turquoise waters',
      'Snorkel among colorful coral reefs and tropical fish',
      'Relax in a peaceful and less crowded environment',
      'Enjoy the natural beauty of Zanzibar\'s coastline',
    ],
    includes: [
      'Private boat',
      'Snorkeling equipment',
      'Tropical fruits',
      'Drinking water',
      'Professional tour guide',
      'All taxes and fees',
    ],
    overview: `Enjoy a relaxing day exploring the beautiful waters around Tumbatu Island. Cruise across clear turquoise sea to one of Zanzibar's best snorkeling spots.

Dive into the ocean and discover colorful coral reefs and tropical fish in a calm and peaceful environment. This tour is perfect for both beginners and experienced swimmers.

After snorkeling, relax on the boat or nearby beach, enjoy the fresh sea breeze, and take in the natural beauty of this quiet and less crowded area.`,
    note: 'Hotel pick-up/drop-off available at extra cost depending on location.',
  },
};
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
      >
        <div className="tour-detail__hero-content container">
          <h1>{tour.title}</h1>
        </div>
      </div>

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
