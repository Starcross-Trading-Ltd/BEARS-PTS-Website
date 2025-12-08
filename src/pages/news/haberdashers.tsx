import React from 'react'
import { useLanguage } from '../../components/language-provider'
import HeroSection from '../../components/common/hero-section'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function HaberdashersNewsPage() {
  const { t } = useLanguage()

  const HaberdashersImages = [
    '/images/news/haberdashers/1.jpg',
    '/images/news/haberdashers/3.jpg',
    '/images/news/haberdashers/2.jpg',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
        {/* Hero Section */}
        <HeroSection
            title="BEARS Inspires the Next Generation at Haberdashers’ Knights Academy Career Fair"
            subtitle="BEARS at Haberdashers’ Knights Academy Career Fair"
            image="/images/news/haberdashers/3.jpg"
            imageAlt="Haberdashers’ Knights Academy Career Fair"
            imagePosition="right"
            bgColor="#df750aff"
            imageStyle={{ objectPosition: 'center 10%', height: '300px' }} // Adjust height as needed
        />

      {/* Main Content */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-green-500/5"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          {/* Back to News Link */}
          <div className="mb-8">
            <Link 
              to="/news"
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Link>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                BEARS Inspires the Next Generation at Haberdashers’ Knights Academy Career Fair
              </h1>
              <div className="text-xl text-gray-600 mb-4">December 2025</div>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto mb-8"></div>
            </div>

            <div className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    BEARS was delighted to take part in a recent Careers Fair at a secondary school in Bromley, where we had the fantastic opportunity to introduce students to the world of patient transport and pre-hospital care. <br /><br />

                    Our crew, one of our skilled Paramedics and an Ambulance Care Assistant (ACA), brought along one of our ambulances, giving pupils the chance to get hands-on with real emergency equipment. Students were eager to explore the ambulance, admire the Lifepak monitor, and even experience what it’s like to lie on a stretcher. At one point, a long line formed of enthusiastic young people waiting to climb aboard and learn more!<br /><br />

                    Our ACA shared how much they enjoyed the experience, describing the event as “a great opportunity” and saying they “loved every bit of it.” Their passion for engaging with future healthcare professionals was clear throughout the day.<br /><br />

                    We are also proud to share the wonderful feedback received from the event organiser, who praised our team for their excellent interaction with students and their practical, hands-on approach that really captured interest and curiosity.<br /><br />

                    A huge thank you to the school for the warm welcome and to all the students who took the time to speak with us – your energy and excitement were inspiring. BEARS loves supporting community events like this, helping to spark ambition and highlight the rewarding pathways available in healthcare.<br /><br />

                    We look forward to returning in the future and continuing to champion the next generation of ambulance professionals.

              </p>
            </div>

            {/* Haberdasher Image Gallery */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Highlights from the Haberdashers’ Knights Academy Career Fair
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {HaberdashersImages.slice(0).map((image, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src={image} 
                      alt={`BEARS Christmas Celebration ${index + 1}`}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

                  
          </article>
        </div>
      </section>

    </div>
  )
} 
