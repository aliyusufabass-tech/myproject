import mnembaImage from '../assets/Mnemba Snorkeling and Dolphins.jpeg'
import jozaniImage from '../assets/jonzaniforest.jpeg'
import jozaniImageTwo from '../assets/jonzaniforest2.jpeg'
import stoneTownImage from '../assets/stonetown.jpeg'
import blueLagoonImage from '../assets/Blue Lagoon and Starfish.jpeg'
import nakupendaPrisonImage from '../assets/Nakupenda Sandbank, Prison Island and Stonetown.jpeg'
import nakupendaSandbankImage from '../assets/Nakupenda Sandbank.jpeg'
import pungumeImage from '../assets/Pungume Sandbank, Dolphins and Snorkeling.jpeg'
import snorkelingTumbatuImage from '../assets/Snorkeling Tour Near Tumbatu Island.jpeg'
import spiceFarmCookingImage from '../assets/Spice Farm and Spice Cooking.jpeg'
import spiceFarmStonetownImage from '../assets/Spice Farm and Stonetown.jpeg'
import spiceFarmTourImage from '../assets/Spice Farm Tour.jpeg'
import sunsetDhowImage from '../assets/Sunset Dhow Cruise.jpeg'
import blueSafariImage from '../assets/Blue safari.jpeg'
import prisonIslandImage from '../assets/Prison island.jpeg'
import jozaniKuzaPajeImage from '../assets/Jozani Forest, Kuza Cave, Paje Beach and Rock Restaurant.jpeg'
import maalumCaveImage from '../assets/Maalum Cave, Mtende Beach, Paje Beach and Rock Restaurant.jpeg'
import mikumiDayTripImage from '../assets/Mikumi Day Trip Safari From Zanzibar.jpeg'
import selousDayTripImage from '../assets/Selous Day Trip Safari From Zanzibar.jpeg'
import twoDaySelousImage from '../assets/2 Days 1 Night Safari - Selous From Zanzibar.jpeg'
import twoDayMikumiImage from '../assets/2 Days 1 Night Safari - Mikumi From Zanzibar.jpeg'
import twoDayNgorongoroImage from '../assets/2 Days 1 Night Safari - Ngorongoro Crater and Tarangire.jpeg'
import threeDayMikumiImage from '../assets/3 Days 2 Nights Safari - Mikumi From Zanzibar.jpeg'
import threeDayMikumiCardImage from '../assets/54.jpeg'
import threeDaySerengetiImage from '../assets/3 Days 2 Nights Safari - Serengeti and Ngorongoro From Zanzibar.jpeg'
import threeDaySerengetiCardImage from '../assets/56.jpeg'
import threeDayTarangireImage from '../assets/3 Days 2 Nights Safari - Tarangire and Ngorongoro From Zanzibar.jpeg'
import fourDaySerengetiImage from '../assets/4 Days 3 Nights Safari - Serengeti, Ngorongoro and Tarangire.jpeg'
import standardCarImage from '../assets/95.jpeg'
import minivanImage from '../assets/96.jpeg'
import busImage from '../assets/97.jpeg'

export const tours = [
  {
    id: 1,
    title: 'Mnemba Reef Snorkeling',
    duration: 'Half day tour',
    price: '$42 / person',
    category: 'Half Day',
    description:
      'Enjoy clear Zanzibar waters with reef snorkeling, marine encounters, and possible dolphin sightings.',
    image: mnembaImage,
    childPrice: 10,
  },
  {
    id: 2,
    title: 'Stone Town Heritage Walk',
    duration: 'Half day tour',
    price: '$25 / person',
    category: 'Half Day',
    description:
      'Walk through historic Stone Town and enjoy its culture, landmarks, and everyday stories.',
    image: stoneTownImage,
    childPrice: 10,
  },
  {
    id: 3,
    title: 'Jozani Forest, Spice Farm and Stonetown',
    duration: 'Full day tour',
    price: '$67 / person',
    category: 'Full Day',
    description:
      'Combine Zanzibar wildlife, spice farm heritage, and Stone Town culture in one memorable day.',
    image: jozaniImageTwo,
    childPrice: 10,
  },
  {
    id: 4,
    title: 'Safari Blue Cruise',
    duration: 'Full day tour',
    price: '$57 / person',
    category: 'Full Day',
    description:
      "Spend the day exploring Zanzibar's marine side with a dhow cruise and snorkeling from Fumba.",
    image: blueSafariImage,
    childPrice: 10,
  },
]

