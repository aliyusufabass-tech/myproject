import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from '../i18n'
import logo from '../assets/new.png'
import LanguageSwitcher from './LanguageSwitcher'

const navLinks = [
  { to: '/', labelKey: 'nav.home' },
  { to: '/about', labelKey: 'nav.about' },
  { to: '/tours', labelKey: 'nav.tours' },
  { to: '/transfers', labelKey: 'nav.transfers' },
  { to: '/gallery', labelKey: 'nav.gallery' },
  { to: '/contact', labelKey: 'nav.contact' },
]

function Navbar() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <NavLink className="brand" to="/">
          <img className="brand__logo" src={logo} alt="Zan Excursions" />
          <span>{t('brand.name')}</span>
        </NavLink>

        <button
          className="navbar__toggle"
          type="button"
          aria-label={t('nav.toggle')}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
              to={link.to}
              onClick={() => setMenuOpen(false)}
            >
              {t(link.labelKey)}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="container navbar__language-row">
        <LanguageSwitcher />
      </div>
    </header>
  )
}

export default Navbar
