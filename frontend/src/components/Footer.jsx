import { Link } from 'react-router-dom'
import logo from '../assets/ZANZIBAR EXCURSION COMPANY LTD copy.jpg'
import footerImage from '../assets/picha.jpeg'

function Footer() {
  return (
    <footer
      className="footer"
      style={{
    backgroundImage: `linear-gradient(180deg, rgba(4, 36, 46, 0.6), rgba(4, 36, 46, 0.8)), url(${footerImage})`,
      }}
    >
      <div className="container footer__grid">
        <div>
          <img className="footer__logo" src={logo} alt="Zanzibar Excursion Company Ltd" />
          <p className="section-tag">Zanzibar Excursion Company Ltd</p>
          <h3>Escape into island stories, ocean air, and seamless travel.</h3>
        </div>
        <div>
          <h4>Quick Links</h4>
          <div className="footer__links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/tours">Tours</Link>
            <Link to="/transfers">Transfers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Stone Town, Zanzibar</p>
          <p>+255 777 123 456</p>
          <p>info@zanzibarexcursion.com</p>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>(c) 2026 Zanzibar Excursion Company Ltd. Crafted for memorable journeys.</p>
      </div>
    </footer>
  )
}

export default Footer
