import React from 'react'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'

export default function CubsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t("cubs.cubsTitle", "BEARS Cubs")}
        subtitle={t("cubs.cubsDescription", "Supporting our youngest patients and their families with care and compassion.")}
        image="/images/cubs/appreciation-1.jpg"
        imageAlt="BEARS Cubs"
        imagePosition="right"
      />

      {/* Culture Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0a2240] mb-4">{t('cubs.cultureTitle')}</h2>
            <p className="text-gray-700 mb-4 text-lg">
              {t('cubs.cultureDescription1')}
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              {t('cubs.cultureDescription2')}
            </p>
            <p className="text-gray-700 text-lg">
              {t('cubs.cultureDescription3')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/images/cubs/culture-1.jpg" 
              alt="Team culture"
              className="w-full h-40 object-cover rounded-xl shadow"
            />
            <img 
              src="/images/cubs/culture-2.jpg" 
              alt="Team culture"
              className="w-full h-40 object-cover rounded-xl shadow"
            />
            <img 
              src="/images/cubs/culture-3.jpg" 
              alt="Team culture"
              className="w-full h-40 object-cover rounded-xl shadow"
            />
          </div>
        </div>
      </div>

      {/* Safety Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/images/cubs/safety-1.jpg" 
              alt="Safety training"
              className="w-full h-40 object-cover rounded-xl shadow"
            />
            <img 
              src="/images/cubs/safety-2.jpg" 
              alt="Safety equipment"
              className="w-full h-40 object-cover rounded-xl shadow"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0a2240] mb-4">{t('cubs.safetyTitle')}</h2>
            <p className="text-gray-700 mb-4 text-lg">
              {t('cubs.safetyDescription1')}
            </p>
            <p className="text-gray-700 text-lg">
              {t('cubs.safetyDescription2')}
            </p>
          </div>
        </div>
      </div>

      {/* Comfort Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0a2240] mb-4">{t('cubs.comfortTitle')}</h2>
            <p className="text-gray-700 mb-4 text-lg">
              {t('cubs.comfortDescription')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/images/cubs/comfort-1.jpg" 
              alt="Staff comfort"
              className="w-full h-40 object-cover rounded-xl shadow"
            />
            <img 
              src="/images/cubs/comfort-2.jpg" 
              alt="Staff comfort"
              className="w-full h-40 object-cover rounded-xl shadow"
            />
            <img 
              src="/images/cubs/comfort-3.jpg" 
              alt="Staff comfort"
              className="w-full h-40 object-cover rounded-xl shadow"
            />
          </div>
        </div>
      </div>

      {/* Care Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/images/cubs/care-1.jpg" 
              alt="Patient care"
              className="w-full h-40 object-cover rounded-xl shadow"
            />
            <img 
              src="/images/cubs/care-2.jpg" 
              alt="Patient care"
              className="w-full h-40 object-cover rounded-xl shadow"
            />
            <img 
              src="/images/cubs/care-3.jpg" 
              alt="Patient care"
              className="w-full h-40 object-cover rounded-xl shadow"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0a2240] mb-4">{t('cubs.careTitle')}</h2>
            <p className="text-gray-700 mb-4 text-lg">
              {t('cubs.careDescription1')}
            </p>
            <p className="text-gray-700 text-lg">
              {t('cubs.careDescription2')}
            </p>
          </div>
        </div>
      </div>

      {/* Staff Appreciation Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0a2240] mb-4">{t('cubs.staffAppreciationTitle')}</h2>
            <p className="text-gray-700 mb-4 text-lg">
              {t('cubs.staffAppreciationDescription1')}
            </p>
            <p className="text-gray-700 text-lg">
              {t('cubs.staffAppreciationDescription2')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/images/cubs/appreciation-1.jpg" 
              alt="Staff appreciation"
              className="w-full h-40 object-cover rounded-xl shadow"
            />
            <img 
              src="/images/cubs/appreciation-2.jpg" 
              alt="Staff appreciation"
              className="w-full h-40 object-cover rounded-xl shadow"
            />
            <img 
              src="/images/cubs/appreciation-3.jpg" 
              alt="Staff appreciation"
              className="w-full h-40 object-cover rounded-xl shadow"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
