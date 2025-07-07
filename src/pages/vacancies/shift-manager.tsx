import React from 'react'
import VacancyDetailsLayout from '../../components/vacancy-details-layout'

const jobPurpose = (
  <>
    <p>The Shift Manager is responsible for the overall performance of those services within the remit of the role. This position will be responsible for the day-to-day delivery of patient transport services to patients in accordance with agreed service contracts, targets, compliance standards, controls, and resource constraints.</p>
    <p className="mt-4">The post holder will ensure the delivery of the key performance targets in their area of responsibility and demonstrate continuous improvement in patient experience demonstrating a dynamic aptitude for problem-solving. They will ensure that there are clear and transparent measure of success (KPI's) for their service areas, and these are delivered to the required level with an emphasis on continuous improvement.</p>
    <p className="mt-4">The postholder will act as service expert and will lead in the implementation of service improvement as appropriate and act as contributor to the general development of all services within the business, playing key role in delivering projects.</p>
    <p className="mt-4">They will be responsible for leading a large multi-disciplinary diverse group of staff, nurturing the staff group, to help them develop their knowledge and skills to deliver a first-class patient transport service in line with our values of Safety, Comfort and Care.</p>
  </>
)

const responsibilities = (
  <ul className="list-disc pl-6 space-y-2">
    <li>Placeholder responsibility 1</li>
    <li>Placeholder responsibility 2</li>
    <li>Placeholder responsibility 3</li>
  </ul>
)

const sidebar = {
  location: 'Various Sites',
  contractType: 'Permanent',
  salary: 'Competitive',
  reportsTo: 'Head of Operations',
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

export default function ShiftManager() {
  return (
    <VacancyDetailsLayout
      jobTitle="Shift Manager"
      jobPurpose={jobPurpose}
      responsibilities={responsibilities}
      sidebar={sidebar}
      aboutUs={aboutUs}
      staffBenefits={staffBenefits}
      applicationForm={(
        <>
          <h2 className="text-2xl font-semibold mb-4">Apply here</h2>
          <form
            action="https://formspree.io/f/mnqekgqj"
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
        </>
      )}
    >
      {/* View full job description */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">View full job description:</h2>
        <a
          href="/documents/Shift-Managers-JD-V2.pdf"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition mb-4"
          download
        >
          Open File (258 KB)
        </a>
      </section>
      {/* Application form or additional sections can go here */}
    </VacancyDetailsLayout>
  )
} 