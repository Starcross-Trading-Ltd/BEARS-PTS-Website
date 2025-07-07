import React from 'react'
import VacancyDetailsLayout from '../../components/vacancy-details-layout'

const jobPurpose = (
  <>
    <p>The Business Intelligence (BI) Control Team Manager will be responsible for the management and performance of the Business Intelligence control team, as a single point of access to patients, Trust service users, carers, and members of the public.</p>
    <p className="mt-4">The post holder plays a key role in helping improve patient experience from a transport perspective and will resolve enquiries wherever possible to the satisfaction of the end user.</p>
    <p className="mt-4">The BI- Control Team Manager will provide expert contribution in relation to methods and approaches of gathering and responding to the reported experience of patients and carers, and their involvement in service development and delivery.</p>
    <p className="mt-4">The post holder is responsible for managing a diverse team of staff across the various sites, paying particular attention to ensuring that all staff adheres to our Safety, Comfort and Care values always.</p>
  </>
)

const responsibilities = (
  <ul className="list-disc pl-6 space-y-2">
    <li>To manage all day-to-day aspects of the Switchboard, using initiative and discretion to forward plan and improve the quality and efficiency of the services and to escalate any disruptions to service to the Health Records Services Manager.</li>
    <li>To manage a team of controllers/call handlers ensuring staff have the necessary skills and technical abilities required to provide an excellent customer-focused service.</li>
    <li>Provide short notice Operator cover, as and when necessary to cater for staff absence, service demands, breaktime relief and bank holidays to cover any shift of the 24/7 service.</li>
    <li>Provide day-to-day management of the staff, including assisting with recruitment, welfare, sickness, and annual leave and maintaining accurate records. Also to support the staff outside of working hours with any urgent queries or disruption to service and escalate where necessary.</li>
    <li>To provide training to new members of staff on the operation of the telephony system, and deliver training to the Operators on new and emerging technologies.</li>
    <li>Deliver all PTS communication, ensuring that all patient transport services are provided to only patients that are eligible to the service in line with our contract requirements.</li>
    <li>The post holder will be responsible for analysing and interpreting datasets, highlighting data driven results to senior managers, highlighting the significance of insights and findings to the relevant parties.</li>
    <li>They will also ensure data accuracy for all data management for the department, this will include data cleanse, information storing, super user of the Transport booking system (Cleric) and manage/roll out training of all Transport IT related infrastructure for the department.</li>
    <li>Support in designing and preparing training rollout out plan for all staff.</li>
    <li>Select the most appropriate analytical techniques and apply these too large and complex datasets. Bring excellent analytical skills grounded and appropriate to the service – Non-Emergency Patient Transport Service (NEPTS).</li>
    <li>Provide input on existing projects as needed, providing advice on methodologies on data and analysis.</li>
    <li>Conduct analysis to a high methodological standard.</li>
    <li>Provide advice to other team members about how methods can be applied and support the development of other team members.</li>
    <li>Ensure a close working relationship with the other regional functions e.g., Finance, Strategy & Compliance, ensuring a joined-up approach across our various hospital sites teams.</li>
    <li>Work with other department teams and their staff, to ensure that all aspects of patient care/transport are aligned to support organisational values.</li>
    <li>Provide input to help control teams understand Transport peaks and trends and develop the planning guidance.</li>
  </ul>
)

const sidebar = {
  location: 'Across site',
  contractType: 'Permanent',
  salary: '£53,000 – 48 hours per week',
  reportsTo: 'Head of Business Intelligence',
  responsibleTo: '',
}

const aboutUs = (
  <>
    <p>BEARS operate an independent ambulance service specialising in higher acuity patient transport (Paramedic, High Dependency, Mental Health, Critical Care and Emergency Retrieval/Response services) for various NHS Trusts in London and nationwide under contract. We are looking for resourceful and enthusiastic Trainee Ambulance Care Assistants to help us achieve our mission to transport patients with the highest standards of Safety, Comfort and Care. Please join us on our innovative and successful journey and be part of our aspirational growth plans.</p>
  </>
)

const staffBenefits = (
  <ul className="list-disc pl-6 space-y-2">
    <li>Company Pension Scheme</li>
    <li>Health cash plan after 6 months</li>
    <li>Access to company gym</li>
    <li>Clearly defined progression paths with training and support</li>
    <li>E-car scheme (Salary sacrifice/subject to eligibility)</li>
  </ul>
)

export default function NeptsBusinessIntelligenceControlTeamManager() {
  return (
    <VacancyDetailsLayout
      jobTitle="NEPTS Business Intelligence Control Team Manager"
      jobPurpose={jobPurpose}
      responsibilities={responsibilities}
      sidebar={sidebar}
      aboutUs={aboutUs}
      staffBenefits={staffBenefits}
    >
      {/* View full job description */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">View full job description:</h2>
        <a
          href="/documents/Business-Intellgence-Team-Manager-JD.pdf"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition mb-4"
          download
        >
          Open File (263 KB)
        </a>
      </section>
      {/* Application form */}
      <section id="apply" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Apply here</h2>
        <form
          action="https://formspree.io/f/mnqekgqj" // Dummy Formspree endpoint
          method="POST"
          className="bg-white rounded-xl shadow p-6 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input name="firstName" required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input name="lastName" required className="w-full border rounded px-3 py-2" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input name="email" type="email" required className="w-full border rounded px-3 py-2" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Phone/Mobile</label>
            <input name="phone" required className="w-full border rounded px-3 py-2" />
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Address Line 1</label>
              <input name="address1" required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address Line 2</label>
              <input name="address2" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input name="city" required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">County</label>
              <input name="county" required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Post Code</label>
              <input name="postcode" required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <input name="country" required className="w-full border rounded px-3 py-2" />
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Resume / CV</label>
            <input name="resume" type="file" required className="w-full border rounded px-3 py-2" />
          </div>
          <div className="md:col-span-2 flex items-center gap-2">
            <input type="checkbox" name="terms" required />
            <span className="text-sm">I have read and agree to the <a href="/terms-and-conditions" className="underline">Terms and Conditions</a> and <a href="/privacy-policy" className="underline">Privacy Policy</a>.</span>
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition">Apply now</button>
          </div>
        </form>
      </section>
    </VacancyDetailsLayout>
  )
} 