export const zanzibarTours = [
  {
    id: 'full-1',
    type: 'full',
    title: 'Spice Farm and Spice Cooking',
    summary:
      'Step into Zanzibar food culture with a spice farm visit and a hands-on local cooking experience.',
    tags: ['Cooking Class', 'Spice Market Visit', 'Aromatic Tasting'],
    duration: 'Full day tour',
    maxGuests: 'Max 30',
    reviews: '234 reviews',
    price: '$45 / person',
    rating: '4.9',
    image: spiceFarmCookingImage,
    detailUrl: 'https://www.yazantours.co.tz/spice-farm-cooking-class-tour/',
  },
  {
    id: 'full-2',
    type: 'full',
    title: 'Spice Farm and Stonetown',
    summary:
      'Spend the day blending Zanzibar history, culture, and traditional island flavors in one trip.',
    tags: ['Aromatic Tasting', 'Cooking Class', 'Stonetown Walking'],
    duration: 'Full day tour',
    maxGuests: 'Max 30',
    reviews: '57 reviews',
    price: '$54 / person',
    rating: '4.8',
    image: spiceFarmStonetownImage,
    detailUrl: 'https://www.yazantours.co.tz/spice-farm-stonetown-tour/',
  },
  {
    id: 'full-3',
    type: 'full',
    title: 'Jozani Forest, Spice Farm and Stonetown',
    summary:
      'Combine Zanzibar wildlife, spice farm heritage, and Stone Town culture in one memorable day.',
    tags: ['Jozani Forest Walk', 'Aromatic Tasting', 'Stonetown Walking'],
    duration: 'Full day tour',
    maxGuests: 'Max 30',
    reviews: '118 reviews',
    price: '$67 / person',
    rating: '4.7',
    image: jozaniImageTwo,
    detailUrl: 'https://www.yazantours.co.tz/jozani-forestspice-farm-stone-town/',
  },
  {
    id: 'full-4',
    type: 'full',
    title: 'Nakupenda Sandbank, Prison Island and Stonetown',
    summary:
      'Meet giant tortoises at Prison Island, unwind on Nakupenda Sandbank, and end with Stone Town exploration.',
    tags: ['Nakupenda Beach', 'Prison Visit', 'Stonetown Walking'],
    duration: 'Full day tour',
    maxGuests: 'Max 20',
    reviews: '350 reviews',
    price: '$69 / person',
    rating: '4.9',
    image: nakupendaPrisonImage,
    detailUrl:
      'https://www.yazantours.co.tz/nakupenda-sandbank-prison-island-stonetown-tour/',
  },
  {
    id: 'full-5',
    type: 'full',
    title: 'Blue Safari',
    summary:
      "Enjoy Zanzibar ocean beauty on a Blue Safari with dhow sailing, snorkeling, and swimming stops.",
    tags: ['Dhow Cruise', 'Snorkeling', 'Swimming'],
    duration: 'Full day tour',
    maxGuests: 'Max 25',
    reviews: '102 reviews',
    price: '$57 / person',
    rating: '4.8',
    image: blueSafariImage,
    detailUrl: 'https://www.yazantours.co.tz/blue-safari-tour/',
  },
  {
    id: 'full-6',
    type: 'full',
    title: 'Pungume Sandbank, Dolphins and Snorkeling',
    summary:
      'Take a full-day southern Zanzibar trip featuring dolphins, a sandbank break, and colorful marine life.',
    tags: ['Boat Ride', 'Swimming', 'Snorkeling'],
    duration: 'Full day tour',
    maxGuests: 'Max 15',
    reviews: '110 reviews',
    price: '$82 / person',
    rating: '4.7',
    image: pungumeImage,
    detailUrl: 'https://www.yazantours.co.tz/kizimkazi-dolphins-snorkeling-tour/',
  },
  {
    id: 'full-7',
    type: 'full',
    title: 'Mnemba Snorkeling, Dolphins, Turtles Aquarium and Kendwa Beach',
    summary:
      'Explore northern Zanzibar with snorkeling, sea-life experiences, and a relaxing beach finish.',
    tags: ['Snorkeling', 'Swimming with Dolphins', 'Aquarium Visit'],
    duration: 'Full day tour',
    maxGuests: 'Max 30',
    reviews: '200 reviews',
    price: '$82 / person',
    rating: '4.9',
    image: mnembaImage,
    detailUrl:
      'https://www.yazantours.co.tz/mnemba-snorkeling-swimming-with-dolphins-and-turtles-kendwa-beach/',
  },
  {
    id: 'full-8',
    type: 'full',
    title: 'Jozani Forest, Kuza Cave, Paje Beach and Rock Restaurant',
    summary:
      "Discover Zanzibar's east coast through nature, cave visits, beach relaxation, and a signature dining stop.",
    tags: ['Jozani Forest Walk', 'Kuza Cave Visit', 'Paje Beach', 'Rock Restaurant'],
    duration: 'Full day tour',
    maxGuests: 'Max 20',
    reviews: '120 reviews',
    price: '$74 / person',
    rating: '4.6',
    image: jozaniKuzaPajeImage,
    detailUrl:
      'https://www.yazantours.co.tz/jozani-forestkuza-cave-paje-beach-the-rock-restaurant/',
  },
  {
    id: 'full-9',
    type: 'full',
    title: 'Maalum Cave, Mtende Beach, Paje Beach and Rock Restaurant',
    summary:
      "See Zanzibar's east and south coast with cave swimming, scenic beach visits, and a Rock Restaurant stop.",
    tags: ['Maalum Cave Visit', 'Mtende Beach', 'Paje Beach', 'Rock Restaurant'],
    duration: 'Full day tour',
    maxGuests: 'Max 30',
    reviews: '150 reviews',
    price: '$76 / person',
    rating: '4.8',
    image: maalumCaveImage,
    detailUrl:
      'https://www.yazantours.co.tz/maalum-cave-mtende-beach-paje-beach-rock-restaurant/',
  },
  {
    id: 'half-1',
    type: 'half',
    title: 'Stone Town Tour',
    summary:
      'Discover Stone Town streets, heritage landmarks, and culture in this UNESCO-listed island setting.',
    tags: ['City Walk', 'History', 'Culture'],
    duration: 'Half day tour',
    maxGuests: 'Max 30',
    reviews: 'Reviews',
    price: '$25 / person',
    rating: '4.7',
    image: stoneTownImage,
    detailUrl: 'https://www.yazantours.co.tz/stone-town-tour/',
  },
  {
    id: 'half-2',
    type: 'half',
    title: 'Spice Farm Tour',
    summary:
      'Visit Zanzibar spice farms and enjoy the aromas, tastes, and lush natural surroundings of the island.',
    tags: ['Spice Tour', 'Tasting', 'Nature'],
    duration: 'Half day tour',
    maxGuests: 'Max 30',
    reviews: 'Reviews',
    price: '$20 / person',
    rating: '4.6',
    image: spiceFarmTourImage,
    detailUrl: 'https://www.yazantours.co.tz/spice-farm-tour/',
  },
  {
    id: 'half-3',
    type: 'half',
    title: 'Jozani Forest',
    summary:
      "Visit Zanzibar's only national park and encounter red colobus monkeys, mangroves, and rich wildlife.",
    tags: ['Forest Walk', 'Wildlife', 'Nature'],
    duration: 'Half day tour',
    maxGuests: 'Max 25',
    reviews: 'Reviews',
    price: '$29 / person',
    rating: '4.8',
    image: jozaniImage,
    detailUrl: 'https://www.yazantours.co.tz/jozani-forest/',
  },
  {
    id: 'half-4',
    type: 'half',
    title: 'Nakupenda Sandbank',
    summary:
      'Head to Nakupenda Sandbank for swimming, sunbathing, and a fresh beachside seafood experience.',
    tags: ['Sandbank', 'Swimming', 'Beach'],
    duration: 'Half day tour',
    maxGuests: 'Max 20',
    reviews: 'Reviews',
    price: '$35 / person',
    rating: '4.9',
    image: nakupendaSandbankImage,
    detailUrl: 'https://www.yazantours.co.tz/nakupenda-sandbank/',
  },
  {
    id: 'half-5',
    type: 'half',
    title: 'Prison Island Tour',
    summary:
      'Enjoy a short boat trip from Stone Town to Prison Island and see the giant Aldabra tortoises.',
    tags: ['Island Tour', 'Tortoises', 'Boat Ride'],
    duration: 'Half day tour',
    maxGuests: 'Max 20',
    reviews: 'Reviews',
    price: '$37 / person',
    rating: '4.8',
    image: prisonIslandImage,
    detailUrl: 'https://www.yazantours.co.tz/prison-island-tour/',
  },
  {
    id: 'half-6',
    type: 'half',
    title: 'Sunset Dhow Cruise',
    summary:
      "Sail Zanzibar's coast on a traditional dhow and enjoy a relaxed half-day sunset experience.",
    tags: ['Dhow Cruise', 'Sunset', 'Relax'],
    duration: 'Half day tour',
    maxGuests: 'Max 25',
    reviews: 'Reviews',
    price: '$24 / person',
    rating: '4.6',
    image: sunsetDhowImage,
    detailUrl: 'https://www.yazantours.co.tz/sunset-dhow-cruise/',
  },
  {
    id: 'half-7',
    type: 'half',
    title: 'Blue Lagoon and Starfish',
    summary:
      'Travel by boat from Pingwe Beach to Blue Lagoon for snorkeling, starfish viewing, and calm water relaxation.',
    tags: ['Blue Lagoon', 'Starfish', 'Snorkeling'],
    duration: 'Half day tour',
    maxGuests: 'Max 20',
    reviews: 'Reviews',
    price: '$38 / person',
    rating: '4.7',
    image: blueLagoonImage,
    detailUrl: 'https://www.yazantours.co.tz/blue-lagoon-starfish/',
  },
  {
    id: 'half-8',
    type: 'half',
    title: 'Mnemba Snorkeling and Dolphins',
    summary:
      'Depart from Muyuni Beach for Mnemba snorkeling with opportunities to spot dolphins and marine life.',
    tags: ['Snorkeling', 'Dolphins', 'Marine Life'],
    duration: 'Half day tour',
    maxGuests: 'Max 25',
    reviews: 'Reviews',
    price: '$42 / person',
    rating: '4.9',
    image: mnembaImage,
    detailUrl: 'https://www.yazantours.co.tz/mnemba-snorkeling-dolphins/',
  },
  {
    id: 'half-9',
    type: 'half',
    title: 'Snorkeling Tour Near Tumbatu Island',
    summary:
      'Enjoy a snorkeling outing near Tumbatu Island surrounded by coral reefs and vibrant marine life.',
    tags: ['Snorkeling', 'Coral Reef', 'Boat Trip'],
    duration: 'Half day tour',
    maxGuests: 'Max 20',
    reviews: 'Reviews',
    price: '$55 / person',
    rating: '4.8',
    image: snorkelingTumbatuImage,
    detailUrl: 'https://www.yazantours.co.tz/snorkeling-tour-near-tumbatu-island/',
  },
]

