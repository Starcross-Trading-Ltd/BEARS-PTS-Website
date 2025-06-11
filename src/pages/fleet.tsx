
import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../components/language-provider'

export default function FleetPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">{t('fleet.ourFleetTitle')}</h1>
              <p className="text-gray-300">
                {t('fleet.fleetDescription')}
              </p>
            </div>
            <div>
              <img 
                src="/images/fleet/ambulance-main.jpg" 
                alt="BEARS ambulance"
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6">
                {t('fleet.fleetDetails1')}
              </p>
              
              <div className="mb-8">
                <img 
                  src="/images/fleet/ambulance-lineup.jpg" 
                  alt="BEARS ambulance fleet"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <p className="text-gray-700 mb-6">
                {t('fleet.fleetDetails2')}
              </p>
              
              <p className="text-gray-700 mb-8">
                {t('fleet.fleetDetails3')}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <img 
                  src="/images/fleet/driver-1.jpg" 
                  alt="BEARS driver"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img 
                  src="/images/fleet/driver-2.jpg" 
                  alt="BEARS driver"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img 
                  src="/images/fleet/driver-3.jpg" 
                  alt="BEARS driver"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img 
                  src="/images/fleet/driver-4.jpg" 
                  alt="BEARS driver"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-[#0a2240] mb-4">{t('fleet.companyDetailsTitle')}</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>{t('fleet.companyTradingNumber')}</strong> {t('fleet.tradingNumber')}</p>
                  <p><strong>{t('fleet.address')}</strong> {t('fleet.companyAddress')}</p>
                </div>
                
                <div className="mt-6">
                  <Link 
                    to="/contact"
                    className="text-[#4285f4] hover:underline"
                  >
                    {t('fleet.contactForMoreInfo')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
