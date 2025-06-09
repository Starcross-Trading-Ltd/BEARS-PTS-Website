"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { redirect } from "next/navigation"
import { defaultLocale } from "@/i18n.config"

// Redirect from the root page to the default locale
export default function RootPage() {
  redirect(`/${defaultLocale}`)
}

export function HomeContent() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0a2240] mb-6">
                {t("heroTitle", "Providing Safety, Comfort and Care")}
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                {t(
                  "heroDescription",
                  "We provide a high quality ambulance service taking great care and pride in our work with the highest priority on transporting patients with SAFETY, COMFORT and CARE.",
                )}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-[#00855a] text-white font-medium rounded hover:bg-[#006e4a] transition-colors"
                >
                  {t("getInTouch", "Get in touch")}
                </Link>
                <Link
                  href="/about"
                  className="px-6 py-3 border border-[#0a2240] text-[#0a2240] font-medium rounded hover:bg-gray-50 transition-colors"
                >
                  {t("learnMore", "Learn more")}
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/images/paramedic.jpg"
                alt="BEARS Paramedic"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <Image src="/images/ambulance.jpg" alt="BEARS Ambulance" fill className="object-cover rounded-lg" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a2240] mb-6">
                {t("coreValuesTitle", "Our Core Values")}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {t("coreValuesDescription", "BEARS core values are safety, comfort, and care, we ensure:")}
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4285f4] flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    {t("serviceQuality", "We get our service quality right the first time")}
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4285f4] flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    {t("efficientCare", "We are efficient with passion for patient care")}
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4285f4] flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">{t("bestValue", "We ensure best value for money")}</p>
                </div>
              </div>

              <Link href="/about/values" className="inline-flex items-center text-[#4285f4] mt-6 hover:underline">
                {t("moreAboutValues", "More about our core values")} <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Service Section */}
      <section className="bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-0 max-w-md">
              {t("seamlessService", "Delivering a seamless service for our patients")}
            </h2>
            <div>
              <p className="text-lg mb-6 max-w-md">
                {t(
                  "innovativePractices",
                  "BEARS is constantly driven to find ways of developing efficiencies and innovative practices.",
                )}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-[#4285f4] text-white font-medium rounded hover:bg-opacity-90 transition-colors"
                >
                  {t("getInTouch", "Get in touch")}
                </Link>
                <Link
                  href="/services"
                  className="px-6 py-3 border border-white text-white font-medium rounded hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                  {t("viewAllServices", "View all services")}
                </Link>
              </div>
            </div>
          </div>

          {/* Service Cards - First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <ServiceCard
              title={t("highDependance", "High Dependance")}
              description={t(
                "highDependanceDesc",
                "The transportation of critically ill patients who require specialist care during their journey to and from hospital.",
              )}
              iconColor="blue"
              href="/services/high-dependance"
            />

            <ServiceCard
              title={t("specialistCritical", "Specialist Critical Retrieval Response Service")}
              description={t(
                "specialistCriticalDesc",
                "An intensive care service, transporting critically ill children from local hospitals to intensive care units",
              )}
              iconColor="blue"
              href="/services/specialist-critical-retrieval-response-service"
            />

            <ServiceCard
              title={t("ecmo", "ECMO - Extracorporeal Membrane Oxygenation")}
              description={t(
                "ecmoDesc",
                "At BEARS, we are proud to offer a specialised ECMO (Extracorporeal Membrane Oxygenation) Service, delivering advanced life-support transportation solutions for patients with severe respiratory or cardiac failure across the UK.",
              )}
              iconColor="purple"
              href="/services/extracorporeal-membrane-oxygenation"
            />
          </div>

          {/* Service Cards - Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <ServiceCard
              title={t("mentalHealth", "Mental Health Service")}
              description={t(
                "mentalHealthDesc",
                "At BEARS, we recognise the importance of specialised care and support for individuals requiring time critical and non-emergency transport due to mental health challenges.",
              )}
              iconColor="green"
              href="/services/mental-health-service"
            />

            <ServiceCard
              title={t("nepts", "Non Emergency Patient Transport Service (NEPTS)")}
              description={t(
                "neptsDesc",
                "At BEARS, we specialise in providing reliable and compassionate Non-Emergency Patient Transport (NEPT) services across the UK.",
              )}
              iconColor="green"
              href="/services/non-emergency-patient-transport-service"
            />

            <ServiceCard
              title={t("bariatric", "Bariatric Service")}
              description={t(
                "bariatricDesc",
                "At BEARS, we understand the unique challenges and specialised care required for the transportation of bariatric patients.",
              )}
              iconColor="yellow"
              href="/services/bariatric-service"
            />
          </div>

          {/* Service Cards - Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              title={t("paramedic", "Paramedic Service")}
              description={t(
                "paramedicDesc",
                "At BEARS, we understand that some patients require specialised care and support during transportation.",
              )}
              iconColor="red"
              href="/services/paramedic-service"
            />

            <ServiceCard
              title={t("neonatal", "Neonatal and Paediatric intensive care transfer service")}
              description={t(
                "neonatalDesc",
                "At BEARS, we recognise the critical nature of medical transportation for neonatal and Paediatric patients requiring urgent care and specialised support.",
              )}
              iconColor="pink"
              href="/services/neonatal-and-paediatric-intensive-care-transfer-service"
            />

            <ServiceCard
              title={t("clinicalHelpline", "BEARS Clinical Helpline")}
              description={t(
                "clinicalHelplineDesc",
                "At BEARS, we Strive to support our staff and provide 24/7 access to clinical support through our clinical help line.",
              )}
              iconColor="gray"
              href="/services/bears-clinical-helpline"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2240] mb-6">
            {t("whatPeopleSay", "What people say about us")}
          </h2>

          <Link href="/compliments" className="inline-flex items-center text-[#4285f4] mb-12 hover:underline">
            {t("readMoreCompliments", "Read more compliments")} <ArrowRight className="ml-1 h-4 w-4" />
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-6">
                {t(
                  "testimonial1",
                  "The ambulance crew arrived on time, were very polite and friendly. The journey was comfortable. While in the ambulance, they checked and observed everything. Thank you so much!",
                )}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-[#0a2240] font-medium">
                  {t("testimonial1Source", "Guy's and St Thomas' NHS Foundation Trust")}
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 border-pink-100">
              <p className="text-gray-700 mb-6">
                {t(
                  "testimonial2",
                  "Crew were brilliant, came on time. Driver was very good and the journey was comfortable. The staff member that stayed in the back, kept me entertained and chatted with me all the way home, putting me at ease. Excellent service, 10/10!",
                )}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-[#0a2240] font-medium">{t("testimonial2Source", "St Bartholomew's Hospital")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2240] mb-12">{t("latestNews", "Latest News")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/christmas.jpg" alt="Christmas at BEARS" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a2240] mb-3">
                  {t("christmasTitle", "Christmas @ BEARS Ambulance")}
                </h3>
                <p className="text-gray-700 mb-4">
                  {t(
                    "christmasExcerpt",
                    "'Tis the season of giving, and our BEARS Ambulance family came together to celebrate the holidays in true emergency services style. Our dedicated team took ...",
                  )}
                </p>
                <Link href="/news/christmas" className="text-[#4285f4] hover:underline">
                  {t("readMore", "Read more")}
                </Link>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative h-48 bg-[#0a2240] flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white text-center">
                  {t("pulseTitle", "The Pulse Clinical Newsletter")}
                </h3>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a2240] mb-3">
                  {t("pulseTitle", "The Pulse Clinical Newsletter")} #4
                </h3>
                <p className="text-gray-700 mb-4">
                  {t(
                    "pulse4Excerpt",
                    "ISSUE 4 – September 2024 Transportation of patients with chest drains What is a chest drain? A chest drain is a narrow tube that is ...",
                  )}
                </p>
                <Link href="/news/pulse-4" className="text-[#4285f4] hover:underline">
                  {t("readMore", "Read more")}
                </Link>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative h-48 bg-[#0a2240] flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white text-center">
                  {t("pulseTitle", "The Pulse Clinical Newsletter")}
                </h3>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a2240] mb-3">
                  {t("pulseTitle", "The Pulse Clinical Newsletter")} #3
                </h3>
                <p className="text-gray-700 mb-4">
                  {t(
                    "pulse3Excerpt",
                    "ISSUE 3 – July 2024 Transportation of Children & Young People It is likely that in the course of your duties, you will be asked ...",
                  )}
                </p>
                <Link href="/news/pulse-3" className="text-[#4285f4] hover:underline">
                  {t("readMore", "Read more")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export function Home() {
  return <HomeContent />
}

interface ServiceCardProps {
  title: string
  description: string
  iconColor: "blue" | "green" | "purple" | "yellow" | "red" | "pink" | "gray"
  href: string
}

function ServiceCard({ title, description, iconColor, href }: ServiceCardProps) {
  const getColorClasses = () => {
    switch (iconColor) {
      case "blue":
        return "bg-blue-100"
      case "green":
        return "bg-green-100"
      case "purple":
        return "bg-purple-100"
      case "yellow":
        return "bg-yellow-100"
      case "red":
        return "bg-red-100"
      case "pink":
        return "bg-pink-100"
      case "gray":
        return "bg-gray-100"
      default:
        return "bg-blue-100"
    }
  }

  const getIconColorClasses = () => {
    switch (iconColor) {
      case "blue":
        return "text-blue-500"
      case "green":
        return "text-green-500"
      case "purple":
        return "text-purple-500"
      case "yellow":
        return "text-yellow-500"
      case "red":
        return "text-red-500"
      case "pink":
        return "text-pink-500"
      case "gray":
        return "text-gray-500"
      default:
        return "text-blue-500"
    }
  }

  return (
    <Link href={href} className="block bg-white rounded-lg p-6 transition-all hover:shadow-md">
      <div className={`w-12 h-12 rounded-full ${getColorClasses()} flex items-center justify-center mb-4`}>
        <svg
          className={`w-6 h-6 ${getIconColorClasses()}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <h3 className="text-xl font-bold text-[#0a2240] mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </Link>
  )
}
