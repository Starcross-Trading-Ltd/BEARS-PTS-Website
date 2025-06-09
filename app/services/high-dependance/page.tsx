import Image from "next/image"
import ServiceSidebar from "@/components/service-sidebar"
import ContactSidebar from "@/components/contact-sidebar"
import CompanyDetails from "@/components/company-details"
import WhyChooseUs from "@/components/why-choose-us"

export default function HighDependancePage() {
  return (
    <main>
      {/* Header Banner */}
      <div className="bg-blue-50 py-16 relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a2240] mb-4">High Dependance</h1>
            <p className="text-lg text-gray-700">
              The transportation of critically ill patients who require specialist care during their journey to and from
              hospital.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[200px] md:h-[300px] mt-6 md:mt-0">
            <Image
              src="/images/high-dependance.jpg"
              alt="High Dependance Service"
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
                At BEARS, we understand that some patients require specialised care and support during transportation.
                Our High Dependency Transport service is designed to cater to individuals who need a higher level of
                medical supervision and assistance during non-emergency journeys.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">What is High Dependency Transport?</h2>
              <p>
                High Dependency Transport refers to the safe and secure transportation of patients who require a higher
                level of care and monitoring than standard non-emergency transport. This service is designed to meet the
                specific needs of patients with complex medical conditions who require continuous monitoring and
                reliance on medical equipment during transit.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Our Commitment to Safety and Care</h2>
              <p>
                At BEARS, the safety, comfort, and well-being of our patients are our top priorities. Our High
                Dependency Transport service is delivered by highly trained and experienced medical professionals who
                are equipped to provide continuous care, monitoring, and support throughout the journey.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Specialised Vehicles and Equipment</h2>
              <p>
                We utilise specially designed vehicles equipped with advanced medical equipment and facilities to ensure
                the highest standards of care during transportation. Our vehicles are customised to the highest
                standards and undergo regular safety checks to guarantee reliability and performance.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Personalised Care Plans</h2>
              <p>
                Each High Dependency Transport journey is accompanied by a personalised care plan developed in
                consultation with healthcare providers and family members. This plan outlines the specific medical
                requirements, medication schedules, and any special considerations to be addressed during the journey,
                ensuring a tailored and compassionate approach to care.
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
