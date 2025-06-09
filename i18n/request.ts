
import { getRequestConfig } from "next-intl/server"
import { locales, defaultLocale } from "@/i18n.config"

export default getRequestConfig(async ({ locale }) => {
  // Validate and fallback to default locale if needed
  const safeLocale = locale && locales.includes(locale as any) ? locale : defaultLocale

  try {
    // Load messages for the current locale
    const messages = (await import(`../messages/${safeLocale}.json`)).default

    return {
      messages,
      timeZone: "Europe/London",
      now: new Date(),
    }
  } catch (error) {
    console.error(`Failed to load messages for locale: ${safeLocale}`, error)
    
    // Fallback to default locale messages
    const fallbackMessages = (await import(`../messages/${defaultLocale}.json`)).default
    
    return {
      messages: fallbackMessages,
      timeZone: "Europe/London", 
      now: new Date(),
    }
  }
})

// Helper function to get messages for a specific locale
export async function getMessages(locale: string) {
  const safeLocale = locale && locales.includes(locale as any) ? locale : defaultLocale

  try {
    return (await import(`../messages/${safeLocale}.json`)).default
  } catch (error) {
    console.error(`Failed to load messages for locale: ${safeLocale}`, error)
    return (await import(`../messages/${defaultLocale}.json`)).default
  }
}
