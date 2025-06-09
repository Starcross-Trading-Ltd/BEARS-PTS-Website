"use client"

import { useState } from "react"
import { useLocale } from "next-intl"
import { ChevronDown, Globe } from "lucide-react"
import { Link } from "@/lib/navigation"

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const locale = useLocale()

  // Language names in their native language
  const languageNames: Record<string, { native: string; english: string }> = {
    en: { native: "English", english: "English" },
    ar: { native: "العربية", english: "Arabic" },
    ru: { native: "Русский", english: "Russian" },
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-4 w-4" />
        <span className="ml-1">{languageNames[locale]?.native || locale}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {Object.keys(languageNames).map((lang) => (
              <Link
                key={lang}
                href="/"
                locale={lang}
                className={`block px-4 py-2 text-sm ${
                  locale === lang ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {languageNames[lang]?.native} {locale !== lang && `(${languageNames[lang]?.english})`}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
