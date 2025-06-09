
"use client"

import { useState, useTransition } from "react"
import { useLocale, useTranslations } from "next-intl"
import { ChevronDown, Globe, Check } from "lucide-react"
import { useRouter, usePathname } from "@/lib/navigation"
import { languageConfig, type Locale } from "@/i18n.config"

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPending, startTransition] = useTransition()
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations("languageSelector")

  const handleLanguageChange = (newLocale: Locale) => {
    if (newLocale === locale) {
      setIsOpen(false)
      return
    }

    startTransition(() => {
      router.replace(pathname, { locale: newLocale })
    })
    setIsOpen(false)
  }

  const currentLanguage = languageConfig[locale]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900 disabled:opacity-50"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={t("label")}
        disabled={isPending}
      >
        <Globe className="h-4 w-4" />
        <span className="ml-1">{currentLanguage?.nativeName || locale.toUpperCase()}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop to close dropdown when clicking outside */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
            <div className="py-1" role="menu" aria-orientation="vertical">
              {Object.entries(languageConfig).map(([langCode, config]) => {
                const isActive = locale === langCode
                return (
                  <button
                    key={langCode}
                    onClick={() => handleLanguageChange(langCode as Locale)}
                    className={`w-full text-left flex items-center justify-between px-4 py-2 text-sm transition-colors ${
                      isActive 
                        ? "bg-gray-100 text-gray-900" 
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                    role="menuitem"
                    disabled={isPending}
                  >
                    <span>{config.nativeName}</span>
                    {isActive && <Check className="h-4 w-4 text-green-600" />}
                  </button>
                )
              })}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
