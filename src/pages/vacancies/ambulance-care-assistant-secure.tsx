import React from 'react'
import VacancyDetailsLayout from '../../components/vacancy-details-layout'
import JobApplicationForm from '../../components/job-application-form'

const jobPurpose = (
  <>
    <p>To provide safe, comfortable and caring patient transport services to patients with higher acuity needs, including those requiring secure transport, under the direction of qualified healthcare professionals.</p>
  </>
)

const responsibilities = (
  <ul className="list-disc pl-6 space-y-2">
    <li>Assist in the safe transfer and transport of patients with higher acuity needs</li>
    <li>Provide compassionate care and support to patients during transport</li>
    <li>Maintain vehicle cleanliness and equipment readiness</li>
    <li>Complete accurate documentation and patient records</li>
    <li>Follow all safety protocols and procedures</li>
    <li>Work effectively as part of a team</li>
    <li>Maintain professional standards and patient confidentiality</li>
  </ul>
)

const sidebar = {
  location: 'London & Nationwide',
  contractType: 'Full-time/Part-time',
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
          <JobApplicationForm position="Ambulance Care Assistant - Secure" />
        </>
      )}
    />
  )
} 