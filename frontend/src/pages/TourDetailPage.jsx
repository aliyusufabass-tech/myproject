import { useMemo, useRef } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { safariTours, tours, zanzibarTours, galleryImages as sharedGalleryImages } from '../data/tours'
import lionFamily from '../assets/46.jpeg'
import giraffePair from '../assets/47.jpeg'
import tarangireHerd from '../assets/62.jpeg'
import wildebeestMigration from '../assets/64.jpeg'
import mikumiLions from '../assets/48.jpeg'
import mikumiGiraffes from '../assets/49.jpeg'
import mikumiHerd from '../assets/54.jpeg'
import mikumiGiraffeGroup from '../assets/55.jpeg'
import mikumiRhino from '../assets/57.jpeg'
import selousElephants from '../assets/50.jpeg'
import selousRhinos from '../assets/51.jpeg'
import selousHerd from '../assets/52.jpeg'
import selousBoat from '../assets/53.jpeg'
import spiceCookingGallery1 from '../assets/1.jpeg'
import spiceCookingGallery2 from '../assets/2..jpeg'
import spiceCookingGallery3 from '../assets/3..jpeg'
import spiceCookingGallery4 from '../assets/4..jpeg'
import spiceFarmGuide from '../assets/29.jpeg'
import spiceFarmStonetownImage from '../assets/Spice Farm and Stonetown.jpeg'
import stoneTownGallery1 from '../assets/27.jpeg'
import stoneTownGallery2 from '../assets/background.jpeg'
import stoneTownGallery3 from '../assets/28.jpeg'
import stoneTownGallery4 from '../assets/spice-stonetown-4.jpeg'
import jozaniWalkway from '../assets/5.jpeg'
import jozaniMangroves from '../assets/6.jpeg'
import jozaniMonkeys from '../assets/30.jpeg'
import jozaniColobus from '../assets/jonzaniforest2.jpeg'
import turquoiseSandbankA from '../assets/9.jpeg'
import nakupendaSandbank2 from '../assets/13.jpeg'
import nakupendaAerial1 from '../assets/8.jpeg'
import nakupendaAerial2 from '../assets/9.jpeg'
import stoneTownMarket from '../assets/jozani-2.jpeg'
import prisonTortoise from '../assets/nakupenda-4.jpeg'
import prisonIslandAerial from '../assets/31.jpeg'
import prisonIslandPath from '../assets/32.jpeg'
import prisonIslandWharf from '../assets/33.jpeg'
import prisonIslandMain from '../assets/Prison island.jpeg'
import blueSafariLagoon from '../assets/12.jpeg'
import blueSafariSnorkel from '../assets/14.jpeg'
import blueSafariDhow from '../assets/16.jpeg'
import pungumeSnorkelFish from '../assets/38.jpeg'
import pungumeDolphins from '../assets/image 2.jpeg'
import mnembaDolphins from '../assets/Mnemba Snorkeling and Dolphins.jpeg'
import nakupendaSandbankImage from '../assets/Nakupenda Sandbank.jpeg'
import nakupendaIslandMarket from '../assets/Nakupenda Sandbank, Prison Island and Stonetown.jpeg'
import nakupendaSandbankScene1 from '../assets/8.jpeg'
import nakupendaSandbankScene2 from '../assets/9.jpeg'
import nakupendaSandbankScene3 from '../assets/Nakupenda Sandbank, Prison Island and Stonetown.jpeg'
import mnembaDolphins2 from '../assets/40.jpeg'
import tumbatuBoat from '../assets/17.jpeg'
import tumbatuReef1 from '../assets/41.jpeg'
import tumbatuReef2 from '../assets/42.jpeg'
import tumbatuReef3 from '../assets/43.jpeg'
import tumbatuScene4 from '../assets/44.jpeg'
import blueLagoonStarfish from '../assets/39.jpeg'
import blueLagoonScene1 from '../assets/16.jpeg'
import blueLagoonScene2 from '../assets/20.jpeg'
import blueLagoonScene3 from '../assets/38.jpeg'
import mnembaScene1 from '../assets/14.jpeg'
import mnembaScene2 from '../assets/20.jpeg'
import mnembaScene3 from '../assets/38.jpeg'
import mnembaScene4 from '../assets/Mnemba Snorkeling and Dolphins.jpeg'
import kuzaCaveEntry from '../assets/22.jpeg'
import rockRestaurantHuts from '../assets/23.jpeg'
import pajeBeachKites from '../assets/24.jpeg'
import mtendeAccess from '../assets/25.jpeg'
import maalumCaveEntrance from '../assets/26.jpeg'
import sunsetDhowImage from '../assets/Sunset Dhow Cruise.jpeg'
import sunsetDhowScene1 from '../assets/34.jpeg'
import sunsetDhowScene2 from '../assets/35.jpeg'
import sunsetDhowScene3 from '../assets/36.jpeg'
import sunsetDhowScene4 from '../assets/37.jpeg'
import serengetiFlamingos from '../assets/90.jpeg'
import tarangireFlamingos from '../assets/90.jpeg'
import tarangireRhino from '../assets/92.jpeg'
import tarangireZebraFlamingos from '../assets/93.jpeg'
import tarangireStream from '../assets/94.jpeg'
import serengetiRhino from '../assets/92.jpeg'
import serengetiWaterhole from '../assets/93.jpeg'
import serengetiElephantHerd from '../assets/94.jpeg'
import tarangireElephants from '../assets/54.jpeg'
import tarangireZebraHerd from '../assets/55.jpeg'
import tarangireView from '../assets/61.jpeg'
import tarangireHerdScene from '../assets/63.jpeg'
import serengetiHerd from '../assets/54.jpeg'
import serengetiElephants from '../assets/58.jpeg'
import serengetiLeopard from '../assets/59.jpeg'
import serengetiGiraffes from '../assets/56.jpeg'
import BookingForm from '../components/BookingForm'