export const safariTours = [
  {
    id: 'safari-1',
    title: 'Mikumi Day Trip Safari From Zanzibar',
    summary:
      'Take a day safari from Zanzibar to Mikumi and return the same evening after a rewarding wildlife experience.',
    tags: ['Game Drive', 'Day Trip', 'Mikumi'],
    duration: '1 Day',
    origin: 'From Zanzibar',
    price: 'From $450',
    rating: '4.9',
    detailUrl: '/contact',
    image: mikumiDayTripImage,
    childPrice: 20,
  },
  {
    id: 'safari-2',
    title: 'Selous Day Trip Safari From Zanzibar',
    summary:
      'Fly from Zanzibar to Selous for a full safari day with game drives and lunch surrounded by nature.',
    tags: ['Flight', 'Selous', 'Day Trip'],
    duration: '1 Day',
    origin: 'From Zanzibar',
    price: 'From $460',
    rating: '4.8',
    detailUrl: '/contact',
    image: selousDayTripImage,
    childPrice: 20,
  },
  {
    id: 'safari-3',
    title: '2 Days 1 Night Safari - Selous From Zanzibar',
    summary:
      'See the beauty of Selous on a 2-day safari from Zanzibar with a scenic flight, game drive, and overnight stay.',
    tags: ['Selous', 'Overnight', 'Flight'],
    duration: '2 Days / 1 Night',
    origin: 'From Zanzibar',
    price: 'From $700',
    rating: '4.7',
    detailUrl: '/contact',
    image: twoDaySelousImage,
    childPrice: 20,
  },
  {
    id: 'safari-4',
    title: '2 Days 1 Night Safari - Mikumi From Zanzibar',
    summary:
      "Travel through Tanzania's countryside on a 2-day Mikumi safari from Zanzibar by boat and SGR train.",
    tags: ['Mikumi', 'Boat', 'SGR Train'],
    duration: '2 Days / 1 Night',
    origin: 'From Zanzibar',
    price: 'From $600',
    rating: '4.6',
    detailUrl: '/contact',
    image: twoDayMikumiImage,
    childPrice: 20,
  },
  {
    id: 'safari-5',
    title: '2 Days 1 Night Safari - Ngorongoro Crater and Tarangire',
    summary:
      'This 2-day safari from Arusha covers Tarangire and Ngorongoro for memorable wildlife viewing.',
    tags: ['Ngorongoro', 'Tarangire', 'Arusha'],
    duration: '2 Days / 1 Night',
    origin: 'From Arusha',
    price: 'From $550',
    rating: '4.8',
    detailUrl: '/contact',
    image: twoDayNgorongoroImage,
    childPrice: 20,
  },
  {
    id: 'safari-6',
    title: '3 Days 2 Nights Safari - Mikumi From Zanzibar',
    summary:
      'Begin with a Maasai village visit before continuing into Mikumi for exciting game drive experiences.',
    tags: ['Mikumi', 'Maasai Village', 'Cultural Experience'],
    duration: '3 Days / 2 Nights',
    origin: 'From Zanzibar',
    price: 'From $650',
    rating: '4.7',
    detailUrl: '/contact',
    image: threeDayMikumiCardImage,
    childPrice: 20,
  },
  {
    id: 'safari-7',
    title: '3 Days 2 Nights Safari - Serengeti and Ngorongoro From Zanzibar',
    summary:
      'Enjoy a 3-day safari from Zanzibar across Serengeti and Ngorongoro with exciting wildlife game drives.',
    tags: ['Serengeti', 'Ngorongoro', 'Big Five'],
    duration: '3 Days / 2 Nights',
    origin: 'From Zanzibar',
    price: 'From $1470',
    rating: '4.9',
    detailUrl: '/contact',
    image: threeDaySerengetiCardImage,
    childPrice: 20,
  },
  {
    id: 'safari-8',
    title: '3 Days 2 Nights Safari - Tarangire and Ngorongoro From Zanzibar',
    summary:
      'Set out on a 3-day Zanzibar safari to Tarangire and Ngorongoro with elephants and crater wildlife encounters.',
    tags: ['Tarangire', 'Ngorongoro', 'Wildlife'],
    duration: '3 Days / 2 Nights',
    origin: 'From Zanzibar',
    price: 'From $650',
    rating: '4.7',
    detailUrl: '/contact',
    image: threeDayTarangireImage,
    childPrice: 20,
  },
  {
    id: 'safari-9',
    title: '4 Days 3 Nights Safari - Serengeti, Ngorongoro and Tarangire',
    summary:
      "Travel from Arusha on a 4-day safari through Tanzania's best-known wildlife destinations.",
    tags: ['Serengeti', 'Ngorongoro', 'Tarangire', 'Arusha'],
    duration: '4 Days / 3 Nights',
    origin: 'From Arusha',
    price: 'From $1700',
    rating: '4.9',
    detailUrl: '/contact',
    image: fourDaySerengetiImage,
    childPrice: 20,
  },
]

