import React from 'react'
import VacancyDetailsLayout from '../../components/vacancy-details-layout'
import JobApplicationForm from '../../components/job-application-form'

const jobPurpose = (
  <>
    <p>To lead and manage a team of ambulance care assistants and paramedics, ensuring the delivery of high-quality patient transport services while maintaining operational excellence and team performance.</p>
  </>
)

const responsibilities = (
  <ul className="list-disc pl-6 space-y-2">
    <li>Lead and manage a team of healthcare professionals</li>
    <li>Ensure compliance with all safety and quality standards</li>
    <li>Coordinate patient transport operations and scheduling</li>
    <li>Provide training and development for team members</li>
    <li>Maintain accurate records and documentation</li>
    <li>Handle customer service and stakeholder relationships</li>
    <li>Implement and monitor operational procedures</li>
  </ul>
)

const sidebar = {
  location: 'London & Nationwide',
  contractType: 'Full-time',
  salary: 'Competitive',
  reportsTo: 'Senior Manager',
  responsibleTo: '',
}

const aboutUs = (
  <>
    <p>BEARS is seeking experienced First Line Managers to lead our operational teams. We provide patient transport services across London and nationwide, working with NHS Trusts and private healthcare providers. Our managers are crucial to maintaining our high standards of Safety, Comfort and Care.</p>
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
              href="/documents/First-Line-Manager-JD-V2.pdf"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition mb-4"
              download
            >
              Open File (PDF)
            </a>
          </section>
          <h2 className="text-2xl font-semibold mb-4">Apply here</h2>
          <JobApplicationForm position="First Line Manager" />
        </>
      )}
    />
  )
} 