import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { DEFAULT_LANGUAGE, getSupportedLanguage } from './config'
import { detectLanguage, persistLanguage } from './detection'
import { translateKey } from './translate'

export const I18nContext = createContext({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  t: (key) => key,
})

export function I18nProvider({ children }) {
  const [language, setLanguageState] = useState(() => detectLanguage())

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
    }
  }, [language])

  const setLanguage = useCallback((nextLanguage) => {
    const normalizedLanguage = getSupportedLanguage(nextLanguage)
    if (!normalizedLanguage) return

    setLanguageState(normalizedLanguage)
    persistLanguage(normalizedLanguage)
  }, [])

  const t = useCallback(
    (key, values) => translateKey(key, language, values),
    [language],
  )

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, setLanguage, t],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
