import React from 'react'
import { useLanguage } from '../components/language-provider'
import NewsGrid from '../components/news/news-grid'
import { motion } from 'framer-motion'

export default function NewsPage() {
  const { t } = useLanguage()

  return (
    <>
      {/* Compact Redesigned Hero Section */}
      <section className="relative min-h-[50vh] bg-gradient-to-br from-primary via-blue-600 to-purple-700 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-8 w-20 h-20 bg-white/5 rounded-full blur-lg animate-pulse"></div>
          <div className="absolute bottom-16 right-8 w-24 h-24 bg-white/3 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/4 rounded-full blur-md animate-pulse delay-500"></div>
        </div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.2"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Removed all floating elements for cleaner design */}
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="text-center text-white">
            {/* Compact Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
            >
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-xs font-medium">Latest Updates</span>
            </motion.div>

            {/* Compact Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Latest News
              </span>
            </motion.h1>

            {/* Compact Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Stay updated with the latest developments, achievements, and stories from BEARS Ambulance Service
            </motion.p>

            {/* Compact Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">10+</div>
                <div className="text-blue-100 font-medium">Latest Articles</div>
              </motion.div>
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">24/7</div>
                <div className="text-blue-100 font-medium">Service Updates</div>
              </motion.div>
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">100%</div>
                <div className="text-blue-100 font-medium">Professional Care</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced News Grid Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          {/* Compact Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Latest Updates
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Latest Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the latest news, achievements, and developments from BEARS Ambulance Service
            </p>
          </motion.div>

          {/* News Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <NewsGrid />
          </motion.div>
        </div>
      </section>
    </>
  )
}
