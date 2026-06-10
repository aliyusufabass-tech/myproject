import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '../assets/new.png'
import footerImage from '../assets/picha.jpeg'
import { translateText } from '../utils/i18nText'

function Footer() {
  const { i18n } = useTranslation()
  const tr = (text) => translateText(text, i18n.language)

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
          <h3>{tr('Mergulhe em historias da ilha, brisa do oceano e viagens sem complicacoes.')}</h3>
        </div>
        <div>
          <h4>{tr('Links Rapidos')}</h4>
          <div className="footer__links">
            <Link to="/">{tr('InÃ­cio')}</Link>
            <Link to="/about">{tr('Sobre Nos')}</Link>
            <Link to="/tours">{tr('Tours')}</Link>
            <Link to="/transfers">{tr('Transfers')}</Link>
            <Link to="/gallery">{tr('Galeria')}</Link>
            <Link to="/contact">{tr('Contacto')}</Link>
          </div>
        </div>
        <div>
          <h4>{tr('Contacto')}</h4>
          <p>Stone Town, Zanzibar</p>
          <p>+255 792 692 084</p>
          <p>info@zanexcursions.com</p>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>{tr('(c) 2026 Zan Excursions. Criado para viagens memoraveis.')}</p>
      </div>
    </footer>
  )
}

export default Footer
