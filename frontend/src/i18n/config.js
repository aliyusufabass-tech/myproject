export const DEFAULT_LANGUAGE = 'en'
export const LANGUAGE_STORAGE_KEY = 'language'
export const SUPPORTED_LANGUAGES = ['en', 'es', 'it', 'pt', 'fr', 'de', 'sw']

export const LANGUAGE_NAMES = {
  en: 'English',
  es: 'Spanish',
  it: 'Italian',
  pt: 'Portuguese',
  fr: 'French',
  de: 'German',
  sw: 'Swahili',
}

export function getSupportedLanguage(language) {
  if (typeof language !== 'string') return null

  const code = language.trim().toLowerCase().replace('_', '-').split('-')[0]
  return SUPPORTED_LANGUAGES.includes(code) ? code : null
}

export function normalizeLanguage(language) {
  return getSupportedLanguage(language) || DEFAULT_LANGUAGE
}

export function isSupportedLanguage(language) {
  return getSupportedLanguage(language) === language
}
