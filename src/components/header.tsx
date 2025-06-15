
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useLanguage } from './language-provider'
import LanguageSelector from './language-selector'
import { ROUTES, SERVICE_ROUTES } from '../config/constants'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const { t } = useLanguage()
  const location = useLocation()

  const navigationItems = [
    { label: t("navigation.home", "Home"), href: ROUTES.home },
    { 
      label: t("navigation.about", "About"), 
      href: ROUTES.about,
      submenu: [
        { label: "Meet the Team", href: "/team" },
        { label: "Meet the Cubs", href: "/cubs" },
        { label: "Our Values", href: "/our-values" },
        { label: "Our Fleet", href: "/fleet" },
        { label: "BEARS in Numbers", href: "/bears-in-numbers" }
      ]
    },
    { 
      label: t("navigation.services", "Services"), 
      href: ROUTES.services,
      submenu: [
        { label: t("services.nepts.title", "NEPTS"), href: SERVICE_ROUTES.nepts },
        { label: t("services.paramedic.title", "Paramedic Service"), href: SERVICE_ROUTES.paramedic },
        { label: t("services.bariatric.title", "Bariatric Service"), href: SERVICE_ROUTES.bariatric },
        { label: t("services.criticalRetrieval.title", "Critical Care Retrieval"), href: SERVICE_ROUTES.criticalRetrieval },
        { label: t("services.ecmo.title", "ECMO Service"), href: SERVICE_ROUTES.ecmo },
        { label: t("services.highDependance.title", "High Dependance"), href: SERVICE_ROUTES.highDependance },
        { label: t("services.mentalHealth.title", "Mental Health Transport"), href: SERVICE_ROUTES.mentalHealth },
        { label: t("services.neonatal.title", "Neonatal Transport"), href: SERVICE_ROUTES.neonatal }
      ]
    },
    { label: t("navigation.contact", "Contact"), href: ROUTES.contact },
    { label: t("navigation.careers", "Careers"), href: ROUTES.careers },
    { label: t("navigation.news", "News"), href: ROUTES.news }
  ]

  const isActive = (href: string) => {
    if (href === '/' && location.pathname === '/') return true
    if (href !== '/' && location.pathname.startsWith(href)) return true
    return false
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50" role="banner">
      <nav className="container mx-auto px-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            aria-label="BEARS - Home"
          >
            <img 
              src="/images/bears-logo.png" 
              alt="BEARS Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-[#0a2240]">BEARS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.href} className="relative group">
                <div className="flex items-center">
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isActive(item.href)
                        ? 'text-[#4285f4] bg-blue-50'
                        : 'text-gray-700 hover:text-[#4285f4] hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <ChevronDown className="ml-1 h-4 w-4 text-gray-400 group-hover:text-[#4285f4] transition-colors" />
                  )}
                </div>
                
                {/* Submenu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-1 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#4285f4] transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <LanguageSelector />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <div key={item.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.href}
                      onClick={item.submenu ? undefined : toggleMenu}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors flex-1 ${
                        isActive(item.href)
                          ? 'text-[#4285f4] bg-blue-50'
                          : 'text-gray-700 hover:text-[#4285f4] hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <button
                        onClick={() => {
                          if (item.label === 'About') {
                            setIsAboutDropdownOpen(!isAboutDropdownOpen)
                          }
                        }}
                        className="p-2 text-gray-600"
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform ${
                          (item.label === 'About' && isAboutDropdownOpen) ? 'rotate-180' : ''
                        }`} />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile submenu */}
                  {item.submenu && (
                    <div className={`ml-4 mt-2 space-y-1 ${
                      item.label === 'About' ? (isAboutDropdownOpen ? 'block' : 'hidden') : 
                      (isActive(item.href) ? 'block' : 'hidden')
                    }`}>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          onClick={toggleMenu}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-[#4285f4] hover:bg-gray-50 rounded-md"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
