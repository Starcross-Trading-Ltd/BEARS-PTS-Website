import Image from "next/image"
import ServiceSidebar from "@/components/service-sidebar"
import ContactSidebar from "@/components/contact-sidebar"
import CompanyDetails from "@/components/company-details"
import WhyChooseUs from "@/components/why-choose-us"

export default function NEPTSPage() {
  return (
    <main>
      {/* Header Banner */}
      <div className="bg-green-50 py-16 relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a2240] mb-4">
              Non Emergency Patient Transport Service (NEPTS)
            </h1>
            <p className="text-lg text-gray-700">
              At BEARS, we specialise in providing reliable and compassionate Non-Emergency Patient Transport (NEPT)
              services across the UK.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[200px] md:h-[300px] mt-6 md:mt-0">
            <Image
              src="/images/nepts.jpg"
              alt="Non Emergency Patient Transport Service"
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
                At BEARS, we specialise in providing reliable and compassionate Non-Emergency Patient Transport (NEPT)
                services across the UK. Our dedicated team is committed to ensuring safe, comfortable, and timely
                transportation for patients who require assistance with non-emergency medical appointments, hospital
                discharges, and transfers between healthcare facilities.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">What is Non-Emergency Patient Transport?</h2>
              <p>
                Non-Emergency Patient Transport (NEPT) refers to the transportation of patients who are medically stable
                but require assistance or specialised vehicles for their transportation during routine medical
                appointments or transfers between healthcare facilities.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Our NEPT Service</h2>
              <p>
                Our NEPT service is delivered by a team of trained professionals, including healthcare assistants,
                ambulance care assistants, and experienced drivers, who are dedicated to providing safe, comfortable,
                and dignified transportation for all patients.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Specialised Vehicles and Equipment</h2>
              <p>
                We operate a fleet of modern, well-maintained vehicles equipped with essential medical equipment,
                comfortable seating, wheelchair access, and other amenities to ensure the comfort and safety of our
                patients. All vehicles undergo regular safety checks to guarantee reliability and performance.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Personalised Care and Support</h2>
              <p>
                At BEARS, we understand that each patient has unique needs. That's why we offer personalised care plans
                tailored to each individual's specific requirements. Our team works closely with patients, their
                families, and healthcare providers to ensure all needs are met during transportation, providing a
                seamless, comfortable, and stress-free journey.
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
