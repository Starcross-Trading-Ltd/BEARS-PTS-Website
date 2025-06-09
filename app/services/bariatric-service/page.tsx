import Image from "next/image"
import ServiceSidebar from "@/components/service-sidebar"
import ContactSidebar from "@/components/contact-sidebar"
import CompanyDetails from "@/components/company-details"
import WhyChooseUs from "@/components/why-choose-us"

export default function BariatricServicePage() {
  return (
    <main>
      {/* Header Banner */}
      <div className="bg-yellow-50 py-16 relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a2240] mb-4">Bariatric Service</h1>
            <p className="text-lg text-gray-700">
              At BEARS, we understand the unique challenges and specialised care required for the transportation of
              bariatric patients.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[200px] md:h-[300px] mt-6 md:mt-0">
            <Image src="/images/bariatric.jpg" alt="Bariatric Service" fill className="object-cover rounded-lg" />
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
                At BEARS, we understand the unique challenges and specialised care required for the transportation of
                bariatric patients. Our dedicated Bariatric Service is designed to provide safe, dignified, and
                compassionate transportation solutions for patients with obesity, ensuring their comfort and well-being
                during transit.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">What is Bariatric Transport?</h2>
              <p>
                Bariatric transport refers to the safe and dignified transportation of individuals who are overweight or
                obese and require specialised equipment, vehicles, and trained personnel to ensure their safety,
                comfort, and dignity during transport.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Our Bariatric Service</h2>
              <p>
                Our Bariatric Service is delivered by a team of trained professionals, including healthcare assistants,
                ambulance care assistants, and experienced drivers, who are dedicated to providing safe, comfortable,
                and dignified transportation for bariatric patients.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Specialised Vehicles and Equipment</h2>
              <p>
                We operate a fleet of specially designed vehicles equipped with essential medical equipment, reinforced
                stretchers, heavy-duty, wider wheelchairs, hydraulic lifts, and other amenities to ensure the comfort
                and safety of our bariatric patients. Our vehicles are customised to the highest standards and undergo
                regular safety checks to guarantee reliability and performance.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Personalised Care and Support</h2>
              <p>
                At BEARS, we recognise that each bariatric patient has unique needs and challenges. Our team works
                closely with patients, their families, and healthcare providers to ensure all needs are met during
                transportation, providing a seamless, comfortable, and stress-free journey.
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
