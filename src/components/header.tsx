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
        { label: t("navigation.meetTheTeam", "Meet the Team"), href: "/team" },
        { label: t("navigation.meetTheCubs", "Meet the Cubs"), href: "/cubs" },
        { label: t("navigation.ourValues", "Our Values"), href: "/our-values" },
        { label: t("navigation.ourFleet", "Our Fleet"), href: "/fleet" },
        { label: t("navigation.bearsInNumbers", "BEARS in Numbers"), href: "/bears-in-numbers" }
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
    { label: t("navigation.compliments", "Compliments"), href: "/compliments" },
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
    <header className="bg-white/90 backdrop-blur shadow-sm sticky top-0 z-50 border-b border-gray-100" role="banner">
      <nav className="container mx-auto px-4 flex items-center h-20" role="navigation" aria-label="Main navigation">
        {/* Logo on the left */}
          <Link 
            to="/" 
          className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary rounded mt-6"
            aria-label="BEARS - Home"
          >
          <div className="bg-white rounded-full shadow-xl flex items-center justify-center w-28 h-28 border-4 border-white mt-2">
            <img 
              src="/images/bears-pts logo.jpg" 
              alt="BEARS Logo" 
              className="w-24 h-24 object-contain rounded-full"
            />
          </div>
          </Link>
        {/* Navigation */}
        <div className="flex-1 flex items-center justify-center h-full">
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.href} className="relative group">
                <div className="flex items-center">
                  <Link
                    to={item.href}
                    className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${
                      isActive(item.href)
                        ? 'text-primary bg-green-50 shadow-sm'
                        : 'text-gray-700 hover:text-primary hover:bg-green-50/60'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <ChevronDown className="ml-1 h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                  )}
                </div>
                {/* Submenu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block px-4 py-2 text-base text-gray-700 hover:bg-green-50 hover:text-primary rounded-lg transition-all"
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
        </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button
              onClick={toggleMenu}
            className="p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
        </div>
      </nav>
        {/* Mobile Navigation */}
        {isMenuOpen && (
        <div className="md:hidden py-4 border-t bg-white/95 shadow-lg rounded-b-xl animate-fade-in-down">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <div key={item.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.href}
                      onClick={item.submenu ? undefined : toggleMenu}
                    className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all flex-1 ${
                        isActive(item.href)
                        ? 'text-primary bg-green-50 shadow-sm'
                        : 'text-gray-700 hover:text-primary hover:bg-green-50/60'
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
                        className="block px-4 py-2 text-base text-gray-600 hover:text-primary hover:bg-green-50 rounded-lg transition-all"
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
    </header>
  )
}

export default Header
