"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"

type Language = {
  code: string
  name: string
  nativeName: string
  dir?: "ltr" | "rtl"
}

export const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", dir: "ltr" },
  { code: "ar", name: "Arabic", nativeName: "العربية", dir: "rtl" },
  { code: "ru", name: "Russian", nativeName: "Русский", dir: "ltr" },
]

type LanguageContextType = {
  language: string
  translations: Record<string, string>
  setLanguage: (code: string) => void
  t: (key: string, fallback?: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  translations: {},
  setLanguage: () => {},
  t: (key: string, fallback?: string) => fallback || key,
})

export const useLanguage = () => useContext(LanguageContext)

export function LanguageProvider({
  children,
  initialLanguage = "en",
  translations = {},
}: {
  children: React.ReactNode
  initialLanguage?: string
  translations?: Record<string, string>
}) {
  const [language, setLanguageState] = useState(initialLanguage)
  const router = useRouter()

  // Function to translate text
  const t = (key: string, fallback?: string): string => {
    return translations[key] || fallback || key
  }

  // Function to change language
  const setLanguage = (code: string) => {
    if (code === language) return

    // Set language in state
    setLanguageState(code)

    // Save language preference in cookie
    Cookies.set("selectedLanguage", code, { expires: 365, path: "/" })

    // Reload the page to apply the language change
    window.location.reload()
  }

  // Initialize language from cookie on client-side
  useEffect(() => {
    const savedLanguage = Cookies.get("selectedLanguage")
    if (savedLanguage && savedLanguage !== language) {
      setLanguageState(savedLanguage)
    }

    // Apply RTL styling if needed
    const currentLang = languages.find((lang) => lang.code === language)
    if (currentLang?.dir === "rtl") {
      document.documentElement.dir = "rtl"
      document.body.classList.add("rtl")
    } else {
      document.documentElement.dir = "ltr"
      document.body.classList.remove("rtl")
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage, t }}>{children}</LanguageContext.Provider>
  )
}
