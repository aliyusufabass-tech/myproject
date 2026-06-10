import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const SUPPORTED_LANGUAGES = ['en', 'es', 'it', 'pt', 'fr', 'de', 'sw']
export const DEFAULT_LANGUAGE = 'en'
export const LANGUAGE_STORAGE_KEY = 'lang'

const isDev = import.meta.env?.DEV ?? false

export function normalizeLanguage(language) {
  const languageCode = typeof language === 'string' ? language.split('-')[0] : ''
  return SUPPORTED_LANGUAGES.includes(languageCode) ? languageCode : DEFAULT_LANGUAGE
}

function readStoredLanguage() {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE

  try {
    return normalizeLanguage(window.localStorage.getItem(LANGUAGE_STORAGE_KEY))
  } catch (error) {
    if (isDev) {
      console.warn('[i18n] Could not read saved language from localStorage.', error)
    }
    return DEFAULT_LANGUAGE
  }
}

function saveLanguage(language) {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, normalizeLanguage(language))
  } catch (error) {
    if (isDev) {
      console.warn('[i18n] Could not save selected language to localStorage.', error)
    }
  }
}

const resources = SUPPORTED_LANGUAGES.reduce((allResources, language) => {
  allResources[language] = { translation: {} }
  return allResources
}, {})

i18n.on('languageChanged', (language) => {
  saveLanguage(language)
  if (typeof document !== 'undefined') {
    document.documentElement.lang = normalizeLanguage(language)
  }
})

i18n.on('failedLoading', (language, namespace, message) => {
  console.error(`[i18n] Failed to load translations for "${language}" / "${namespace}".`, message)
})

i18n.on('missingKey', (languages, namespace, key) => {
  if (isDev) {
    console.warn(`[i18n] Missing translation key "${key}" in namespace "${namespace}".`, languages)
  }
})

i18n.use(initReactI18next).init({
  resources,
  lng: readStoredLanguage(),
  fallbackLng: 'en',
  supportedLngs: SUPPORTED_LANGUAGES,
  nonExplicitSupportedLngs: true,
  load: 'languageOnly',
  debug: isDev,
  returnNull: false,
  returnEmptyString: false,
  interpolation: {
    escapeValue: false,
  },
}).catch((error) => {
  console.error('[i18n] Failed to initialize i18next.', error)
})

export default i18n
