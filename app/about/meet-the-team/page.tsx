import Image from "next/image"
import CompanyDetails from "@/components/company-details"

export default function MeetTheTeamPage() {
  return (
    <main>
      {/* Header Banner */}
      <div className="bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet the BEARS</h1>
          </div>
          <div className="md:w-1/2 relative h-[200px] md:h-[300px] mt-6 md:mt-0">
            <Image src="/images/team-photo.jpg" alt="BEARS Team" fill className="object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-[#0a2240] mb-8">Senior Management Team</h2>

        <div className="space-y-8">
          {/* Mohamed Ali Hashim */}
          <div className="border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4">
              <Image
                src="/images/team/mohamed-ali-hashim.jpg"
                alt="Mohamed Ali Hashim"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold text-[#0a2240] mb-2">Mohamed Ali Hashim</h3>
              <p className="text-gray-500 mb-4">CEO & FOUNDER</p>
              <div className="prose max-w-none">
                <p>
                  As the founder of BEARS, Mohamed has over 20 years of experience in the ambulance service. A visionary
                  leader, he has built BEARS from the ground up into a leading provider of patient transport services.
                </p>
                <p className="mt-4">
                  Starting from a small operation with just a few vehicles, Mohamed has grown the company into a
                  nationwide service with a large fleet of modern, well-equipped ambulances. His passion for patient
                  care and commitment to excellence has been the driving force behind BEARS' success and growth.
                </p>
                <p className="mt-4">
                  Mohamed holds a degree in Business Management and has extensive experience in healthcare logistics and
                  operations.
                </p>
              </div>
            </div>
          </div>

          {/* Shabnam Undre */}
          <div className="border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4">
              <Image
                src="/images/team/shabnam-undre.jpg"
                alt="Shabnam Undre"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold text-[#0a2240] mb-2">Shabnam Undre</h3>
              <p className="text-gray-500 mb-4">HEAD OF OPERATIONS</p>
              <div className="prose max-w-none">
                <p>
                  Shabnam has been leading operations at BEARS since 2015, with over 10 years of experience in
                  operational management in the healthcare sector. She brings expertise in logistics, resource
                  allocation, and quality assurance to ensure smooth day-to-day operations.
                </p>
                <p className="mt-4">
                  She holds a Professional Certificate in Health Service Management from University College London and
                  has extensive experience in NHS and private healthcare settings. Her strategic approach to operations
                  has been instrumental in scaling BEARS while maintaining the highest standards of service.
                </p>
                <p className="mt-4">
                  Shabnam is passionate about creating efficient systems that deliver exceptional patient care and is
                  dedicated to continuous improvement in all operational aspects.
                </p>
              </div>
            </div>
          </div>

          {/* Nosa Idahosa */}
          <div className="border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4">
              <Image
                src="/images/team/nosa-idahosa.jpg"
                alt="Nosa Idahosa"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold text-[#0a2240] mb-2">Nosa Idahosa</h3>
              <p className="text-gray-500 mb-4">HEAD OF QUALITY & COMPLIANCE</p>
              <div className="prose max-w-none">
                <p>
                  Nosa joined BEARS in 2017 with a background in healthcare quality assurance. She oversees all aspects
                  of quality control and compliance, ensuring that BEARS meets and exceeds industry standards.
                </p>
                <p className="mt-4">
                  With extensive experience in healthcare quality and compliance under the CQC standards, Nosa has led
                  BEARS to achieve "Outstanding" ratings across multiple service areas.
                </p>
                <p className="mt-4">
                  Nosa holds a Master's in Healthcare Quality and Patient Safety and is certified in healthcare audit
                  methodologies. She is committed to maintaining BEARS' reputation as a leader in quality patient care
                  and compliance with regulatory requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Winston Flemming */}
          <div className="border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4">
              <Image
                src="/images/team/winston-flemming.jpg"
                alt="Winston Flemming"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold text-[#0a2240] mb-2">Winston Flemming</h3>
              <p className="text-gray-500 mb-4">HEAD OF FLEET & LOGISTICS</p>
              <div className="prose max-w-none">
                <p>
                  Winston brings over 15 years of experience in fleet management and logistics to BEARS. A certified
                  transport manager, he oversees the maintenance and operation of BEARS' extensive fleet of ambulances
                  and support vehicles.
                </p>
                <p className="mt-4">
                  His expertise in vehicle specifications, safety, planning, and logistics has been crucial in
                  developing BEARS' reputation for reliability and efficiency in patient transport services.
                </p>
                <p className="mt-4">
                  Winston holds qualifications in Transport Management and Fleet Operations. His strategic approach to
                  fleet management has resulted in significant improvements in operational efficiency and service
                  reliability.
                </p>
                <p className="mt-4">
                  He is a champion of sustainable transport and is leading BEARS's transition to a greener fleet with a
                  focus on reducing environmental impact.
                </p>
              </div>
            </div>
          </div>

          {/* Amechi Okaonye */}
          <div className="border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4">
              <Image
                src="/images/team/amechi-okaonye.jpg"
                alt="Amechi Okaonye"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold text-[#0a2240] mb-2">Amechi Okaonye</h3>
              <p className="text-gray-500 mb-4">CLINICAL DIRECTOR</p>
              <div className="prose max-w-none">
                <p>
                  Amechi joined BEARS as Clinical Director in 2018, bringing over 20 years of clinical management
                  experience. As a former NHS Lead Paramedic, he brings invaluable expertise to our clinical operations.
                </p>
                <p className="mt-4">
                  He oversees all clinical aspects of BEARS' services, ensuring the highest standards of patient care
                  and safety. Under his leadership, BEARS has developed comprehensive clinical protocols and training
                  programs that exceed industry standards.
                </p>
                <p className="mt-4">
                  Amechi holds a Master's in Advanced Clinical Practice and is a registered Paramedic with the HCPC. His
                  commitment to clinical excellence has been instrumental in BEARS' reputation for outstanding patient
                  care.
                </p>
              </div>
            </div>
          </div>

          {/* Osman Sadiq */}
          <div className="border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4">
              <Image
                src="/images/team/osman-sadiq.jpg"
                alt="Osman Sadiq"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold text-[#0a2240] mb-2">Osman Sadiq</h3>
              <p className="text-gray-500 mb-4">CHIEF FINANCIAL OFFICER</p>
              <div className="prose max-w-none">
                <p>
                  Osman joined BEARS as CFO in 2019, bringing extensive experience in financial management within the
                  healthcare sector. His strategic financial leadership has been crucial to BEARS' sustainable growth
                  and operational stability.
                </p>
                <p className="mt-4">
                  With a background in healthcare finance, Osman has implemented robust financial systems and processes
                  that support BEARS' commitment to providing high-quality patient transport services while maintaining
                  financial sustainability.
                </p>
                <p className="mt-4">
                  Osman is a qualified Chartered Accountant with an MBA in Healthcare Management. His expertise in
                  financial planning and analysis has been instrumental in BEARS' ability to invest in new vehicles,
                  technology, and staff development while maintaining financial health.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <CompanyDetails />
        </div>
      </div>
    </main>
  )
}
