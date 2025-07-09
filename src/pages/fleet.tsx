import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'

export default function FleetPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t('fleet.ourFleetTitle')}
        subtitle={t('fleet.fleetDescription')}
        image="/images/ambulance.png"
        imageAlt="BEARS ambulance"
        imagePosition="right"
      />

      {/* Fleet Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg">
                  {t('fleet.fleetDetails1')}
                </p>
                <div className="mb-8">
                  <img 
                    src="/images/fleet_five.png" 
                    alt="BEARS ambulance fleet - five vehicles"
                    className="w-full h-64 object-cover rounded-xl shadow border-4 border-white"
                  />
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  {t('fleet.fleetDetails2')}
                </p>
                <p className="text-gray-700 mb-8 text-lg">
                  {t('fleet.fleetDetails3')}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <img 
                    src="/images/fleet_four.png" 
                    alt="BEARS ambulance fleet - four vehicles"
                    className="w-full h-32 object-cover rounded-xl shadow"
                  />
                  <img 
                    src="/images/fleet_one.png" 
                    alt="BEARS ambulance fleet - one vehicle"
                    className="w-full h-32 object-cover rounded-xl shadow"
                  />
                  <img 
                    src="/images/fleet_six.png" 
                    alt="BEARS ambulance fleet - six vehicles"
                    className="w-full h-32 object-cover rounded-xl shadow"
                  />
                  <img 
                    src="/images/fleet_three.png" 
                    alt="BEARS ambulance fleet - three vehicles"
                    className="w-full h-32 object-cover rounded-xl shadow"
                  />
                  <img 
                    src="/images/fleet_two.png" 
                    alt="BEARS ambulance fleet - two vehicles"
                    className="w-full h-32 object-cover rounded-xl shadow"
                  />
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-8 rounded-xl shadow">
                  <h3 className="text-2xl font-bold text-[#0a2240] mb-4">{t('fleet.companyDetailsTitle')}</h3>
                  <div className="space-y-2 text-lg">
                    <p><strong>{t('fleet.companyTradingNumber')}</strong> {t('fleet.tradingNumber')}</p>
                    <p><strong>{t('fleet.address')}</strong> {t('fleet.companyAddress')}</p>
                  </div>
                  <div className="mt-6">
                    <Link 
                      to="/contact"
                      className="text-[#4285f4] hover:underline text-lg"
                    >
                      {t('fleet.contactForMoreInfo')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
