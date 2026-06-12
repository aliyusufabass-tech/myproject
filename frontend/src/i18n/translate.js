import { DEFAULT_LANGUAGE, normalizeLanguage } from './config'
import { resources } from './resources'
import { translateLooseText } from './looseText'

export function translateKey(key, language, values) {
  const normalizedLanguage = normalizeLanguage(language)
  const activeMessages = resources[normalizedLanguage] || resources[DEFAULT_LANGUAGE]
  const englishMessages = resources[DEFAULT_LANGUAGE] || {}
  const message = activeMessages?.[key] ?? englishMessages[key] ?? translateLooseText(key, normalizedLanguage)

  if (!values || typeof message !== 'string') return message

  return message.replace(/\{(\w+)\}/g, (match, token) => {
    return Object.prototype.hasOwnProperty.call(values, token) ? String(values[token]) : match
  })
}
