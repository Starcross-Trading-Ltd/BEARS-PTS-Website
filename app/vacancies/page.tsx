import Link from "next/link"

export default function VacanciesPage() {
  return (
    <main>
      {/* Header Banner */}
      <div className="bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vacancies</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#0a2240] mb-8">Current openings</h2>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            BEARS was established in 2009, on the principles of Safety, Comfort and Care. We specialise in hospital
            logistics patient transport service. Supporting the NHS with paramedic, paediatric and neonatal, critical
            care, high dependency, bariatric, mental health and ECMO transfers alongside regular patient transport
            services.
          </p>

          <p className="text-lg mb-6">
            At every level, BEARS focuses on quality, which defines the company and differentiates it from its peers.
            Our emphasis remains to provide high quality service, training, and generous package to our staff as well as
            providing them with appropriate tools, to enable them to deliver the highest standards of patient care. The
            return for this strategy is easily demonstrated by our Key Performance Indicators (KPI's) and the level of
            retention on our contracts from existing NHS customers.
          </p>

          {/* Job Listings */}
          <div className="mt-12">
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-[#0a2240] mb-4">Ambulance Care Assistant</h3>
              <p className="mb-4">
                <strong>Location:</strong> Westbury, Wiltshire
              </p>
              <p className="mb-4">
                <strong>Salary:</strong> £22,000 - £24,000 per annum
              </p>
              <p className="mb-6">
                We are looking for compassionate and dedicated Ambulance Care Assistants to join our team. You will be
                responsible for providing safe and comfortable transportation for patients to and from medical
                appointments, hospital discharges, and transfers.
              </p>
              <Link
                href="/vacancies/ambulance-care-assistant"
                className="inline-block px-6 py-3 bg-[#00855a] text-white font-medium rounded hover:bg-opacity-90 transition-colors"
              >
                View Details
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-[#0a2240] mb-4">Paramedic</h3>
              <p className="mb-4">
                <strong>Location:</strong> Knaresborough, North Yorkshire
              </p>
              <p className="mb-4">
                <strong>Salary:</strong> £32,000 - £38,000 per annum
              </p>
              <p className="mb-6">
                We are seeking experienced Paramedics to join our team. You will be responsible for providing high-level
                medical care during patient transport, including emergency response and critical care transfers.
              </p>
              <Link
                href="/vacancies/paramedic"
                className="inline-block px-6 py-3 bg-[#00855a] text-white font-medium rounded hover:bg-opacity-90 transition-colors"
              >
                View Details
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#0a2240] mb-4">Patient Transport Driver</h3>
              <p className="mb-4">
                <strong>Location:</strong> London
              </p>
              <p className="mb-4">
                <strong>Salary:</strong> £20,000 - £22,000 per annum
              </p>
              <p className="mb-6">
                We are looking for reliable and professional Patient Transport Drivers to join our team. You will be
                responsible for safely transporting patients to and from medical appointments, ensuring their comfort
                and safety throughout the journey.
              </p>
              <Link
                href="/vacancies/patient-transport-driver"
                className="inline-block px-6 py-3 bg-[#00855a] text-white font-medium rounded hover:bg-opacity-90 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>

          {/* General Application */}
          <div className="mt-12 bg-[#0a2240] text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Don't see a position that fits your skills?</h3>
            <p className="mb-6">
              We're always looking for talented individuals to join our team. Send us your CV and tell us why you'd be a
              great fit for BEARS.
            </p>
            <Link
              href="/contact?subject=General Application"
              className="inline-block px-6 py-3 bg-white text-[#0a2240] font-medium rounded hover:bg-gray-100 transition-colors"
            >
              Submit General Application
            </Link>
          </div>

          {/* Benefits */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-[#0a2240] mb-6">Why Work With Us?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Competitive salary and benefits package</li>
              <li>Ongoing professional development and training opportunities</li>
              <li>Supportive and collaborative work environment</li>
              <li>Modern, well-maintained fleet and equipment</li>
              <li>Opportunity to make a real difference in patients' lives</li>
              <li>Career progression opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
