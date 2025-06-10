
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useLanguage } from './language-provider'
import LanguageSelector from './language-selector'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const { t } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const services = [
    { title: "NEPTS", link: "/services/nepts" },
    { title: "Paramedic Service", link: "/services/paramedic" },
    { title: "Bariatric Service", link: "/services/bariatric" },
    { title: "Critical Care Retrieval", link: "/services/critical-retrieval" },
    { title: "ECMO Service", link: "/services/ecmo" },
    { title: "High Dependance", link: "/services/high-dependance" },
    { title: "Mental Health Service", link: "/services/mental-health" },
    { title: "Neonatal Transport", link: "/services/neonatal" }
  ]

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
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-[#0a2240] font-medium"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Our Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-2">
                    <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">All Services</Link>
                    {services.map((service, index) => (
                      <Link 
                        key={index}
                        to={service.link} 
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/careers" className="text-gray-700 hover:text-[#0a2240] font-medium">
              Join Us
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#0a2240] font-medium">
              {t("navigation.about", "About Us")}
            </Link>
            <Link to="/compliments" className="text-gray-700 hover:text-[#0a2240] font-medium">
              Compliments
            </Link>
            <Link to="/news" className="text-gray-700 hover:text-[#0a2240] font-medium">
              News
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#0a2240] font-medium">
              {t("navigation.contact", "Contact Us")}
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
                to="/services"
                className="text-gray-700 hover:text-[#0a2240] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Services
              </Link>
              <Link
                to="/careers"
                className="text-gray-700 hover:text-[#0a2240] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Us
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-[#0a2240] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navigation.about", "About")}
              </Link>
              <Link
                to="/compliments"
                className="text-gray-700 hover:text-[#0a2240] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Compliments
              </Link>
              <Link
                to="/news"
                className="text-gray-700 hover:text-[#0a2240] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                News
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
