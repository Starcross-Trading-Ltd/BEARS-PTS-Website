import React from 'react'
import VacancyDetailsLayout from '../../components/vacancy-details-layout'

const jobPurpose = (
  <>
    <p>The first line managers will support the Shift managers to contribute to the safe, timely, effective, and professional running of the operational team.</p>
    <p className="mt-4">To manage a group of ambulance crews, ensuring that they conduct their roles according to the company policies and guidelines.</p>
    <p className="mt-4">To respond to day-to-day problems and complaints in a professional and effective manner.</p>
    <p className="mt-4">The First Manager role has responsibility for the provision of leadership and management of the immediate operational road staff.</p>
    <p className="mt-4">The post-holder is accountable to the Shift Managers and responsible for the daily management of the</p>
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
  reportsTo: 'Senior Manager',
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

export default function FirstLineManager() {
  return (
    <VacancyDetailsLayout
      jobTitle="First Line Manager"
      jobPurpose={jobPurpose}
      responsibilities={responsibilities}
      sidebar={sidebar}
      aboutUs={aboutUs}
      staffBenefits={staffBenefits}
      applicationForm={(
        <>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">View full job description:</h2>
            <a
              href="/documents/First-Line-Manager-JD.pdf"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition mb-4"
              download
            >
              Open File (130 KB)
            </a>
          </section>
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
    />
  )
} 