export const transferOptions = [
  {
    name: 'Airport Pickup',
    detail: 'We provide punctual airport pickup services supported by dependable local coordination.',
  },
  {
    name: 'Hotel Transfers',
    detail: 'Enjoy comfortable transport to your hotel, resort, or villa anywhere in Zanzibar.',
  },
  {
    name: 'Private Trips',
    detail: 'Travel privately across Zanzibar with flexible timing and direct point-to-point service.',
  },
]

export const transferVehicles = [
  {
    name: 'Standard Car',
    capacity: 'Up to 3 passengers',
    image: standardCarImage,
  },
  {
    name: 'Minivan',
    capacity: 'Up to 6 passengers',
    image: minivanImage,
  },
  {
    name: 'Bus',
    capacity: 'Up to 20 passengers',
    image: busImage,
  },
]

export const testimonials = [
  {
    name: 'Amina K.',
    quote:
      'Every moment felt thoughtful, from airport pickup to our sunset dhow cruise. The team made Zanzibar feel personal.',
  },
  {
    name: 'Daniel M.',
    quote:
      'We booked two tours and a transfer package. Smooth communication, punctual guides, and beautiful experiences.',
  },
  {
    name: 'Sofia R.',
    quote:
      'The balance of luxury and local authenticity was exactly what we hoped for. We would book again instantly.',
  },
]

export const team = [
  {
    name: 'Hassan Ali',
    role: 'Lead Island Guide',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Neema Juma',
    role: 'Guest Experience Manager',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Omar Suleiman',
    role: 'Transfers Coordinator',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
  },
]

export { galleryImages } from './galleryAssets'
