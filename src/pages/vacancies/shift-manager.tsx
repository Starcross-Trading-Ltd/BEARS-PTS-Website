import React from 'react'
import VacancyDetailsLayout from '../../components/vacancy-details-layout'
import JobApplicationForm from '../../components/job-application-form'

const jobPurpose = (
  <>
    <p>To manage and oversee shift operations, ensuring the efficient delivery of patient transport services while maintaining high standards of safety, quality, and team performance across multiple operational areas.</p>
  </>
)

const responsibilities = (
  <ul className="list-disc pl-6 space-y-2">
    <li>Manage shift operations and coordinate multiple teams</li>
    <li>Ensure compliance with all safety and quality standards</li>
    <li>Oversee resource allocation and scheduling</li>
    <li>Provide leadership and support to team managers</li>
    <li>Handle escalated customer service issues</li>
    <li>Monitor operational performance and KPIs</li>
    <li>Implement and maintain operational procedures</li>
  </ul>
)

const sidebar = {
  location: 'London & Nationwide',
  contractType: 'Full-time',
  salary: 'Competitive',
  reportsTo: 'Operations Director',
  responsibleTo: '',
}

const aboutUs = (
  <>
    <p>BEARS is seeking experienced Shift Managers to oversee our operational teams across multiple locations. We provide patient transport services across London and nationwide, working with NHS Trusts and private healthcare providers. Our shift managers are essential to maintaining our high standards of Safety, Comfort and Care.</p>
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
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">View full job description:</h2>
            <a
              href="/documents/Shift-Managers-JD-V2.pdf"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition mb-4"
              download
            >
              Open File (PDF)
            </a>
          </section>
          <h2 className="text-2xl font-semibold mb-4">Apply here</h2>
          <JobApplicationForm position="Shift Manager" />
        </>
      )}
    />
  )
} 