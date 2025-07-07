import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'
import { Container } from '@/components/ui/container'

export default function ComplimentsPage() {
  const { t } = useLanguage()

  const compliments = [
    {
      text: "Very good service. Crew was very patient and polite.",
      source: "Guy's and St Thomas' NHS Foundation Trust"
    },
    {
      text: "Really nice transfer, good service. Nice, kind people. Lots of respect. Felt at ease.",
      source: "St Bartholomew's Hospital"
    },
    {
      text: "Good service, grateful for their help. You feel like you are in safe hands!",
      source: "St Bartholomew's Hospital"
    },
    {
      text: "BEARS crews are very friendly and very kind. They are competent in their job and they occupied our time with pleasant conversation to have a pleasant journey. Thank you BEARS for having friendly staff.",
      source: "St Bartholomew's Hospital"
    },
    {
      text: "We enjoyed the journey to the hospital today. Very nice and friendly crew. We hope to travel with them again!",
      source: "Guy's and St Thomas' NHS Foundation Trust"
    },
    {
      text: "Crew were brilliant, came on time. Driver was very good and the journey was comfortable. The staff member that stayed in the back, kept me entertained and chatted with me all the way home, putting me at ease. Excellent service, 10/10!",
      source: "St Bartholomew's Hospital"
    },
    {
      text: "Thank you so much for coming to pick us up on time. Good communication, good driver, good paramedic, good service overall. Thank you so much. 10/10",
      source: "Guy's and St Thomas' NHS Foundation Trust"
    },
    {
      text: "Thank you for donating to fund lifesaving research today - your support not only helps us discover more about the heart, but what we can do to protect and save it if something goes wrong. The more we discover, the more lives we can save. Thank you for donating today, you are helping us to protect your heart and bring us closer to the next scientific breakthrough.",
      source: "Friends of Cannons Park"
    },
    {
      text: "Ambulance crew was very good and helpful. The ride to the hospital was smooth and reassuring.",
      source: "St Bartholomew's Hospital"
    },
    {
      text: "Excellent services. Helping and co-operative staff, very professional.",
      source: "Guy's and St Thomas' NHS Foundation Trust"
    },
    {
      text: "We used your service today to help a patient moved from Kings college to Great Ormand Street earlier today and just wanted to pass our thanks on to yourselves and our driver Khalid who was very helpful and friendly throughout.",
      source: "Great Ormand Street Hospital"
    },
    {
      text: "I have use your service and I really like it the way staff treated me they are so kind also I have spine issue so I need extra care and support to bringing me to home or taking me to the hospital yesterday Jonathan Julien and Bogdon Adrian bring me back with very gentle care  I am so happy I just want to say well done and also I  wish I can have them on my all hospital visits Thank you so much for love and support .",
      source: ""
    },
    {
      text: "Really appreciated how reassuring and compassionate the staff has been while transporting me to hospital. They continually made sure I was comfortable and understood what would be happening. They have made this difficult time for me a bit less scary and less lonely. Thank you so much!",
      source: "St Bartholomew's Hospital"
    },
    {
      text: "Staff were polite, pleasant and professional during patient transfer. Safety was maintained at all times.",
      source: "St Bartholomew's Hospital"
    },
    {
      text: "Kind, attentive and thoughtful! Kept us warm, provided us with local recommendations; all around lovely service.",
      source: "Guy's and St Thomas' NHS Foundation Trust"
    },
    {
      text: "Ambulance crew are polite and doing their job to high standards. Thank you!",
      source: "Guy's and St Thomas' NHS Foundation Trust"
    },
    {
      text: "Brilliant service, very courteous and helpful. Cannot ask for better services than this. Very happy!",
      source: "St Bartholomew's Hospital"
    },
    {
      text: "Staff were very friendly, helpful and reassuring. They made my mum felt at ease. The journey was stress free. Thank you!",
      source: "St Bartholomew's Hospital"
    },
    {
      text: "Kind, understanding, very pleasant! Comfortable journey, the staff did all they could to make me comfortable. Appreciate it very much.",
      source: "St Bartholomew's Hospital"
    },
    {
      text: "The ambulance crew arrived on time, were very polite and friendly. The journey was comfortable. While in the ambulance, they checked and observed everything. Thank you so much!",
      source: "Guy's and St Thomas' NHS Foundation Trust"
    },
    {
      text: "Very professional. Very amicable. Much appreciated!",
      source: "St Bartholomew's Hospital"
    },
    {
      text: "Wonderful journey with the crew, great chatting with the staff member that stayed in the back with me. Absolutely looked after well by the crew and they are an asset to the ambulance service.",
      source: "Guy's and St Thomas' NHS Foundation Trust"
    },
    {
      text: "Excellent crew, came on time. Very happy with our journey home. Attentive and friendly, got us home in good time.",
      source: "Guy's and St Thomas' NHS Foundation Trust"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t("compliments.complimentsTitle", "Compliments")}
        subtitle={t("compliments.complimentsDescription", "Read what our patients and healthcare partners say about our services.")}
        image="/images/ambulance.png"
        imageAlt="Ambulance"
        imagePosition="right"
        bgColor="#388e6c"
      />

      {/* Compliments Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {compliments.map((compliment, index) => (
              <div
                key={index}
                className="relative p-8 rounded-2xl border border-[#00855a]/30 shadow-lg bg-white/60 backdrop-blur-md hover:shadow-2xl transition-shadow"
                style={{ minHeight: '200px' }}
              >
                {/* Small quote icon in top left */}
                <svg
                  className="absolute top-4 left-4 w-7 h-7 text-[#00855a]/60"
                  fill="none"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <text x="0" y="28" fontSize="32" fontWeight="bold" fill="currentColor">“</text>
                </svg>
                <div className="relative z-10 text-left">
                  <p className="text-lg text-gray-800 italic font-medium">"{compliment.text}"</p>
                  <div className="mt-4 text-right">
                    <p className="text-xl font-extrabold text-[#00855a]">{compliment.source}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">{t("compliments.experienceServiceTitle", "Experience Our Service")}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              {t("compliments.experienceServiceDescription", "We are proud of the positive feedback we receive from our patients and partners. If you would like to experience our high-quality service, please get in touch.")}
            </p>
            <Link 
              to="/contact"
              className="inline-block px-10 py-4 bg-[#00855a] text-white text-xl font-semibold rounded-lg shadow hover:bg-[#006e4a] transition-colors"
            >
              {t("compliments.contactUsToday", "Contact Us Today")}
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}
