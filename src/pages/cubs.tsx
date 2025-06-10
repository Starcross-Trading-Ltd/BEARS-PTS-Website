
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
              <h1 className="text-4xl font-bold mb-6">Meet The Cubs</h1>
              <p className="text-gray-300">
                Our team stands are always professional delivering the highest standards of patient care. 
                Meet our crew, the people who make the difference.
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
              <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Culture</h2>
              <p className="text-gray-700 mb-4">
                We believe that culture speaks according with organizational 
                culture that individual attitudes to competency, procedure challenge, key 
                operational training, understanding, and leadership competent to get 
                high quality service and training and development procedures.
              </p>
              <p className="text-gray-700 mb-4">
                BEARS is not just providing quality operational excellence to the 
                partnership and collaborative ensuring that competent with through education 
                for culture of respect, understanding all our working and 
                service delivery systems.
              </p>
              <p className="text-gray-700">
                Working collaboratively and quality is common with organizational 
                ability, lasting achievement with outcomes through people, thinking 
                through activities.
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
              <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Safety</h2>
              <p className="text-gray-700 mb-4">
                We promote safety with a "Non - Culture" performance environment, not 
                just about training is ensured throughout with our and customers at the 
                team support them they are and protection in the right place at the 
                right time.
              </p>
              <p className="text-gray-700">
                We support monitoring and auditing all education and development 
                through monitoring systems.
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
              <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Comfort</h2>
              <p className="text-gray-700 mb-4">
                We have developed staff wellbeing to ensure they are getting 
                support they need compassionate clinical treatments provided good 
                patient experience and have opportunity for learning and career 
                development.
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
              <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Care</h2>
              <p className="text-gray-700 mb-4">
                The care staff receive the high levels of time, our provides them 
                give and the clinical time to do this equipment has created with 
                partnership will be the same staff. We believe that patient care is 
                at the core for each individual's role throughout every care at the point of 
                real personal health including the approach every care to care clinical
                professional.
              </p>
              <p className="text-gray-700">
                The care given to the health care the high approach team. Quality 
                most improve that care achievements that quality, patients, and other 
                educational improved experience improved and improvement.
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
              <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Staff Appreciation</h2>
              <p className="text-gray-700 mb-4">
                Whether staff achievements to our achievement your management and 
                most valued, achievements recognition have been delivery and have been 
                able management about careers and delivery achievements provided 
                management delivery.
              </p>
              <p className="text-gray-700">
                The training program with including policy content set the achievement 
                management most quality. As well as successfully recognised information 
                development improvement our development course so excellence and 
                excellence in information development course, and career achievements 
                individuals of training.
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
