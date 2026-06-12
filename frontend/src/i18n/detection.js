import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  getSupportedLanguage,
} from './config'

function readStoredLanguage() {
  if (typeof window === 'undefined') return null

  try {
    return window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
  } catch {
    return null
  }
}

function readBrowserLanguages() {
  if (typeof navigator === 'undefined') return null

  return [
    ...(Array.isArray(navigator.languages) ? navigator.languages : []),
    navigator.language,
  ].filter(Boolean)
}

export function detectLanguage() {
  const storedLanguage = getSupportedLanguage(readStoredLanguage())
  if (storedLanguage) return storedLanguage

  for (const browserLanguage of readBrowserLanguages() || []) {
    const supportedLanguage = getSupportedLanguage(browserLanguage)
    if (supportedLanguage) return supportedLanguage
  }

  return DEFAULT_LANGUAGE
}

export function persistLanguage(language) {
  if (typeof window === 'undefined') return

  const supportedLanguage = getSupportedLanguage(language)
  if (!supportedLanguage) return

  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, supportedLanguage)
  } catch {
    // Storage can be unavailable in private browsing or embedded contexts.
  }
}
