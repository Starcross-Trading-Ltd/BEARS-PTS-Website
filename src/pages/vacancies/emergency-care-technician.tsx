import React from 'react'
import VacancyDetailsLayout from '../../components/vacancy-details-layout'
import JobApplicationForm from '../../components/job-application-form'

const jobPurpose = (
  <>
    <p>The post holder is responsible for providing emergency driving service for critically ill children (including 
Neo-natal) requiring inter-hospital transfers to any NHS Trust, ensuring these cohort of patient’s is 
transported in safety, comfort, and care, with minimum of stress in line with our values. 
Ensure a high quality, readily accessible, user-friendly service which ensures rapid access to specialist 
care and where necessary, expedite retrieval for critically ill children to an appropriate PICU and Neo
natal intensive care. They are expected to deliver excellent care and patient transfers as part of the 
medical team undertaking emergency journeys for sick children suffering from life threatening illnesses. <br /> <br />
They are responsible for the provision of support to the Paediatric and Neo-natal clinical leads in various 
NHS Trust. With the aim to provide the best quality care to our patients and their families and uphold our 
high standards. The post holder will operate within the Company Scope of Practice (ScOP) for the role 
as well as recognise any potential safeguarding issues and report accordingly. He/she should ensure 
that their vehicle and equipment is consistently maintained to an excellent standard. They will also help 
mentor and function as the clinical support for newer staff, as required. </p>
  </>
)

const responsibilities = (
  <ul className="list-disc pl-6 space-y-2">
    <li>You would be covering Evelina Children’s Hospital Guys & St Thomas NHS Trust - South Thames Retrieval Service (STRS)
        Oxford University Hospitals NHS Trust & University Hospital Southampton NHS Foundation Trust (SORT
        & SONeT)
    </li>
    <li>To provide compassionate, professional, and high-quality patient care whilst responding to both emergency and non-emergency patient transport situations with the team.</li>
    <li>Drive all vehicles in emergency/non-emergency situations legally and in accordance with the company driver and emergency driver handbooks, while demonstrating consideration for the comfort and safety of the patient and colleagues, showing consideration for other road users. </li>
    <li>Responsible for providing care to our patients and uphold our high standards, you will operate within Trust specific operating processes for each service and assist the medical team. Post holder to their vehicle and equipment is consistently maintained to an excellent standard. </li>
    <li>Support, attend, and transport patients and relatives in accordance with Company policies and procedures, including Trust specific joint working arrangements when not on a retrieval.</li>
    <li>Work within the relevant Scope of Practice (ScOP) for the designated role and provide support to medical teams up to the post-holder's training & ability in line with current best practice. </li>
    <li>Complete service induction, familiarisation, and shadow shifts for relevant service.</li>
    <li>Attend annual service specific training sessions and sign off on core competencies.</li>
    <li>Be aware of the patient's social and environmental condition and report any Safeguarding matters to the appropriate person or body.</li>
    <li>Conduct vehicle and equipment check at the start of and during each shift to ensure the readiness of the vehicle, equipment, and consumables to respond as required. Report all defects and damage in accordance with Company policies and procedures.</li>
    <li>Uphold and comply with designated cleaning routines to including vehicles, equipment, and areas of the garaging facilities to ensure that infection prevention and control standards are adhered to.</li>
    <li>Communicate with and manage patients, relatives, carers and the public in a calm, sensitive and professional manner ensuring patient dignity and informed consent for all patient assessment and movement.</li>
    <li>Communicate effectively with a wide range of professionals and other agencies to support joint working to meet patient needs, which may, at times, be complex and sensitive. </li>
    <li>To transfer the patient to and from the ambulance, undertaking a full and dynamic risk assessment, using the most appropriate equipment and moving/handling techniques for the patient’s needs, condition, and the circumstances.  </li>
    <li>As appropriate, transport patient(s) and others to and from hospitals and other treatment centres in a safe and comfortable manner, reassessing the patient’s condition and responding appropriately to their needs en-route.</li>
    <li>Provide assistance to medical team in safely loading and unloading transfer trolleys and equipment (including incubators, pods, and safety harness) in and out of out-patient departments, wards, transport waiting areas and vehicles. </li>
    <li>Ensure that patients are not left unattended whilst negotiating steps or stairs, and when entering or alighting from the vehicle. </li>
    <li>Provide appropriate and necessary assistance for passengers to access the vehicles.</li>
  </ul>
)

const sidebar = {
  location: 'Westminster, Oxford, and Southampton ',
  contractType: 'Permanent',
  salary: 'Competitive',
  reportsTo: 'First Line Manager',
  responsibleTo: 'Head of Operations',
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

export default function EmergencyCareTechnician() {
  return (
    <VacancyDetailsLayout
      jobTitle="Emergency Care Technician"
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
              href="/documents/Emergency Care Technician - JD.pdf"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition mb-4"
              download
            >
              Open File (158 KB)
            </a>
          </section>
          <h2 className="text-2xl font-semibold mb-4">Apply here</h2>
          <JobApplicationForm position="Emergency Care Technician " />
        </>
      )}
    />
  )
} 
