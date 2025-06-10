
import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../components/language-provider'

export default function NewsPage() {
  const { t } = useLanguage()

  const testimonials = [
    {
      text: "The ambulance crew arrived on time, were very polite and friendly. The journey was comfortable. While in the ambulance, they checked and observed everything. Thank you so much!",
      source: "Guy's and St Thomas' NHS Foundation Trust"
    },
    {
      text: "Crew were brilliant, came on time. Driver was very good and the journey was comfortable. The staff member that stayed in the back, kept me entertained and chatted with me all the way home, putting me at ease. Excellent service, 10/10!",
      source: "St Bartholomew's Hospital"
    }
  ]

  const newsItems = [
    {
      title: "Christmas @ BEARS Ambulance",
      description: "'Tis the season of giving, and our BEARS Ambulance family came together to celebrate the holidays in true emergency services style. Our dedicated team took...",
      image: "/images/christmas.jpg",
      link: "/news/christmas-2024"
    },
    {
      title: "The Pulse Clinical Newsletter #4",
      description: "ISSUE 4 – September 2024 Transportation of patients with chest drains What is a chest drain? A chest drain is a narrow tube that is...",
      image: "/images/neonatal.jpg",
      link: "/news/pulse-newsletter-4"
    },
    {
      title: "The Pulse Clinical Newsletter #3",
      description: "ISSUE 3 – July 2024 Transportation of Children & Young People It is likely that in the course of your duties, you will be asked...",
      image: "/images/neonatal.jpg",
      link: "/news/pulse-newsletter-3"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest News</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Stay updated with the latest news, updates, and stories from BEARS Patient Transport Service.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-8">What people say about us</h2>
          <Link to="/compliments" className="text-[#4285f4] hover:underline mb-8 inline-block">
            Read more compliments →
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border">
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-[#0a2240]">{testimonial.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-8">Latest News</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0a2240] mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Link 
                    to={item.link}
                    className="text-[#4285f4] hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
