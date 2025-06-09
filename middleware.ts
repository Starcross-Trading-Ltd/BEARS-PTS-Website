import createMiddleware from "next-intl/middleware"
import { locales, defaultLocale } from "./i18n.config"

export default createMiddleware({
  locales,
  defaultLocale,
  // Always use explicit locale prefixes
  localePrefix: "always",
})

export const config = {
  // Match all pathnames except for
  // - files with extensions (e.g. static files)
  // - api routes
  // - _next paths (Next.js internals)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}
