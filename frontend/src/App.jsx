import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ToursPage from './pages/ToursPage'
import TourDetailPage from './pages/TourDetailPage'
import BookingPage from './pages/BookingPage'
import TransfersPage from './pages/TransfersPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="site-shell">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/booking/:tourId" element={<BookingPage />} />
            <Route path="/tours/:tourId" element={<TourDetailPage />} />
            <Route path="/tours" element={<ToursPage />} />
            <Route path="/transfers" element={<TransfersPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
