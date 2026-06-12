import { Routes, Route } from 'react-router-dom'
import { useTranslation } from './i18n'
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
  const { t } = useTranslation()

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
        <a
          className="whatsapp-float"
          href="https://wa.me/255792692084"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('Chat with us on WhatsApp')}
          title={t('Chat on WhatsApp')}
        >
          <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <path
              fill="currentColor"
              d="M19.11 17.16c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.13-1.32-.79-.71-1.32-1.58-1.47-1.84-.15-.27-.02-.41.11-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.13.18 1.91 2.92 4.62 4.09.65.28 1.16.45 1.56.58.66.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.27.22-.62.22-1.15.16-1.27-.07-.11-.25-.18-.52-.31Z"
            />
            <path
              fill="currentColor"
              d="M16 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.24.58 4.43 1.68 6.36L3.2 28.8l6.6-1.74A12.75 12.75 0 0 0 16 28.8c7.06 0 12.8-5.74 12.8-12.8S23.06 3.2 16 3.2Zm0 23.3c-2.05 0-4.05-.55-5.8-1.59l-.42-.25-3.92 1.03 1.05-3.82-.27-.43a10.39 10.39 0 1 1 9.36 5.06Z"
            />
          </svg>
        </a>
        <Footer />
      </div>
    </>
  )
}

export default App
