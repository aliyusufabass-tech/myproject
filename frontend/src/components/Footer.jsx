import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n'
import logo from '../assets/new.png'
import footerImage from '../assets/picha.jpeg'

function Footer() {
  const { t } = useTranslation()

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
          <p className="section-tag">{t('brand.name')}</p>
          <h3>{t('footer.tagline')}</h3>
        </div>
        <div>
          <h4>{t('footer.quickLinks')}</h4>
          <div className="footer__links">
            <Link to="/">{t('nav.home')}</Link>
            <Link to="/about">{t('nav.about')}</Link>
            <Link to="/tours">{t('nav.tours')}</Link>
            <Link to="/transfers">{t('nav.transfers')}</Link>
            <Link to="/gallery">{t('nav.gallery')}</Link>
            <Link to="/contact">{t('nav.contact')}</Link>
          </div>
        </div>
        <div>
          <h4>{t('nav.contact')}</h4>
          <p>{t('footer.location')}</p>
          <p>+255 792 692 084</p>
          <p>{t('footer.email')}</p>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  )
}

export default Footer
