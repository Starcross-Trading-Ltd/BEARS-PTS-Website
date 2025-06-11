
import React from 'react'
import { useLanguage } from '../components/language-provider'

export default function CubsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">{t('cubs.meetTheCubsTitle')}</h1>
              <p className="text-gray-300">
                {t('cubs.cubsDescription')}
              </p>
            </div>
            <div>
              <img 
                src="/images/cubs/staff-member.jpg" 
                alt="BEARS staff member"
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t('cubs.cultureTitle')}</h2>
              <p className="text-gray-700 mb-4">
                {t('cubs.cultureDescription1')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('cubs.cultureDescription2')}
              </p>
              <p className="text-gray-700">
                {t('cubs.cultureDescription3')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/cubs/culture-1.jpg" 
                alt="Team culture"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img 
                src="/images/cubs/culture-2.jpg" 
                alt="Team culture"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img 
                src="/images/cubs/culture-3.jpg" 
                alt="Team culture"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/cubs/safety-1.jpg" 
                alt="Safety training"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img 
                src="/images/cubs/safety-2.jpg" 
                alt="Safety equipment"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t('cubs.safetyTitle')}</h2>
              <p className="text-gray-700 mb-4">
                {t('cubs.safetyDescription1')}
              </p>
              <p className="text-gray-700">
                {t('cubs.safetyDescription2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comfort Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t('cubs.comfortTitle')}</h2>
              <p className="text-gray-700 mb-4">
                {t('cubs.comfortDescription')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/cubs/comfort-1.jpg" 
                alt="Staff comfort"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img 
                src="/images/cubs/comfort-2.jpg" 
                alt="Staff comfort"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img 
                src="/images/cubs/comfort-3.jpg" 
                alt="Staff comfort"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Care Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/cubs/care-1.jpg" 
                alt="Patient care"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img 
                src="/images/cubs/care-2.jpg" 
                alt="Patient care"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img 
                src="/images/cubs/care-3.jpg" 
                alt="Patient care"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t('cubs.careTitle')}</h2>
              <p className="text-gray-700 mb-4">
                {t('cubs.careDescription1')}
              </p>
              <p className="text-gray-700">
                {t('cubs.careDescription2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Appreciation Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t('cubs.staffAppreciationTitle')}</h2>
              <p className="text-gray-700 mb-4">
                {t('cubs.staffAppreciationDescription1')}
              </p>
              <p className="text-gray-700">
                {t('cubs.staffAppreciationDescription2')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/cubs/appreciation-1.jpg" 
                alt="Staff appreciation"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img 
                src="/images/cubs/appreciation-2.jpg" 
                alt="Staff appreciation"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img 
                src="/images/cubs/appreciation-3.jpg" 
                alt="Staff appreciation"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
