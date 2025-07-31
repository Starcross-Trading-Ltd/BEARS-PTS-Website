import React from 'react'
import VacancyDetailsLayout from '../../components/vacancy-details-layout'
import JobApplicationForm from '../../components/job-application-form'

const jobPurpose = (
  <>
    <p>To provide high-quality paramedic care and patient transport services, responding to emergency and non-emergency situations with professionalism and compassion.</p>
  </>
)

const responsibilities = (
  <ul className="list-disc pl-6 space-y-2">
    <li>Provide advanced life support and emergency care to patients</li>
    <li>Assess and treat patients in emergency and non-emergency situations</li>
    <li>Drive emergency vehicles safely and efficiently</li>
    <li>Complete accurate patient documentation and records</li>
    <li>Maintain equipment and vehicle readiness</li>
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
    <p>BEARS is seeking qualified paramedics to join our growing team. We provide emergency and non-emergency patient transport services across London and nationwide, working with NHS Trusts and private healthcare providers. Our paramedics are essential to our mission of providing the highest standards of Safety, Comfort and Care.</p>
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
              Open File (PDF)
            </a>
          </section>
          <h2 className="text-2xl font-semibold mb-4">Apply here</h2>
          <JobApplicationForm position="Paramedic" />
        </>
      )}
    />
  )
} 