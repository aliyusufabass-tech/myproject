export {
  DEFAULT_LANGUAGE,
  getSupportedLanguage,
  LANGUAGE_NAMES,
  LANGUAGE_STORAGE_KEY,
  SUPPORTED_LANGUAGES,
  isSupportedLanguage,
  normalizeLanguage,
} from './config'
export { detectLanguage, persistLanguage } from './detection'
export { I18nProvider } from './I18nProvider'
export { translateKey as t } from './translate'
export { useTranslation } from './useTranslation'
