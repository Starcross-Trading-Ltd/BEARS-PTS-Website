"use client"

import { useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Menu, X } from "lucide-react"
import { Link } from "@/lib/navigation"
import LanguageSelector from "./language-selector"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useTranslations("navigation")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/images/bears-logo.png" alt="BEARS Logo" width={150} height={60} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#0a2240] font-medium">
              {t("home")}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#0a2240] font-medium">
              {t("about")}
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-[#0a2240] font-medium">
              {t("services")}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#0a2240] font-medium">
              {t("contact")}
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-[#0a2240]"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#0a2240] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("home")}
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#0a2240] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("about")}
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-[#0a2240] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("services")}
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#0a2240] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("contact")}
              </Link>
              <div className="pt-2">
                <LanguageSelector />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
