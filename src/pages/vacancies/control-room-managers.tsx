import React from 'react'
import VacancyDetailsLayout from '../../components/vacancy-details-layout'
import JobApplicationForm from '../../components/job-application-form'

const jobPurpose = (
  <>
    <p>The Patient Transport Control Room Manager will be responsible for the effective day-to-day management, performance and development of the NEPTS Control Team, acting as a key point of contact for patients, Trust service users, carers, healthcare professionals, operational teams and other stakeholders.</p>
  </>
)

const responsibilities = (
  <ul className="list-disc pl-6 space-y-2">
    <li>Oversee the day-to-day running of the NEPTS Control Room, monitoring live operations and coordinating transport resources to deliver a safe, efficient and resilient service.</li>
    <li>Lead and manage the Control Team, overseeing performance, welfare, development and 24/7 rostering in line with our Safety, Comfort and Care values.</li>
    <li>Ensure every patient and service user receives a professional, compassionate service, with enquiries resolved promptly and feedback used to drive improvement.</li>
    <li>Ensure all bookings and communications meet NEPTS eligibility and contractual requirements, resolving compliance risks with the wider management teams.</li>
    <li>Analyse operational data and KPIs to produce accurate management reports and inform planning, resourcing and service improvements.</li>
    <li>Act as super user for booking and operational systems, supporting upgrades and ensuring staff are trained and competent in all technologies.</li>
    <li>Maintain clear, timely communication between the Control Room, operational teams, patients, healthcare professionals and external stakeholders.</li>
    <li>Investigate complaints, incidents and operational concerns, escalating risks and ensuring learning and corrective actions are implemented.</li>
    <li>Support the response to major incidents and service disruption, ensuring escalation, business continuity and governance procedures are followed.</li>
    <li>Use data, feedback and operational insight to continuously improve the quality, efficiency and resilience of the service, keeping patient care at the centre.</li>
  </ul>
)

const sidebar = {
  location: 'Kidbrooke, London',
  contractType: 'Full-time',
  salary: 'Up to £45,000.00 per year',
  reportsTo: '',
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

export default function PatientTransportControlRoomManager() {
  return (
    <VacancyDetailsLayout
      jobTitle="Patient Transport Control Room Manager"
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
              href="/documents/Control-Room-Manager-JD.pdf"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition mb-4"
              download
            >
              Open File (PDF)
            </a>
          </section>
          <h2 className="text-2xl font-semibold mb-4">Apply here</h2>
          <JobApplicationForm position="Patient Transport Control Room Manager" />
        </>
      )}
    />
  )
} 
