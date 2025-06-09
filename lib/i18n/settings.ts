export const locales = ["en", "ar", "ru"] as const
export const defaultLocale = "en" as const

// Define the type for supported locales
export type Locale = (typeof locales)[number]
