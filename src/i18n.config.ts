
export const defaultLocale = "en" as const
export const locales = ["en", "ar", "ru"] as const
export type Locale = (typeof locales)[number]

// Language configuration with proper RTL support
export const languageConfig = {
  en: {
    name: "English",
    nativeName: "English",
    dir: "ltr" as const,
  },
  ar: {
    name: "Arabic", 
    nativeName: "العربية",
    dir: "rtl" as const,
  },
  ru: {
    name: "Russian",
    nativeName: "Русский", 
    dir: "ltr" as const,
  },
} as const
