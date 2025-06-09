import Image from "next/image"
import ServiceSidebar from "@/components/service-sidebar"
import ContactSidebar from "@/components/contact-sidebar"
import CompanyDetails from "@/components/company-details"
import WhyChooseUs from "@/components/why-choose-us"

export default function ParamedicServicePage() {
  return (
    <main>
      {/* Header Banner */}
      <div className="bg-red-50 py-16 relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a2240] mb-4">Paramedic Service</h1>
            <p className="text-lg text-gray-700">
              At BEARS, we understand that some patients require specialised care and support during transportation.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[200px] md:h-[300px] mt-6 md:mt-0">
            <Image
              src="/images/paramedic-service.jpg"
              alt="Paramedic Service"
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
                Our Paramedic Service is designed to provide advanced medical care to individuals who need a higher
                level of medical supervision and assistance during non-emergency and time-critical journeys.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">What is Paramedic Transport?</h2>
              <p>
                Paramedic Transport involves the safe transportation of patients who require advanced medical care and
                monitoring during their journey. This service is provided by qualified paramedics who are trained to
                handle a wide range of medical situations, ensuring patients receive the highest level of care during
                transportation.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Our Commitment to Safety and Care</h2>
              <p>
                At BEARS, the safety, comfort, and well-being of our patients are our top priorities. Our Paramedic
                Transport service is delivered by highly trained, experienced paramedics who are equipped to provide
                continuous care, monitoring, and support throughout the journey.
              </p>

              <div className="relative h-[300px] my-8">
                <Image src="/images/paramedic-care.jpg" alt="Paramedic Care" fill className="object-cover rounded-lg" />
              </div>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Specialised Vehicles and Equipment</h2>
              <p>
                We utilise specially designed vehicles equipped with advanced medical equipment and facilities to ensure
                the highest standards of care during transportation. Our vehicles are customised to the highest
                standards and undergo regular safety checks to guarantee reliability and performance.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Personalised Care Plans</h2>
              <p>
                Each Paramedic journey is accompanied by a personalised care plan developed in consultation with your
                healthcare providers and family members. This plan outlines the specific medical requirements,
                medication schedules, and any special considerations to be addressed during the journey, ensuring a
                tailored and compassionate approach to care.
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
