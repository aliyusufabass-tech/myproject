import { SUPPORTED_LANGUAGES, useTranslation } from '../i18n'

const languages = [
  { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'es', name: 'Spanish', flag: 'https://flagcdn.com/w40/es.png' },
  { code: 'it', name: 'Italian', flag: 'https://flagcdn.com/w40/it.png' },
  { code: 'pt', name: 'Portuguese', flag: 'https://flagcdn.com/w40/pt.png' },
  { code: 'fr', name: 'French', flag: 'https://flagcdn.com/w40/fr.png' },
  { code: 'de', name: 'German', flag: 'https://flagcdn.com/w40/de.png' },
  { code: 'sw', name: 'Swahili', flag: 'https://flagcdn.com/w40/tz.png' },
]

function LanguageSwitcher() {
  const { language, setLanguage, t } = useTranslation()

  const changeLanguage = (code) => {
    if (!SUPPORTED_LANGUAGES.includes(code)) {
      console.error(`[i18n] Unsupported language requested: "${code}".`)
      return
    }

    setLanguage(code)
  }

  return (
    <div className="language-switcher" aria-label={t('language.choose')}>
      {languages.map((lang) => (
        <button
          className={`language-switcher__button ${
            language === lang.code ? 'language-switcher__button--active' : ''
          }`}
          key={lang.code}
          type="button"
          onClick={() => changeLanguage(lang.code)}
        >
          <img src={lang.flag} width="25" height="18" alt="" loading="lazy" />
          <span>{t(`language.${lang.code}`)}</span>
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