const sunsetDhow1 = sunsetDhowScene1
const sunsetDhow2 = sunsetDhowScene2
const sunsetDhow3 = sunsetDhowScene3
const sunsetDhow4 = sunsetDhowScene4

const blueLagoonSnorkel1 = blueLagoonScene1
const blueLagoonSnorkel2 = blueLagoonScene2
const blueLagoonSnorkel3 = blueLagoonScene3
const mnembaSnorkel1 = mnembaScene1
const mnembaSnorkel2 = mnembaScene2
const mnembaSnorkel3 = mnembaScene3
const mnembaSnorkel4 = mnembaScene4

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
    gallery: [
      spiceCookingGallery1,
      spiceCookingGallery2,
      spiceCookingGallery3,
      spiceCookingGallery4,
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
    gallery: [
      spiceCookingGallery1,
      spiceCookingGallery4,
      stoneTownGallery1,
      stoneTownGallery2,
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
    gallery: [
      spiceCookingGallery1,
      jozaniWalkway,
      jozaniMangroves,
      stoneTownGallery2,
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
    gallery: [
      nakupendaAerial1,
      nakupendaAerial2,
      nakupendaSandbankImage,
      nakupendaIslandMarket,
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
    gallery: [
      turquoiseSandbankA,
      blueSafariLagoon,
      blueSafariSnorkel,
      blueSafariDhow,
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
    gallery: [
      pungumeSnorkelFish,
      pungumeDolphins,
      mnembaDolphins,
      nakupendaSandbankImage,
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
    gallery: [
      pungumeSnorkelFish,
      mnembaDolphins2,
      pungumeDolphins,
      mnembaDolphins,
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
    gallery: [
      jozaniMangroves,
      kuzaCaveEntry,
      rockRestaurantHuts,
      pajeBeachKites,
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
    gallery: [
      maalumCaveEntrance,
      mtendeAccess,
      pajeBeachKites,
      rockRestaurantHuts,
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
    gallery: [lionFamily, giraffePair, mikumiLions, mikumiGiraffes],
    overview: `Early Morning Departure (5:00am)
Your day begins with an early morning transfer from your Zanzibar hotel to the airport, followed by a flight to Mikumi National Park. Upon arrival, your professional safari guide welcomes you and you immediately head into the park for a game drive.

Mikumi is home to lions, elephants, giraffes, zebras, buffaloes, and a wide variety of bird species, all playing out against open plains, acacia woodlands, and distant Uluguru Mountain views. After a few hours of spotting wildlife, pause for a bush lunch in the heart of the wilderness before resuming the safari in the afternoon.

Return to the airstrip in the late afternoon for your flight back to Zanzibar, closing the day with unforgettable memories of Tanzania’s wildlife and landscapes.`,
    note: 'Flight times and pickup schedules depend on seasonal availability.',
  },
  'safari-2': {
    location: 'Selous Game Reserve Day Trip Safari',
    groupSize: 'Max 20',
    reviews: 'New package',
    experiences: [
      'Full-day safari in one of Africa\'s largest wildlife reserves',
      'Chances to see elephants, lions, giraffes, hippos, and more',
      'Scenic bush lunch surrounded by wilderness',
      'Explore diverse landscapes with a professional guide',
    ],
    includes: [
      'Return flight from Zanzibar to Selous',
      'All park fees and activities',
      'Bush lunch',
      'Professional driver/guide',
      'All taxes and VAT',
      'Hotel pick-up and drop-off',
    ],
    gallery: [selousElephants, selousRhinos, selousHerd, mikumiLions],
    overview: `Early Morning Departure (4:30 AM)
Your guide picks you up from the hotel and transfers you to Zanzibar Airport for the flight to Selous Game Reserve. After the short flight, you meet your professional safari guide and begin your wildlife adventure.

Morning Game Drive (7:00 AM – 12:00 PM)
Roam through Selous' varied habitats—open plains, riverine forests, and lagoon areas—looking for elephants, lions, giraffes, hippos, crocodiles, and abundant birdlife while your guide shares local knowledge.

Lunch in the Bush
Pause for a bush lunch in a scenic clearing before continuing with afternoon activities.

Afternoon Safari & Optional Boat Safari
Choose between another game drive or an optional boat safari along the Rufiji River to discover wildlife from a different perspective.

Return to Zanzibar (Evening Flight)
Transfer back to the airstrip for the evening flight to Zanzibar, ending the day with unforgettable memories of Selous Game Reserve.`,
    note: 'All times are approximate and may change depending on flight schedules or park conditions.',
  },
  'safari-3': {
    location: 'Selous Game Reserve 2 Days / 1 Night',
    groupSize: 'Max 20',
    reviews: 'New package',
    experiences: [
      'Scenic flight from Zanzibar to Selous Game Reserve',
      'Full-day safari with chances to see elephants, lions, giraffes, and more on Day 1',
      'Sunrise game drive on Day 2',
      'Overnight stay in a safari lodge or camp',
    ],
    includes: [
      'Return flights from Zanzibar to Selous',
      'All safari game drives (4x4 vehicle)',
      'Professional safari guide',
      'Park fees and conservation charges',
      'Lunch (Day 1) and breakfast (Day 2)',
      '1-night accommodation in lodge/camp',
      'Bottled drinking water',
      'Airstrip and hotel transfers',
      'Hotel pick-up and drop-off',
    ],
    gallery: [giraffePair, selousRhinos, selousHerd, selousBoat],
    overview: `Day 1: Zanzibar to Selous & Full-Day Safari
Early Morning Departure
Your guide collects you from the hotel and transfers you to Zanzibar Airport for the scenic flight to Selous Game Reserve, one of Africa's most untouched wildlife areas.

Arrival & Safari Briefing
Meet your safari guide upon landing for a short briefing before heading out into the reserve for a full-day game drive across open savannahs, woodlands, lakes, and riverbanks. Look for elephants, lions, giraffes, buffaloes, hippos, crocodiles, zebras, wildebeests, and a rich array of birdlife.

Bush Lunch and Afternoon Safari
Enjoy a bush lunch surrounded by nature, then continue exploring Selous as the afternoon activity brings more wildlife opportunities. In the evening transfer to your lodge or camp for dinner and an overnight stay in the heart of the wilderness.

Day 2: Morning Safari & Return to Zanzibar
Early Morning Safari
Start before sunrise for a morning game drive when wildlife tends to be most active.

Breakfast at the Lodge
Return to camp for a leisurely breakfast.

Return to Zanzibar
Transfer to the airstrip for the mid-morning flight back to Zanzibar and then on to your hotel.`,
    note: 'All times are approximate and may change depending on flight schedules or park conditions.',
  },
  'safari-4': {
    location: 'Mikumi National Park 2 Days / 1 Night',
    groupSize: 'Max 20',
    reviews: 'New package',
    experiences: [
      'Unique ferry and SGR train travel experience',
      'Afternoon and morning safari game drives',
      'Overnight stay in a safari lodge or camp',
      'Exciting wildlife experience in Mikumi National Park',
    ],
    includes: [
      'Ferry and SGR train tickets',
      'Safari game drives',
      'Accommodation and meals',
      'Park fees and professional guide',
    ],
    gallery: [mikumiHerd, mikumiGiraffes, mikumiLions, mikumiRhino],
    overview: `Day 1: Zanzibar → Dar → Mikumi
Hotel Pick-Up (5:20 AM)
Start with an early pickup from your hotel (time varies by location), then transfer to the ferry terminal in Stone Town. Board the 7:00 AM ferry to Dar es Salaam and arrive around 9:00 AM.

Transfer to SGR Station
Take the short drive to the SGR train station, board the 9:30 AM train to Morogoro, and enjoy the comfort of the journey, arriving around 11:45 AM.

Drive to Mikumi & Safari (12:30 PM)
Meet your safari guide in Morogoro and continue to Mikumi National Park. After lunch, head into the reserve for an afternoon game drive before settling in at your lodge or camp for dinner and an overnight stay in the wild.

Day 2: Mikumi → Morogoro → Dar → Zanzibar
Morning Game Drive
Rise early for a sunrise game drive, wrapping up near midday.

Return to Morogoro & Train (4:00 PM)
Return to Morogoro, board the SGR train back to Dar es Salaam, then transfer to the airport for the evening flight to Zanzibar.`,
    note: 'All times are approximate and may change depending on schedules and conditions.',
  },
  'safari-5': {
    location: '2 Days 1 Night Safari - Ngorongoro Crater and Tarangire',
    groupSize: 'Max 20',
    reviews: 'New package',
    experiences: [
      'Visit Tarangire National Park, known for large elephant herds',
      'Scenic game drives with picnic lunches',
      'Overnight stay near Ngorongoro Crater with crater rim views',
      'Big Five-focused morning drive in Ngorongoro Crater',
    ],
    includes: [
      '4x4 safari vehicle with professional guide',
      '1-night accommodation near Ngorongoro',
      'Game drives in Tarangire and Ngorongoro',
      'Picnic lunches',
      'Park entrance fees',
      'Hotel pick-up and drop-off',
    ],
    gallery: [tarangireView, tarangireHerd, tarangireHerdScene, wildebeestMigration],
    overview: `Day 1: Arusha → Tarangire → Ngorongoro
Begin with an early hotel or airport pickup in Arusha. Drive to Tarangire National Park for a morning game drive followed by a picnic lunch and a short afternoon drive. After enjoying the park's elephants, giraffes, zebras, lions, and baobab trees, continue to the Ngorongoro Conservation Area for dinner and overnight near the crater rim.

Day 2: Ngorongoro Crater → Arusha
After breakfast descend into Ngorongoro Crater for a morning game drive, seeking rhinos, lions, elephants, hippos, wildebeests, and abundant birdlife. Following the safari, ascend from the crater and drive back to Arusha for hotel or airport drop-off.`,
    note: 'Tips are recommended (approx. $15 per person per day). Hotel pick-up/drop-off depends on location.',
  },
  'safari-6': {
    location: '3 Days 2 Nights Safari - Mikumi From Zanzibar',
    groupSize: 'Max 20',
    reviews: 'New package',
    experiences: [
      'Cultural visit to a Maasai village with traditional dances',
      'Scenic SGR train journey across Tanzania',
      'Full-day safari game drive in Mikumi National Park',
      'Combination of wildlife adventure and cultural immersion',
    ],
    includes: [
      'Ferry transfers (Zanzibar ↔ Mainland)',
      'SGR train tickets (round trip)',
      '2 nights accommodation (lodge/camp)',
      'Safari game drives as per itinerary',
      'Maasai village cultural experience',
      'Meals during safari and travel',
      'Professional guide services',
      'Hotel pick-up and drop-off',
    ],
    gallery: [mikumiLions, mikumiGiraffes, mikumiHerd, mikumiRhino],
    overview: `Day 1: Zanzibar → Dar → Mikumi + Maasai Village
Hotel Pick-Up (05:00 AM)
Begin with a hotel pickup, followed by the 7:00 AM ferry from Stone Town to Dar es Salaam. Transfer to the SGR station and board the 9:30 AM train to Morogoro, where breakfast is served on board.

Drive to Mikumi (12:30 PM)
Meet your safari guide in Morogoro, transfer to Mikumi National Park, check into your lodge, have lunch, and relax.

Maasai Village Visit (4:00 PM)
Visit a Maasai village for cultural performances, traditional dances, and insights into their day-to-day life. Return to your lodge for dinner and overnight.

Day 2: Full-Day Safari Game Drive
Spend the day exploring Mikumi National Park, following wildlife trails with a picnic lunch inside the park. Head back to the lodge for evening dinner and rest.

Day 3: Return to Zanzibar
Morning Transfer
Drive back to Morogoro and board the SGR train to Dar es Salaam. From there, take the ferry back to Zanzibar and finish with a hotel transfer.`,
    note: 'All times are approximate and may change depending on schedules and conditions.',
  },
  'safari-7': {
    location: '3 Days 2 Nights Safari - Serengeti & Ngorongoro From Zanzibar',
    groupSize: 'Max 20',
    reviews: 'New package',
    experiences: [
      'Flight from Zanzibar to Serengeti with scenic views',
      'Full-day safari in Serengeti National Park',
      'Ngorongoro Crater game drive with chances to see the Big Five',
      'Combination of two iconic safari destinations',
    ],
    includes: [
      'Return flights (Zanzibar ↔ Arusha)',
      'Airport pick-up and drop-off in Arusha',
      '4x4 safari vehicle with professional guide',
      'Accommodation with meals (dinner, breakfast, selected lunches)',
      'Park entrance fees (Serengeti & Ngorongoro)',
      'Game drives with picnic lunches',
      'Bottled drinking water',
      'Hotel pick-up and drop-off',
    ],
    gallery: [serengetiFlamingos, serengetiRhino, serengetiWaterhole, serengetiElephantHerd],
    overview: `Day 1: Zanzibar → Serengeti
Begin with an early morning flight from Zanzibar to Arusha. On arrival, transfer to Serengeti National Park and head into the reserve for an afternoon game drive across the vast plains in search of lions, elephants, giraffes, and zebras. Spend the night at a lodge or camp inside the Serengeti.

Day 2: Serengeti Game Drive → Ngorongoro
Enjoy a full-day game drive in Serengeti National Park, then in the late afternoon transfer to the Ngorongoro Conservation Area and check in at a lodge on the crater rim for dinner and overnight stay.

Day 3: Ngorongoro Crater → Zanzibar
Descend into Ngorongoro Crater for a morning game drive with opportunities to spot the Big Five, then transfer back to Arusha for your flight to Zanzibar.`,
    note: 'Tips recommended (approx. $15 per person per day). Hotel pick-up/drop-off depends on location.',
  },
  'safari-8': {
    location: '3 Days 2 Nights Safari - Tarangire and Ngorongoro From Zanzibar',
    groupSize: 'Max 20',
    reviews: 'New package',
    experiences: [
      'Explore Tarangire National Park, famous for elephants and baobab trees',
      'Full-day game drives with diverse wildlife viewing',
      'Visit Ngorongoro Crater and spot the Big Five',
      'Enjoy scenic picnic lunch near the hippo pool',
    ],
    includes: [
      'Return flights (Zanzibar ↔ Arusha)',
      '4x4 safari vehicle with professional guide',
      'Accommodation in Karatu (with meals)',
      'Park entrance fees (Tarangire & Ngorongoro)',
      'Game drives with picnic lunches',
      'Bottled drinking water',
      'Hotel pick-up and drop-off',
    ],
    gallery: [tarangireView, tarangireHerd, tarangireHerdScene, wildebeestMigration],
    overview: `Day 1: Zanzibar → Arusha → Tarangire → Karatu
Start with an early morning flight from Zanzibar to Arusha. On arrival, meet your guide and drive to Tarangire National Park for a full-day game drive and picnic lunch among elephants, giraffes, zebras, and buffaloes. In the late afternoon transfer to Karatu for dinner and overnight.

Day 2: Ngorongoro Crater Game Drive
After breakfast travel to Ngorongoro Crater for a full-day exploration of the crater floor, looking for the Big Five. Enjoy a picnic lunch near the hippo pool before returning to Karatu for dinner and an overnight stay.

Day 3: Return to Zanzibar
After breakfast drive back to Arusha and board your return flight to Zanzibar, followed by a transfer to your hotel.`,
    note: 'Tips recommended (approx. $15 per person per day). Hotel pick-up/drop-off depends on location.',
  },
  'safari-9': {
    location: '4 Days 3 Nights Safari - Serengeti, Ngorongoro and Tarangire',
    groupSize: 'Max 20',
    reviews: 'New package',
    experiences: [
      'Explore Tarangire with large elephant herds',
      'Discover the vast Serengeti plains and diverse wildlife',
      'Stay near the Ngorongoro crater rim with stunning views',
      'Game drive inside Ngorongoro Crater to spot the Big Five',
    ],
    includes: [
      'Hotel/airport pick-up and drop-off in Arusha',
      '4x4 safari vehicle with professional driver-guide',
      'Accommodation with meals (dinner, breakfast, selected lunches)',
      'Park entrance fees (Tarangire, Serengeti & Ngorongoro)',
      'Game drives as per itinerary',
      'Picnic lunches during safaris',
      'Bottled drinking water',
    ],
    gallery: [tarangireFlamingos, tarangireRhino, tarangireZebraFlamingos, tarangireStream],
    overview: `Day 1: Arusha → Tarangire → Karatu
Begin with a pickup from your hotel or airport in Arusha and drive to Tarangire National Park. Enjoy a game drive with opportunities to spot elephants, giraffes, zebras, and baobab trees, followed by a picnic lunch before continuing to Karatu for dinner and an overnight stay.

Day 2: Karatu → Serengeti National Park
After breakfast travel through the Ngorongoro highlands to Serengeti National Park, embarking on game drives across the iconic plains before settling into your lodge or tented camp for dinner and overnight.

Day 3: Serengeti → Ngorongoro Conservation Area
Start with an early morning game drive in Serengeti, then transfer toward Ngorongoro Conservation Area, arriving at a lodge on the crater rim for dinner and overnight with sweeping views.

Day 4: Ngorongoro Crater → Arusha
Descend into Ngorongoro Crater for a half-day game drive, enjoy a picnic lunch near the hippo pool, and drive back to Arusha for hotel or airport drop-off.`,
    gallery: [lionFamily, giraffePair, tarangireHerd, wildebeestMigration],
    note: 'Tips recommended (approx. $15 per person per day). Hotel pick-up/drop-off depends on location.',
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
    gallery: [
      stoneTownGallery1,
      stoneTownGallery2,
      stoneTownGallery3,
      stoneTownGallery4,
    ],
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
    gallery: [
      spiceCookingGallery1,
      spiceCookingGallery4,
      spiceFarmGuide,
      spiceFarmStonetownImage,
    ],
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
    gallery: [
      jozaniWalkway,
      jozaniMangroves,
      jozaniMonkeys,
      jozaniColobus,
    ],
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
    gallery: [
      nakupendaSandbankImage,
      nakupendaSandbankScene1,
      nakupendaSandbankScene2,
      nakupendaSandbankScene3,
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
    gallery: [
      prisonIslandAerial,
      prisonIslandPath,
      prisonIslandWharf,
      prisonIslandMain,
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
    gallery: [
      sunsetDhow1,
      sunsetDhow2,
      sunsetDhow3,
      sunsetDhow4,
    ],
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
    gallery: [
      blueLagoonSnorkel1,
      blueLagoonSnorkel2,
      blueLagoonSnorkel3,
      blueLagoonStarfish,
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
    gallery: [
      mnembaSnorkel1,
      mnembaSnorkel2,
      mnembaSnorkel3,
      mnembaSnorkel4,
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
    gallery: [tumbatuReef1, tumbatuReef2, tumbatuReef3, tumbatuScene4],
    gallery: [
      tumbatuBoat,
      tumbatuReef1,
      tumbatuReef2,
      tumbatuReef3,
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

const extractPrice = (value) => {
  if (!value) return 0
  const match = value.match(/([\d,]+(\.\d+)?)/)
  if (!match) return 0
  return Number(match[1].replace(/,/g, ''))
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
  const allTours = useMemo(() => [...tours, ...zanzibarTours, ...safariTours], [])
  const tour = allTours.find((entry) => String(entry.id) === String(tourId))
  const navigate = useNavigate()
  const bookingFormRef = useRef(null)
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
  const galleryImages = useMemo(() => {
    const fromStatic = staticContent?.gallery
    if (fromStatic?.length >= 4) {
      return fromStatic.slice(0, 4)
    }

    const idx = tour ? allTours.findIndex((entry) => entry.id === tour.id) : 0
    const base = sharedGalleryImages.length
      ? sharedGalleryImages
      : allTours.map((entry) => entry.image).filter(Boolean)
    const fallbackBase = base.length ? base : tour?.image ? [tour.image] : []
    if (!fallbackBase.length) {
      return []
    }

    const normalizedIndex = idx % fallbackBase.length
    return Array.from(
      { length: 4 },
      (_, offset) => fallbackBase[(normalizedIndex + offset) % fallbackBase.length]
    )
  }, [allTours, sharedGalleryImages, staticContent, tour])

  const moreTours = useMemo(() => {
    if (!tour) return []
    const candidates = allTours.filter((entry) => entry.id !== tour.id)
    const key = tour.type || tour.origin || tour.category || tour.title
    const primary = candidates.filter(
      (entry) =>
        (key && (entry.type === key || entry.origin === key || entry.category === key)) ||
        entry.title.includes(key)
    )
    const remainder = candidates.filter((entry) => !primary.includes(entry))
    const shuffledPrimary = [...primary].sort(() => Math.random() - 0.5)
    const shuffledRemainder = [...remainder].sort(() => Math.random() - 0.5)
    return [...shuffledPrimary, ...shuffledRemainder].slice(0, 3)
  }, [allTours, tour])

  return (
    <>
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
          {content.note && (
            <p className="tour-detail__note">{content.note}</p>
          )}
        </div>

        <div className="tour-detail__booking">
          <h3>Tour Booking</h3>
          <p>
            <strong>Duration:</strong> {tour.duration}
          </p>
          <div className="tour-detail__price">{tour.price}</div>
          <button
            type="button"
            className="tour-detail__btn tour-detail__btn--primary"
            onClick={() => {
              bookingFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }}
          >
            Reserve Your Spot
          </button>
          <BookingForm
            subject={`Reserve Your Spot - ${tour.title}`}
            adultPrice={extractPrice(tour.price)}
            isSafari={/safari/i.test(tour.title)}
            fields={[
              { name: 'fullName', label: 'Name', placeholder: 'Full name', required: true, autocomplete: 'name' },
              {
                name: 'email',
                label: 'Email',
                type: 'email',
                placeholder: 'you@email.com',
                required: true,
                autocomplete: 'email',
              },
              { name: 'country', label: 'Country', placeholder: 'Country', required: true, autocomplete: 'country' },
              { name: 'adults', label: 'Adults', type: 'number', value: '1', min: 1, required: true, autocomplete: 'off' },
              { name: 'kids', label: 'Kids', type: 'number', value: '0', min: 0, autocomplete: 'off' },
            ]}
            hiddenFields={{ tour: tour.title, tourId: tour.id }}
            buttonText="Reserve Your Spot"
            formClassName="tour-detail__booking-form"
            ref={bookingFormRef}
          />
        </div>
      </div>
    </section>
      {galleryImages.length > 0 && (
        <section className="tour-detail__gallery-section">
          <div className="container">
            <div className="tour-detail__gallery-heading">
              <h2>Gallery</h2>
            </div>
            <div className="tour-detail__gallery-grid tour-detail__gallery-horizontal">
              {galleryImages.map((src) => (
                <figure className="tour-detail__gallery-item" key={src}>
                  <img src={src} alt={`${tour.title} scene`} />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}
      {moreTours.length > 0 && (
        <section className="tour-detail__more-tours">
          <div className="container">
            <h2>More Wildlife Safaris</h2>
            <div className="tour-detail__more-grid">
              {moreTours.map((option) => (
                <article className="tour-detail__more-card" key={option.id}>
                  <img src={option.image} alt={option.title} />
                  <div className="tour-detail__more-content">
                    <h3>{option.title}</h3>
                    <p>{option.summary}</p>
                    <div className="tour-detail__more-footer">
                      <span>{option.price}</span>
                      <Link to={`/tours/${option.id}`} className="tour-detail__more-btn">
                        View details
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default TourDetailPage
