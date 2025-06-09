import Image from "next/image"
import ServiceSidebar from "@/components/service-sidebar"
import ContactSidebar from "@/components/contact-sidebar"
import CompanyDetails from "@/components/company-details"
import WhyChooseUs from "@/components/why-choose-us"

export default function NeonatalPaediatricServicePage() {
  return (
    <main>
      {/* Header Banner */}
      <div className="bg-pink-50 py-16 relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a2240] mb-4">
              Neonatal and Paediatric intensive care transfer service
            </h1>
            <p className="text-lg text-gray-700">
              At BEARS, we recognise the critical nature of medical transportation for neonatal and Paediatric patients
              requiring urgent care and specialised support.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[200px] md:h-[300px] mt-6 md:mt-0">
            <Image
              src="/images/neonatal.jpg"
              alt="Neonatal and Paediatric Service"
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
                At BEARS, we recognise the critical nature of medical transportation for neonatal and Paediatric
                patients requiring urgent care and specialised support. Our dedicated team is committed to providing
                safe, efficient, and expert-led transportation for these vulnerable patients, ensuring they receive
                continuous medical care during transit. Our service is a vital bridge between healthcare facilities,
                facilitating timely access to the appropriate healthcare setting.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">24/7 Availability</h2>
              <p>
                Our dedicated team of highly trained medical professionals is available around the clock to provide
                swift, responsive care in critical situations. This availability ensures that in all the pressing
                medical emergencies, patients can receive immediate access to the care they need, without delays
                impacting the appropriate healthcare facilities.
              </p>

              <div className="relative h-[300px] my-8">
                <Image src="/images/neonatal-team.jpg" alt="Neonatal Team" fill className="object-cover rounded-lg" />
              </div>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Advanced Critical Care Support Equipment</h2>
              <p>
                Equipped with state-of-the-art medical and advanced critical care equipment, our specialist vehicles are
                designed to accommodate neonatal and paediatric patients, providing a mobile intensive care environment
                during transportation. Our vehicles are customised to support patient stability and comfort. Our
                vehicles are equipped with advanced monitoring systems and undergo regular safety checks to guarantee
                reliability and performance.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Experienced Clinical Guidance</h2>
              <p>
                Under the guidance and supervision of experienced clinicians, our staff support patients during transfer
                stages and monitoring throughout the retrieval process. Our team includes experienced paramedics and
                healthcare providers who are trained in neonatal and paediatric critical care, ensuring patients receive
                the highest standard of care during transportation.
              </p>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Personalised and Compassionate Care</h2>
              <p>
                At BEARS, we prioritise the safety, comfort, and dignity of our patients at all times. Our team is
                dedicated with compassion and understanding, providing compassionate support with sensitivity to
                patients and their families during challenging times.
              </p>

              <div className="relative h-[300px] my-8">
                <Image
                  src="/images/neonatal-vehicle.jpg"
                  alt="Neonatal Transport Vehicle"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <h2 className="text-2xl font-bold text-[#0a2240] mt-8 mb-4">Reliable and Trustworthy Service</h2>
              <p>
                We've established long-standing relationships with numerous NHS trusts as a trusted partner for neonatal
                and paediatric transport services across the UK. Our commitment to quality, professionalism, and
                patient-centred care has made us the preferred choice for healthcare providers, institutions, and
                individuals in need of specialised critical patient transportation.
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
