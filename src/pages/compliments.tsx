
import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../components/language-provider'

export default function ComplimentsPage() {
  const { t } = useLanguage()

  const compliments = [
    {
      text: t("testimonials.testimonial1", "The ambulance crew arrived on time, were very polite and friendly. The journey was comfortable. While in the ambulance, they checked and observed everything. Thank you so much!"),
      source: t("testimonials.testimonial1Source", "Guy's and St Thomas' NHS Foundation Trust")
    },
    {
      text: t("testimonials.testimonial2", "Crew were brilliant, came on time. Driver was very good and the journey was comfortable. The staff member that stayed in the back, kept me entertained and chatted with me all the way home, putting me at ease. Excellent service, 10/10!"),
      source: t("testimonials.testimonial2Source", "St Bartholomew's Hospital")
    },
    {
      text: t("compliments.testimonial3", "Professional, caring and efficient service. The team made what could have been a stressful journey very comfortable."),
      source: t("compliments.testimonial3Source", "Royal London Hospital")
    },
    {
      text: t("compliments.testimonial4", "Outstanding care and attention to detail. The crew went above and beyond to ensure patient comfort and safety."),
      source: t("compliments.testimonial4Source", "King's College Hospital")
    },
    {
      text: t("compliments.testimonial5", "Excellent communication throughout the transport. Family felt well-informed and supported during a difficult time."),
      source: t("compliments.testimonial5Source", "Great Ormond Street Hospital")
    },
    {
      text: t("compliments.testimonial6", "The BEARS team showed incredible professionalism and compassion. Highly recommend their services."),
      source: t("compliments.testimonial6Source", "Imperial College Healthcare")
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("compliments.complimentsTitle", "Compliments")}</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {t("compliments.complimentsDescription", "Read what our patients and healthcare partners say about our services.")}
          </p>
        </div>
      </section>

      {/* Compliments Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {compliments.map((compliment, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border hover:shadow-xl transition-shadow">
                <p className="text-gray-700 mb-4 italic">"{compliment.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-[#0a2240]">{compliment.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-6">{t("compliments.experienceServiceTitle", "Experience Our Service")}</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {t("compliments.experienceServiceDescription", "Join the many healthcare providers and patients who trust BEARS for their transport needs.")}
          </p>
          <Link 
            to="/contact"
            className="inline-block px-8 py-3 bg-[#00855a] text-white font-medium rounded hover:bg-[#006e4a] transition-colors"
          >
            {t("compliments.contactUsToday", "Contact Us Today")}
          </Link>
        </div>
      </section>
    </div>
  )
}
