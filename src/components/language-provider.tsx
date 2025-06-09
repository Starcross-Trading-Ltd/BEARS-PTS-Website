
"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import { locales, defaultLocale, type Locale } from '../i18n.config'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string, fallback?: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const [messages, setMessages] = useState<Record<string, any>>({})

  useEffect(() => {
    // Load messages for current locale
    const loadMessages = async () => {
      try {
        const response = await import(`../messages/${locale}.json`)
        setMessages(response.default)
      } catch (error) {
        console.error(`Failed to load messages for locale: ${locale}`, error)
        // Fallback to default locale
        try {
          const fallbackResponse = await import(`../messages/${defaultLocale}.json`)
          setMessages(fallbackResponse.default)
        } catch (fallbackError) {
          console.error(`Failed to load fallback messages`, fallbackError)
        }
      }
    }

    loadMessages()
  }, [locale])

  const t = (key: string, fallback?: string): string => {
    const keys = key.split('.')
    let value = messages
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return fallback || key
      }
    }
    
    return typeof value === 'string' ? value : fallback || key
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
