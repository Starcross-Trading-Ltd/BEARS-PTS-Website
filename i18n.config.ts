export const defaultLocale = "en"
export const locales = ["en", "ar", "ru"] as const
export type Locale = (typeof locales)[number]
