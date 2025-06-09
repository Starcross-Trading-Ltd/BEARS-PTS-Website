
import createMiddleware from "next-intl/middleware"
import { locales, defaultLocale } from "./i18n.config"

export default createMiddleware({
  locales,
  defaultLocale,
  // Always use explicit locale prefixes for better SEO and clarity
  localePrefix: "always",
  // Redirect to default locale if no locale is specified
  localeDetection: true,
})

export const config = {
  // Match all pathnames except for
  // - files with extensions (e.g. static files)
  // - api routes 
  // - _next paths (Next.js internals)
  // - favicon and other common static files
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
