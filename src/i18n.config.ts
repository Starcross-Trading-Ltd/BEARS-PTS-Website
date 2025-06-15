
export const locales = ['en', 'ar', 'ru'] as const
export type Locale = typeof locales[number]
export const defaultLocale: Locale = 'en'

export const languageConfig: Record<Locale, { name: string; nativeName: string; dir: 'ltr' | 'rtl' }> = {
  en: {
    name: 'English',
    nativeName: 'English',
    dir: 'ltr'
  },
  ar: {
    name: 'Arabic',
    nativeName: 'العربية',
    dir: 'rtl'
  },
  ru: {
    name: 'Russian',
    nativeName: 'Русский',
    dir: 'ltr'
  }
}

export function getLanguageDirection(locale: Locale): 'ltr' | 'rtl' {
  return languageConfig[locale]?.dir || 'ltr'
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}
