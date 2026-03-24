import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="section-tag">Zanzibar Excursion</p>
          <h3>Escape into island stories, ocean air, and seamless travel.</h3>
        </div>
        <div>
          <h4>Quick Links</h4>
          <div className="footer__links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/tours">Tours</Link>
            <Link to="/transfers">Transfers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Stone Town, Zanzibar</p>
          <p>+255 777 123 456</p>
          <p>hello@zanzibarexcursion.com</p>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>(c) 2026 Zanzibar Excursion. Crafted for memorable journeys.</p>
      </div>
    </footer>
  )
}

export default Footer
