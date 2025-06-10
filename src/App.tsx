
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './components/language-provider'
import Header from './components/header'
import Footer from './components/footer'
import PartnerLogos from './components/partner-logos'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import ServicesPage from './pages/services'
import NEPTSServicePage from './pages/services/nepts'
import ParamedicServicePage from './pages/services/paramedic'
import BariatricServicePage from './pages/services/bariatric'
import CriticalRetrievalPage from './pages/services/critical-retrieval'
import ECMOServicePage from './pages/services/ecmo'
import HighDependancePage from './pages/services/high-dependance'
import MentalHealthPage from './pages/services/mental-health'
import NeonatalPage from './pages/services/neonatal'
import CareersPage from './pages/careers'
import NewsPage from './pages/news'
import ComplimentsPage from './pages/compliments'

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
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/nepts" element={<NEPTSServicePage />} />
              <Route path="/services/paramedic" element={<ParamedicServicePage />} />
              <Route path="/services/bariatric" element={<BariatricServicePage />} />
              <Route path="/services/critical-retrieval" element={<CriticalRetrievalPage />} />
              <Route path="/services/ecmo" element={<ECMOServicePage />} />
              <Route path="/services/high-dependance" element={<HighDependancePage />} />
              <Route path="/services/mental-health" element={<MentalHealthPage />} />
              <Route path="/services/neonatal" element={<NeonatalPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/compliments" element={<ComplimentsPage />} />
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
