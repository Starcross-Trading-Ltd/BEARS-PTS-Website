
import type React from "react"
import { Inter } from "next/font/google"
import "../globals.css"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { locales, languageConfig } from "@/i18n.config"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PartnerLogos from "@/components/partner-logos"

const inter = Inter({ subsets: ["latin"] })

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const messages = await getMessages({ locale: params.locale })

  return {
    title: messages?.meta?.title || "BEARS Patient Transport Services",
    description: messages?.meta?.description || "Professional patient transport services",
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages({ locale })

  // Get language configuration
  const langConfig = languageConfig[locale as keyof typeof languageConfig]
  const dir = langConfig?.dir || "ltr"

  return (
    <html lang={locale} dir={dir}>
      <body className={`${inter.className} ${dir === "rtl" ? "rtl" : "ltr"}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <div className="min-h-screen">{children}</div>
          <PartnerLogos />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
