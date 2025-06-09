import Image from "next/image"
import ServiceSidebar from "@/components/service-sidebar"
import ContactSidebar from "@/components/contact-sidebar"
import CompanyDetails from "@/components/company-details"
import WhyChooseUs from "@/components/why-choose-us"

export default function ECMOPage() {
  return (
    <main>
      {/* Header Banner */}
      <div className="bg-purple-50 py-16 relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a2240] mb-4">
              ECMO - Extracorporeal Membrane Oxygenation
            </h1>
            <p className="text-lg text-gray-700">
              At BEARS, we are proud to offer a specialised ECMO (Extracorporeal Membrane Oxygenation) Service,
              delivering advanced life-support transportation solutions for patients with severe respiratory or cardiac
              failure across the UK.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[200px] md:h-[300px] mt-6 md:mt-0">
            <Image src="/images/ecmo-service.jpg" alt="ECMO Service" fill className="object-cover rounded-lg" />
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
                At BEARS, we are proud to offer a specialised ECMO (Extracorporeal Membrane Oxygenation) Service,
                delivering advanced life-support transportation solutions for patients with severe respiratory or
                cardiac failure across the UK.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">What is ECMO?</h2>
              <p>
                ECMO, or Extracorporeal Membrane Oxygenation, is a life-saving technique that provides cardiac and
                respiratory support to patients whose heart and lungs are unable to sustain life on their own. This
                specialized therapy is utilized when conventional treatments have failed, providing temporary support
                for patients with potentially reversible cardiac or respiratory failure.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Our Specialised ECMO Service</h2>
              <p>
                Our ECMO Service is delivered by a specialized team of highly trained medical professionals who are
                experienced in managing complex cardiac and respiratory conditions and transporting critically ill
                patients safely and efficiently.
              </p>

              <div className="relative h-[300px] my-8">
                <Image src="/images/ecmo-team.jpg" alt="ECMO Team" fill className="object-cover rounded-lg" />
              </div>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Advanced Equipment and Vehicles</h2>
              <p>
                We utilize specially designed vehicles equipped with advanced medical equipment and facilities to ensure
                the highest standards of care during transportation. Our vehicles are customized to accommodate the ECMO
                equipment and provide a stable environment for patients during transit. All vehicles undergo regular
                safety checks to guarantee reliability and performance.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">24/7 Availability</h2>
              <p>
                Understanding the serious nature of ECMO support, our ECMO Service is available 24/7, providing rapid
                response and timely transportation to the appropriate healthcare facility. Our team is ready to mobilize
                quickly, ensuring patients receive the critical care they need without delay.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Personalised Care and Support</h2>
              <p>
                At BEARS, we recognize the unique and often life-threatening nature of conditions requiring ECMO
                support. Our team is dedicated with compassion and understanding, providing individualized care and
                support to meet the specific needs of each patient and their families during these challenging times.
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
