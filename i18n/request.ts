import { getRequestConfig } from "next-intl/server"
import { locales } from "@/lib/i18n/settings"

export default getRequestConfig(async ({ locale }) => {
  // Default to 'en' if locale is undefined or not supported
  const safeLocale = locale && locales.includes(locale as any) ? locale : "en"

  // Load messages for the current locale
  const messages = (await import(`../messages/${safeLocale}.json`)).default

  return {
    messages,
    // You can pass other configuration options here if needed
    timeZone: "Europe/London",
    now: new Date(),
  }
})

// Helper function to get messages for a specific locale
export async function getMessages(locale: string) {
  // Default to 'en' if locale is undefined or not supported
  const safeLocale = locale && locales.includes(locale as any) ? locale : "en"

  return (await import(`../messages/${safeLocale}.json`)).default
}
