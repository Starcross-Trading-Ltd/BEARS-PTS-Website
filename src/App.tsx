
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NextIntlClientProvider } from 'next-intl'
import { LanguageProvider } from './components/language-provider'
import Header from './components/header'
import Footer from './components/footer'
import PartnerLogos from './components/partner-logos'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <PartnerLogos />
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
