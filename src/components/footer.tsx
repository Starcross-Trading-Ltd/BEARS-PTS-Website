
import React from 'react'
import { useLanguage } from './language-provider'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#0a2240] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">BEARS Patient Transport</h3>
            <p className="text-gray-300">
              {t("footer.description", "Providing Safety, Comfort and Care in patient transport services.")}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.quickLinks", "Quick Links")}</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">{t("navigation.home", "Home")}</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">{t("navigation.about", "About")}</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">{t("navigation.contact", "Contact")}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.contact", "Contact Info")}</h3>
            <p className="text-gray-300">Phone: +44 123 456 7890</p>
            <p className="text-gray-300">Email: info@bearsambulance.com</p>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 BEARS Patient Transport Service. {t("footer.rights", "All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  )
}
