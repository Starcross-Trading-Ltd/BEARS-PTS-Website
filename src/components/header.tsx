
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useLanguage } from './language-provider'
import LanguageSelector from './language-selector'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/images/bears-logo.png" alt="BEARS Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#0a2240] font-medium">
              {t("navigation.home", "Home")}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#0a2240] font-medium">
              {t("navigation.about", "About")}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#0a2240] font-medium">
              {t("navigation.contact", "Contact")}
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
                to="/"
                className="text-gray-700 hover:text-[#0a2240] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navigation.home", "Home")}
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-[#0a2240] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navigation.about", "About")}
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-[#0a2240] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navigation.contact", "Contact")}
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
