
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './components/language-provider'
import Header from './components/header'
import Footer from './components/footer'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import ServicesPage from './pages/services'
import ContactPage from './pages/contact'
import ComplimentsPage from './pages/compliments'
import NewsPage from './pages/news'
import CareersPage from './pages/careers'
import NeptsPage from './pages/services/nepts'
import ParamedicPage from './pages/services/paramedic'
import BariatricPage from './pages/services/bariatric'
import CriticalRetrievalPage from './pages/services/critical-retrieval'
import EcmoPage from './pages/services/ecmo'
import HighDependancePage from './pages/services/high-dependance'
import MentalHealthPage from './pages/services/mental-health'
import NeonatalPage from './pages/services/neonatal'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/nepts" element={<NeptsPage />} />
              <Route path="/services/paramedic" element={<ParamedicPage />} />
              <Route path="/services/bariatric" element={<BariatricPage />} />
              <Route path="/services/critical-retrieval" element={<CriticalRetrievalPage />} />
              <Route path="/services/ecmo" element={<EcmoPage />} />
              <Route path="/services/high-dependance" element={<HighDependancePage />} />
              <Route path="/services/mental-health" element={<MentalHealthPage />} />
              <Route path="/services/neonatal" element={<NeonatalPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/compliments" element={<ComplimentsPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/careers" element={<CareersPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
