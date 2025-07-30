import React from 'react'
import { useLanguage } from '../../components/language-provider'
import HeroSection from '../../components/common/hero-section'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Pulse2NewsPage() {
  const { t } = useLanguage()

  const pulse2Images = [
    '/images/news/pulse_2/pulse_clinic2_1.png',
    '/images/news/pulse_2/pulse_clinic2_2.png',
    '/images/news/pulse_2/pulse_clinic2_3.png',
    '/images/news/pulse_2/pulse_clinic2_4.jpeg',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="The Pulse Clinical Newsletter #2"
        subtitle="May 2024 - Clinical Updates and Safety Information"
        imageAlt="Pulse Clinical Newsletter #2"
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
                The Pulse Clinical Newsletter #2
              </h1>
              <div className="text-xl text-gray-600 mb-4">May 2024</div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-gray-500 mx-auto mb-8"></div>
            </div>

            {/* Newsletter Image */}
            <div className="mb-12">
              <img 
                src="/images/news/pulse_2/pulse_clinic2_1.png" 
                alt="Pulse Clinical Newsletter #2 Cover"
                className="w-full max-w-2xl h-auto object-cover rounded-xl shadow-lg border-4 border-white mx-auto"
              />
            </div>

            {/* Capacity and Consent Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Capacity and Consent
              </h2>
              
              <div className="bg-blue-50 p-8 rounded-xl mb-8">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Capacity describes the ability to use and understand information to decide, and communicate any decision made. A person lacks capacity if their mind is impaired or disturbed in some way, which means they are unable to decide at that time.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Examples of Brain or Mind Impairment
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-3">Mental Health Conditions</h4>
                  <p className="text-gray-700">Such as Schizophrenia or bipolar disorder</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-3">Dementia</h4>
                  <p className="text-gray-700">Progressive cognitive decline</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-3">Severe Learning Disabilities</h4>
                  <p className="text-gray-700">Significant cognitive impairment</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-3">Brain Damage</h4>
                  <p className="text-gray-700">From stroke or other brain injury</p>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-3">Physical or Mental Conditions</h4>
                  <p className="text-gray-700">Causing confusion, drowsiness, or loss of consciousness</p>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-3">Intoxication</h4>
                  <p className="text-gray-700">Caused by drugs or alcohol misuse</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Assessment Criteria
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Someone with such impairment is thought to be unable to decide if they cannot:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
                <li>Understand information about the decision</li>
                <li>Remember that information</li>
                <li>Use that information to make a decision</li>
                <li>Communicate their decision by talking, using sign language or by any other means</li>
              </ul>

              <div className="bg-amber-50 p-6 rounded-xl mb-8">
                <h4 className="font-semibold text-amber-800 mb-3">Best Practice</h4>
                <p className="text-amber-700">
                  It is best practice to gain consent to submit a safeguarding referral, except in situations in which this would increase risk to the individual. It is important to document this fully on your referral and PCR documents. It is important to relay all information to the clinical line.
                </p>
              </div>
            </div>

            {/* How Capacity is Assessed */}
            <div className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                How Capacity is Assessed
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A person's capacity to consent can change. For example, they may have capacity to make some decisions, but not others or their capacity may come and go. Capacity can also change over time, so it should always be assessed at the time that consent is required.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Examples of Capacity Changes:</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>A person with severe learning difficulties</strong> may be capable of deciding on their day-to-day treatment, but incapable of understanding the complexities of their long-term treatment.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Some people with certain health conditions</strong> may have periods where they are capable and periods when they are incapable - for example, Dementia patients may have periods of lucidity.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>A person with Schizophrenia</strong> may have psychotic episodes when they cannot distinguish between reality and fantasy, during which time, they may not be capable of making certain decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* BEARS Capacity Forms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                BEARS Capacity Forms
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    BEARS provide Capacity Assessment Forms on all vehicles. The form takes you through the Capacity Assessment process step-by-step. These forms come in the form of an A4 duplicate pad and should be stored with Patient Care Records (PCRs) on each vehicle.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you are considering that a patient may lack the capacity to make a decision or consent, then this form must be completed to assist you with your determination.
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-red-700 font-semibold">
                      Completed forms must be attached to the patient's PCR when submitted to both the receiving unit, and HQ at the end of your shift. Any concerns or questions should be directed to the Clinical Line for advice.
                    </p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="/images/news/pulse_2/pulse_clinic2_2.png" 
                    alt="BEARS Capacity Assessment Form"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Mental Capacity Assessment Tool */}
            <div className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Mental Capacity Assessment Tool
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Stage 1 Assessment</h3>
                  <p className="text-gray-700 mb-4">
                    Stage 1 is used to document if the patient has any existing impairment or disturbance of their mind or brain, i.e.:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>Dementia</li>
                    <li>Intoxication</li>
                    <li>Brain injury</li>
                  </ul>
                  <p className="text-gray-700 text-sm italic">This list is not exhaustive.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Stage 2 Assessment</h3>
                  <p className="text-gray-700 mb-4">
                    Stage 2 of the assessment is a simple guide on how to undertake the assessment and the criteria set out to establish the patient's ability to make a decision.
                  </p>
                  <p className="text-gray-700">
                    The Mental Capacity Assessment Tool below should be used as a guide on how to carry out the assessment step-by-step.
                  </p>
                </div>
              </div>
            </div>

            {/* Assessment Documentation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Assessment Documentation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This section is used to document the conversation had with the patient, the reasoning around your decision and ultimately the outcome of the Mental Capacity Assessment.
                  </p>
                  <div className="bg-amber-50 p-4 rounded-lg mb-4">
                    <p className="text-amber-700 font-semibold">
                      It is important to ensure that the patient details documented on the form are correct and match that of any other documentation such as the Patient Care Record.
                    </p>
                  </div>
                  <p className="text-gray-700">
                    It's also vital that the precise date and time of the assessment are recorded due to fluctuations in some patient's lucidity.
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="/images/news/pulse_2/pulse_clinic2_3.png" 
                    alt="Mental Capacity Assessment Documentation"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Coronary Angioplasty Section */}
            <div className="mb-12 bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Coronary Angioplasty
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6 text-center">
                All you need to know about Coronary Angioplasty and how to care and transfer patients post procedure.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">What is Coronary Angioplasty?</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Coronary Angioplasty is a procedure used to widen blocked or narrowed Coronary Arteries (the main blood vessels supplying the heart).
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The term "angioplasty" means using a balloon to stretch open a narrowed or blocked artery. However, most modern angioplasty procedures also involve inserting a short wire mesh tube, called a stent, into the artery during the procedure. The stent is then left in place permanently to allow blood to flow more freely.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Procedure Details</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Flexible catheter inserted into patient's artery</li>
                    <li>Entry point: groin, wrist, or arm</li>
                    <li>Wire guided to required location via X-ray</li>
                    <li>Procedure takes 30 minutes to 2 hours</li>
                    <li>Patients with angina usually discharged same day</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Post-Procedure Care</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Incision site covered with pressure dressing</li>
                    <li>Dressing kept on for 2-4 hours</li>
                    <li>Exchanged for smaller sterile dressing</li>
                    <li>Monitor for any complications</li>
                    <li>Follow-up care instructions</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">When is Angioplasty Used?</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Like all organs in the body, the Heart needs a constant supply of blood. This is supplied by the Coronary Arteries. In some cases, these arteries can become narrowed and hardened (known as atherosclerosis) which can cause coronary heart disease.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If the flow of blood to the heart becomes restricted, it can lead to chest pain known as Angina which is usually triggered by physical activity or stress. While Angina can often be treated with medication, a Coronary Angioplasty may be required to restore the blood supply to the Heart in severe cases where medication is ineffective.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Coronary Angioplasty is also often used as an emergency treatment after a heart attack.
              </p>
            </div>

            {/* Transfer Guidelines */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Transfer Guidelines
              </h2>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Who Should Transfer Angioplasty Patients?</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Hospital Medical Teams are required to observe patients post procedure on the ward or in recovery prior to them being discharged or transferred back to their local hospital.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                During observation, each patient will be assessed by their Medical Team to determine their transport requirements. The majority of patients are assessed as safe to travel with either FREC 3 or FREC 4 HDU crews dependent on individual trust eligibility criteria.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="text-blue-700 font-semibold">
                  We would advise that all patients are dynamically assessed at the bedside when crews attend, and the Clinical Line be contacted with any concerns or queries.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">What do I need to look out for?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Take thorough handover</h4>
                    <p className="text-green-700 text-sm">Note why the patient underwent the procedure (emergency, urgent, or planned)</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Check observations</h4>
                    <p className="text-blue-700 text-sm">Note patient's observations post procedure and NEWS score</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Inspect dressing</h4>
                    <p className="text-purple-700 text-sm">Ensure no excess bleeding at surgical site</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-800 mb-2">12-Lead ECG</h4>
                    <p className="text-amber-700 text-sm">Undertake prior to leaving unit and if chest pain occurs</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Monitor throughout journey</h4>
                    <p className="text-red-700 text-sm">Ensure patient is monitored via ECG</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-800 mb-2">Escalate concerns</h4>
                    <p className="text-indigo-700 text-sm">Contact Clinical Line if patient not "as given"</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bibliography */}
            <div className="mb-12 bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Bibliography
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Mental Capacity and Consent</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Mental Capacity Assessment – Mental Capacity Act Code of Practice</li>
                    <li>• Make decisions on behalf of someone: Checking mental capacity - GOV.UK</li>
                    <li>• Mental Capacity Act – Guidance for Health and Social Care</li>
                    <li>• Mental Capacity Act - Social care and support guide - NHS</li>
                    <li>• BEARS Capacity and Consent Policy – Document 811</li>
                    <li>• BEARS Mental Capacity Assessment Tool – Document 455</li>
                    <li>• BEARS Mental Capacity Assessment Form</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Coronary Angioplasty</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Coronary Angioplasty NHS Guidance</li>
                    <li>• Coronary angioplasty and stent insertion - NHS</li>
                    <li>• Coronary Angioplasty and Stents (PCI) – British Heart Foundation</li>
                    <li>• Coronary angioplasty and stents (PCI) - BHF</li>
                    <li>• Guidance on the use of Coronary Artery Stents – NICE Guidelines</li>
                    <li>• Overview | Guidance on the use of coronary artery stents | Guidance | NICE</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-gray-600 text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Clinical Excellence
              </h2>
              <p className="text-lg mb-6">
                The Pulse Clinical Newsletter provides essential updates and guidance to ensure the highest standards of patient care and safety. Stay informed with the latest clinical protocols and best practices.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
} 