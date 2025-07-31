import React from 'react'
import VacancyDetailsLayout from '../../components/vacancy-details-layout'
import JobApplicationForm from '../../components/job-application-form'

const jobPurpose = (
  <>
    <p>To lead and manage the Business Intelligence Control team, ensuring efficient patient journey planning, resource allocation, and operational excellence through data-driven decision making and process optimization.</p>
  </>
)

const responsibilities = (
  <ul className="list-disc pl-6 space-y-2">
    <li>Lead and manage the Business Intelligence Control team</li>
    <li>Oversee patient journey planning and resource allocation</li>
    <li>Analyze operational data and performance metrics</li>
    <li>Implement process improvements and efficiency measures</li>
    <li>Coordinate with operational teams and stakeholders</li>
    <li>Ensure compliance with service level agreements</li>
    <li>Develop and maintain reporting systems</li>
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
    <p>BEARS is seeking an experienced Business Intelligence Control Team Manager to lead our planning and resource allocation operations. We provide patient transport services across London and nationwide, working with NHS Trusts and private healthcare providers. Our BI team is crucial to maintaining operational efficiency and service quality.</p>
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
      applicationForm={(
        <>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">View full job description:</h2>
            <a
              href="/documents/Business-Intellgence-Team-Manager-JD.pdf"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition mb-4"
              download
            >
              Open File (PDF)
            </a>
          </section>
          <h2 className="text-2xl font-semibold mb-4">Apply here</h2>
          <JobApplicationForm position="NEPTS Business Intelligence Control Team Manager" />
        </>
      )}
    />
  )
} 