import React from 'react'
import VacancyDetailsLayout from '../../components/vacancy-details-layout'

const jobPurpose = (
  <>
    <p>The post holder is responsible for ensuring the effective and efficient day-to-day operation within the secure patient transport service by coordinating the distribution of patient journeys with care and respect.</p>
    <p className="mt-4">With the aim to provide the best quality care to our patients and their families and uphold our high standards. The post holder will operate within the Company Scope of Practice (ScOP) for the role as well as recognise any potential safeguarding issues and report accordingly. He/she should ensure that their vehicle and equipment is consistently maintained to an excellent standard. They will also help mentor and function as the clinical support for newer staff, as required.</p>
  </>
)

const responsibilities = (
  <ul className="list-disc pl-6 space-y-2">
    <li>To provide compassionate, professional, and high-quality patient care whilst responding to both emergency and non-emergency patient transport situations with the team.</li>
    <li>Drive all vehicles in emergency/non-emergency situations legally and in accordance with the company driver and emergency driver handbooks, while demonstrating consideration for the comfort and safety of the patient and colleagues, showing consideration for other road users.</li>
    <li>Assess, attend and transport patients and relatives in accordance with Company policies and procedures, including Company scope of practice guidelines.</li>
    <li>Accurately complete all documentation relating to patients, vehicles, and equipment in accordance with Company Policy and submit within required timeframes to management office.</li>
    <li>Work within the relevant Scope of Practice (SOP) for the designated role and provide treatment up to the post-holder's assessed ability in line with current best.</li>
    <li>Be aware of the patient's social and environmental condition and report any Safeguarding matters to the appropriate person or body.</li>
    <li>Uphold and comply with designated cleaning routines to including vehicles, equipment and areas of the garaging facilities to ensure that infection prevention and control standards are adhered</li>
    <li>Responsible for providing care to our patients and uphold our high standards, you will operate within Trust specific operating processes for each service and assist the medical team.</li>
    <li>Uphold and comply with designated cleaning routines to including vehicles, equipment, and areas of the garaging facilities to ensure that infection prevention and control standards are adhered to.</li>
    <li>Communicate with and manage patients, relatives, carers and the public in a calm, sensitive and professional manner ensuring patient dignity and informed consent for all patient assessment and movement.</li>
    <li>Provide appropriate and necessary assistance for passengers to access the vehicles.</li>
  </ul>
)

const sidebar = {
  location: 'Various Sites',
  contractType: 'Permanent',
  salary: 'Competitive',
  reportsTo: 'Team Leader',
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

export default function AmbulanceCareAssistantSecure() {
  return (
    <VacancyDetailsLayout
      jobTitle="Ambulance Care Assistant - Secure"
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
              href="/documents/Ambulance-Care-Assistant-JD.pdf"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition mb-4"
              download
            >
              Open File (158 KB)
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