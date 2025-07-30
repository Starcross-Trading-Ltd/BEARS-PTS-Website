import React from 'react'
import { useLanguage } from '../../components/language-provider'
import HeroSection from '../../components/common/hero-section'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Pulse3NewsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="The Pulse Clinical Newsletter #3"
        subtitle="July 2024 - Clinical Updates and Safety Information"
        imageAlt="Pulse Clinical Newsletter"
        imagePosition="right"
        bgColor="#1e40af"
      />

      {/* Main Content */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-gray-500/5"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          {/* Back to News Link */}
          <div className="mb-8">
            <Link 
              to="/news"
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Link>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                The Pulse Clinical Newsletter #3
              </h1>
              <div className="text-xl text-gray-600 mb-4">July 2024</div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-gray-500 mx-auto mb-8"></div>
            </div>

            {/* Transportation of Children & Young People */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Transportation of Children & Young People
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                It is likely that in the course of your duties, you will be asked to undertake the transfer of a child or young person with or without an escort. BEARS have policies and procedures in place to ensure the safe transport of such patients. For the purpose of this article and the associated BEARS policy, a child will be defined as anyone under the age of 16 and a young person will be defined as any person between the ages of 16 and 18.)
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                It is best practise for any child or young person to travel with an adult that holds parental responsibility.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Parental responsibility can be held by:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>The patients mother or father</li>
                <li>The patients legally appointed guardian</li>
                <li>Someone with a residence order concerning the patient</li>
                <li>A local authority designated to care for the patient</li>
                <li>A local authority or person with an emergency protection order for the patient.</li>
              </ul>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Young people between the ages of 16 and 18, are legally allowed to make their own decisions and are able to be transported without an escort.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Any child under the age of 16 who is not traveling with someone from the above list, must be assessed for Gillick Competency prior to travel.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">What is Gillick Competency?</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Gillick Competency is a legal principle that is used to determine whether a child under the age of 16 has the capacity to consent to their own treatment, in this case medical transportation, without needing parental permission or knowledge and is done by the undertaking of an assessment.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                The assessment, which is in most cases undertaken by the hospital, weights up the child's Maturity and Intelligence, their ability to make an Informed Decision and what is in their Best Interests. During the assessment, they must understand and retain the information being given to them, consider alternatives and have the ability to reason and weigh up the risks.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Transportation of Gillick Competent Children</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                When a patient is assessed as Gillick Competent, BEARS Control should be informed at the time of booking and these details will be passed to the attending crew via the PDA.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                On arrival at the hospital, the crew must request evidence of the assessment and record this on their Patient Care Record (PCR).
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Prior to transport, the Clinical Advice Line must be contact to ensure all information and documents held are correct prior to transporting the patient.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                In all cases, every effort must be made to ensure that the child is being transported to a place of safety i.e. a hospital, or a place of definitive care. If the patient is being discharged to a home address, the crew must ascertain who will be receiving the child and if they are from the previously mentioned Parental Responsibility List.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Once at the address, it is imperative that the crew verify the identity of the receiving adult prior to the handover of duty of care. The crew must not leave the child in any location deemed to be unsafe on arrival and must escalate any concerns by contacting the Clinical Advice Line as a matter of urgency.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                If there are any safeguarding concerns, these must also be urgently escalated to the Clinical Advice Line prior to the crew leaving the property or the vicinity of the property if it is not safe to stay. This call must be made out of earshot from any bystanders or patients present.
              </p>
            </div>

            {/* Going Home Checklist */}
            <div className="mb-12 bg-green-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Going Home Checklist
              </h2>
              <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
                <li>Take a moment to think about your day</li>
                <li>Acknowledge one thing that was difficult on your shift; let it go</li>
                <li>Be proud of the care you gave today</li>
                <li>Consider three things that went well</li>
                <li>Check on your colleagues before you leave; are they ok?</li>
                <li>Are you ok? Your Management Team are here to listen and support you</li>
                <li>Now switch your attention to home; Rest and Recharge</li>
              </ul>
              <div className="bg-primary text-white p-4 rounded-lg text-center">
                <p className="font-semibold">YOU are our greatest assets, and we are here to support you!</p>
              </div>
              <p className="text-gray-700 mt-4 text-center">
                Please reach out to your First Line Manager or Shift Manager if you require any support or just need a chat.
              </p>
            </div>

            {/* Sickle Cell Disease */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Sickle Cell Disease
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                All you need to know about Sickle Cell Anaemia and how to care for and transfer patients with this condition.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">What is Sickle Cell Disease?</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Sickle Cell Disease (SCD) is a group of inherited red blood cell disorders characterised by the presence of abnormal haemoglobin in the blood.
              </p>

              <h4 className="text-xl font-bold text-gray-800 mb-3">Sickle Cell Disease covers a range of conditions including:</h4>

              <h5 className="text-lg font-bold text-gray-800 mb-2">Sickle Cell Anaemia</h5>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This is the most common and severe form of SCD, where an individual inherits two sickle cell genes (one from each parent).
              </p>

              <h5 className="text-lg font-bold text-gray-800 mb-2">Haemoglobin SC Disease</h5>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This form occurs when an individual inherits one sickle cell gene for haemoglobin C, and another abnormal form of haemoglobin.
              </p>

              <h5 className="text-lg font-bold text-gray-800 mb-2">Haemoglobin Thalassemia</h5>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This form occurs when an individual inherits one sickle cell gene and one gene for beta-thalassemia, another type of blood disorder.
              </p>

              <h5 className="text-lg font-bold text-gray-800 mb-2">Other Variants</h5>
              <p className="text-gray-700 mb-6 leading-relaxed">
                There are rarer combinations, such as HbSD, HbSE and HbSO, involving different haemoglobin variants.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                SCD is caused by a mutation of the gene that makes haemoglobin, the protein in red blood cells that carries oxygen. This mutation leads to the production of an abnormal form of haemoglobin called haemoglobin S (HbS). When oxygen levels are low, haemoglobin S changes shape, causing red blood cells to become rigid and for a sickle or crescent shape. These sickle-shaped red blood cells can get stuck in smaller blood vessels, blocking blood flow and precenting oxygen from reaching tissues. This blocked blood flow leads to pain (known as pain crisis) and can cause damage to organs due to lack of oxygen.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Another byproduct of SCD is that sickle cells have a shorter lifespan of 10-20 days, compared to that of normal Red Blood Cells of about 120 days, causing chronic anaemia. The constant breakdown of sickle cells also releases substances that cause inflammation, further damaging blood vessels and tissues.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">What are the Symptoms?</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Symptoms of Sickle Cell Disease vary in severity and can affect different parts of the body. The most common symptoms include:
              </p>

              <h4 className="text-xl font-bold text-gray-800 mb-3">Anaemia</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Fatigue due to a reduced number of red blood cells, leading to less oxygen being transported around the body.</li>
                <li>Paleness which is especially noticeable in the skin, lips, and nail beds.</li>
                <li>Shortness of Breath caused by decreased oxygen levels.</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-800 mb-3">Pain Crisis</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Sudden onset of pain which occurs when sickle-shaped cells block blood flow to various parts of the body, Common sites include the chest, abdomen, joints, and bones. Pain can last for hours to days and varies in intensity. Some individuals may have only a few crises a year, while others have them more frequently.
              </p>

              <h4 className="text-xl font-bold text-gray-800 mb-3">Swelling</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Hand-Foot-Syndrome is often the first symptom in infants and causes painful swelling if the hands and feet.
              </p>

              <h4 className="text-xl font-bold text-gray-800 mb-3">Infections</h4>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Increased susceptibility to infections due to spleen damage from repeated sickling episodes, which impairs its ability to fight infection.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">What are the Treatments?</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The treatment of Sickle Cell Disease focuses mainly on managing symptoms whilst preventing complications, and improving quality of life and include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Medications such a pain killers, antibiotics, and supplements are used to treat symptoms including pain and imbalances.</li>
                <li>Regular blood transfusions can reduce the risk of stroke and treat severe anaemia but can create other complications.</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">How can we Transport These Patients?</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Patients with Sickle Cell Disease live somewhat normal lives and the most part can be transported the same as any other PTS patient. It is only when these patients are in crisis and experiencing certain symptoms that they meet the criteria to transported via High Dependency (HDU) or Paramedic vehicles. The type of vehicle sent, will depend on the individual assessment of each patient, and will be determined by the individual trust HDU Transport Criteria. For example:
              </p>

              <h4 className="text-xl font-bold text-gray-800 mb-3">SCD patients requiring HDU transport:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Hypoxic requiring oxygen</li>
                <li>Mild pain - requiring analgesia on route (Entonox)</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-800 mb-3">SCD patients requiring Paramedic transport:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Severe pain – requiring analgesia on route (Paracetamol, Morphine etc.)</li>
              </ul>

              <p className="text-gray-700 mb-6 leading-relaxed">
                A full list can be found on the individual trust HDU/Para requirements.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Any queries relating to individual patients at the time of transport should be directed to the Clinical Line for advice.
              </p>
            </div>

            {/* Medication Standard Operating Procedure (MSOP) Recap */}
            <div className="mb-12 bg-amber-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Medication Standard Operating Procedure (MSOP) Recap
              </h2>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">OXYGEN</h3>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Indications</h4>
              <h5 className="text-lg font-bold text-gray-800 mb-2">Children</h5>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Significant illness and/or injury</li>
              </ul>

              <h5 className="text-lg font-bold text-gray-800 mb-2">Adults</h5>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Critical illness requiring high levels of supplemental oxygen</li>
                <li>Serious illness requiring moderate levels of supplemental oxygen if the patient is hypoxic</li>
                <li>COPD and other conditions required controlled or low-dose oxygen therapy</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-800 mb-3">Contraindications</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Explosive environments</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-800 mb-3">Cautions and Side Effects</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Increased fire hazard at scene</li>
                <li>Ensure pads are firmly applied when defibrillation is undertaken to reduce spark hazard</li>
                <li>Non-humidified Oxygen is drying and irritating to the mucous membranes over a period of time</li>
                <li>In patients with COPD, there is a risk that even moderately high doses of inspired Oxygen can produced increased Carbon Dioxide levels which may induce respiratory depression and possible respiratory arrest</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">ENTONOX</h3>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Indications</h4>
              <h5 className="text-lg font-bold text-gray-800 mb-2">Adults</h5>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Moderate to Severe pain</li>
                <li>Labour Pain</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-800 mb-3">Inclusion Criteria</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Adults</li>
                <li>Children over the age of consent</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-800 mb-3">Exclusion Criteria</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Head injuries</li>
                <li>Reduced level of consciousness</li>
                <li>Disturbed psychiatric patients</li>
                <li>Patients lacking capacity</li>
                <li>Decompression sickness</li>
                <li>Recent intra-ocular injection of gas</li>
                <li>Chest injury or clinically suspected pneumothorax</li>
                <li>Abdominal pain where intestinal obstruction is suspected</li>
                <li>Any patient at risk of having and pneumothorax or with polytrauma</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-800 mb-3">Cautions and Side Effects</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Temporary dissociation</li>
                <li>Nausea</li>
              </ul>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Further information on the above MSOPs can be found on PEARL or via the Clinical Advice Line - 020 3388 0947
              </p>
            </div>

            {/* References */}
            <div className="mb-12 bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-primary mb-6">References</h2>
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Transportation of Children and Young People</h3>
                  <p>BEARS Transportation of Children and Young People Policy</p>
                  <p>NSPCC Guidance on Gillick Competency</p>
                  <p>Gillick competence and Fraser guidelines | NSPCC Learning</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Sickle Cell Disease</h3>
                  <p>NHS.UK – Information Page on Sickle Cell Disease</p>
                  <p>Sickle cell disease - NHS (www.nhs.uk)</p>
                  <p>Cleveland Clinic – Information Page on Sickle Cell Disease</p>
                  <p>Sickle Cell Disease (SCD): Types, Symptoms & Causes (clevelandclinic.org)</p>
                  <p>NICE Guideline NG204 – Babies, Children and Young Peoples Experience of Healthcare</p>
                  <p>Recommendations | Babies, children and young people's experience of healthcare | Guidance | NICE</p>
                  <p>BEARS HDU & Paramedic HDU Criteria</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Medication Standard Operating Procedure (MSOP) Recap</h3>
                  <p>MSOP 003 - BEARS MSOP for the Administration of Oxygen</p>
                  <p>MSOP 004 – BEARS MSOP for the Administration of Entonox</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
} 