import Image from "next/image"
import ServiceSidebar from "@/components/service-sidebar"
import ContactSidebar from "@/components/contact-sidebar"
import CompanyDetails from "@/components/company-details"
import WhyChooseUs from "@/components/why-choose-us"

export default function MentalHealthServicePage() {
  return (
    <main>
      {/* Header Banner */}
      <div className="bg-green-50 py-16 relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a2240] mb-4">Mental Health Service</h1>
            <p className="text-lg text-gray-700">
              At BEARS, we recognise the importance of specialised care and support for individuals requiring time
              critical and non-emergency transport due to mental health challenges.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[200px] md:h-[300px] mt-6 md:mt-0">
            <Image
              src="/images/mental-health.jpg"
              alt="Mental Health Service"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="prose max-w-none">
              <p className="text-lg">
                At BEARS, we recognise the importance of specialised care and support for individuals requiring time
                critical and non-emergency transport due to mental health challenges. Our dedicated mental health
                service is designed to provide safe, dignified, and compassionate transportation for patients
                experiencing a range of mental health conditions across the UK.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Understanding Mental Health Transport</h2>
              <p>
                Transporting individuals with mental health needs requires a sensitive and compassionate approach. Our
                team of specially trained healthcare professionals who understand the complexities and sensitivities
                surrounding mental health needs, ensuring patients receive appropriate care during transportation.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Specialised Training and Expertise</h2>
              <p>
                Our mental health team has received a range of specialist training, including de-escalation techniques,
                mental health awareness, crisis intervention, and restraint techniques. This ensures they are equipped
                to handle a range of situations with compassion, empathy, and professionalism.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Safe and Comfortable Transportation</h2>
              <p>
                We understand that comfortable vehicles are essential for safe and comfortable transportation. Our
                vehicles are designed to provide a calm and relaxing environment while maintaining the comfort of our
                patients during their journey.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="relative h-[200px]">
                  <Image
                    src="/images/mental-health-vehicle-1.jpg"
                    alt="Mental Health Vehicle Interior"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative h-[200px]">
                  <Image
                    src="/images/mental-health-vehicle-2.jpg"
                    alt="Mental Health Transport"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Collaborative Approach to Care</h2>
              <p>
                We work closely with mental health professionals, healthcare providers, and families to ensure a
                coordinated and seamless approach to care. Our collaborative approach ensures that we understand each
                patient's needs, history, and preferences, allowing us to provide tailored support during
                transportation.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Personalised Care Plans</h2>
              <p>
                Each mental health transport journey is accompanied by a personalised care plan developed in
                consultation with the patient, their mental health team, and family members. This plan outlines specific
                needs, potential triggers, medication schedules, and any special considerations to be addressed during
                the journey, ensuring a compassionate and responsive approach to care.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <ContactSidebar />
            <ServiceSidebar />
            <CompanyDetails />
            <WhyChooseUs />
          </div>
        </div>
      </div>
    </main>
  )
}
