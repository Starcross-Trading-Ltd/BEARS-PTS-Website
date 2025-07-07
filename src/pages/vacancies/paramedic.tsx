import React from 'react'
import VacancyDetailsLayout from '../../components/vacancy-details-layout'

const jobPurpose = (
  <>
    <p>To provide a patient focused delivery of care, treatment, and safe transport for emergency and non-emergency patients in a clinically safe and professional environment, utilising enhanced skills and regulated best practise when required to do so, adhering at all times to the policies and standards inherent within BEARS and in line with the company's ethos of Safety, Comfort, and Care.</p>
    <p className="mt-4">Bear Paramedic crew member will be responsible for the assessment, care, treatment and transportation of emergency, urgent and routine calls. The role will also include the providing of advanced clinical interventions, may administer medication within PGD guidelines. There will also be a requirement to undertake emergency blue light driving and work in a variety of locations.</p>
  </>
)

const responsibilities = (
  <ul className="list-disc pl-6 space-y-2">
    <li>Undertake the full range of paramedic duties as part of an operational crew, as well as a solo responder, on a rapid response vehicle or in other appropriate areas/vehicles and/or emergency/urgent care settings, as per Company standard operational instructions.</li>
    <li>Assess, treat, manage, and where appropriate refer patients according to the nature and severity of their condition referring to alternative care pathways where appropriate. As appropriate, provide packages of care to patients at home.</li>
    <li>Carry out paramedic duties commensurate with national clinical practice guidelines.</li>
    <li>Responsible as an autonomous practitioner using local care pathways associated with local initiatives promoting see and treat, where clinically safe to do so, reducing inappropriate conveyance.</li>
    <li>Ability to organise and manage the scene of a complex incident during initial stages until an additional clinical support arrives where applicable. This could involve organising or managing patients, bystanders, or other responding services.</li>
    <li>Undertake duties in relation to major incidents including exercises which may require call out when off duty in accordance with the Company Major Incident Procedure.</li>
    <li>Utilise appropriate and relevant information to assist patients, patient advocates or carers to make informed health choices in line with national guidance.</li>
    <li>Make reasoned decisions regarding initiating, modifying, or ceasing treatment or procedures and ensuring accurate documentation of decisions.</li>
    <li>Being accountable and responsible for clinical decisions made during the course of duty and seek senior clinical advice where appropriate.</li>
    <li>Ensure compliance with Medicines management.</li>
    <li>Ensures drugs are stored securely and where appropriate stocked according to both national legal frameworks and local policy.</li>
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

export default function Paramedic() {
  return (
    <VacancyDetailsLayout
      jobTitle="Paramedic"
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
              href="/documents/Paramedic-JD.pdf"
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