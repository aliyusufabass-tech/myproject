import { Link } from 'react-router-dom'
import logo from '../assets/new.png'
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
          <img className="footer__logo" src={logo} alt="Zan Excursions" />
          <p className="section-tag">Zan Excursions</p>
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
          <p>+255 792 692 084</p>
          <p>info@zanexcursions.com</p>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>(c) 2026 Zan Excursions. Crafted for memorable journeys.</p>
      </div>
    </footer>
  )
}

export default Footer
