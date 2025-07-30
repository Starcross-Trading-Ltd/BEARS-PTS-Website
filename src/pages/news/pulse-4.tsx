import React from 'react'
import { useLanguage } from '../../components/language-provider'
import HeroSection from '../../components/common/hero-section'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Pulse4NewsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="The Pulse Clinical Newsletter #4"
        subtitle="September 2024 - Clinical Updates and Safety Information"
        image="/images/news/pulse_4/pulse_4.png"
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
                The Pulse Clinical Newsletter #4
              </h1>
              <div className="text-xl text-gray-600 mb-4">September 2024</div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-gray-500 mx-auto mb-8"></div>
            </div>

            {/* Newsletter Image */}
            <div className="mb-12">
              <img 
                src="/images/news/pulse_4/pulse_4.png" 
                alt="Pulse Clinical Newsletter #4"
                className="w-full max-w-2xl h-auto object-cover rounded-xl shadow-lg border-4 border-white mx-auto"
              />
            </div>

            {/* Transportation of patients with chest drains */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Transportation of patients with chest drains
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">What is a chest drain?</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A chest drain is a narrow tube that is inserted between the ribs and sits in the space between the lung and chest wall. This space is called the pleural space or plural cavity and is lined by the pleural membrane. (Guy's and St Thomas' NHS Foundation Trust, 2024)
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why are they inserted?</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Chest drains are used when air (Pneumothorax), Fluid (Pleural effusion), Pus (empyema)or blood (haemothorax) collect in the pleural space.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                All the above can prevent the lungs from working properly, preventing proper expansion of the lungs, removal through a chest drain corrects this.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">How they work?</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A chest drain is inserted surgically, the tube is inserted into an external bottle. This allows the air or fluid to travel down the tube and into the bottle giving space for the lungs to expand.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Particular care should be paid when moving a patient from bed to bed, chair to chair and bed to chair with consideration for the location of the collection bottle which often will hang of a bed or chair.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Transportation</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Care should be taken when transporting patients with a chest drain particularly when moving and handling a patient.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                You should always be aware of where the collection bottle and insertion site are to allow the adaptation of your moving and handling plan as needed.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Following transfer, the collection bottle should always be transported below the insertion site, this is to allow gravity to aid in draining into the collection bottle. Bottles often have a plastic hanger to attach to bed or chair to aid this. (Sullivan, 2008).
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Possible chest drain complications</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If a chest drain is pulled from the insertion site:
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Chest drains are securely attached with stitches and a dressing. Chest drains being pulled from the insertion site is a rare occurrence and care when moving the patient reduces the risk.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                If a chest drain becomes dislodged during a transfer the clinical line should be called for advice.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The clinical line would advise to treat the insertion site as a penetrating chest injury, invoke 999 protocols.
              </p>
            </div>

            {/* DNACPR Section */}
            <div className="mb-12 bg-blue-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-primary mb-6">
                DNACPR
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A Do Not Attempt Cardiopulmonary Resuscitation form is a common sight on the road, here's some information to help you understand them better:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>It is NOT legally binding.</li>
                <li>It applies to CPR ONLY, no other treatment should be withheld.</li>
                <li>Every effort should have been made to involve the patient and/or relatives but where this is not possible, a DNACPR can still be put in place.</li>
                <li>Although best practice is to have a copy travelling with the patient, a crew can still act upon a DNACPR as long as they have seen it, either printed or electronically.</li>
                <li>A DNACPR should always be documented in the patients notes/PCR.</li>
                <li>Not to be confused with an Advance Decision to Refuse Treatment (ADRT) which IS a legally binding document that can specify treatments that the patient does not wish to receive.</li>
              </ul>
              <p className="text-sm text-gray-600">(Resuscitation Council UK, 2021)</p>
            </div>

            {/* Mpox Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Mpox (Previously Monkeypox)
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">What is Mpox?</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Mpox is an infectious disease first discovered in 1958. It can cause a painful rash, fever, headaches, muscle pain and lethargy. The majority of patients recover fully however some people do become severely unwell.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The current outbreak began in 2022clade IIb, however more recently, clades Ia and Ib have been spreading throughout Africa with clade Ib detected beyond Africa as of August 2024. (WHO, 2024)
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">How is it transmitted?</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Mpox is transmitted through close person to person contact, and although it is not easily transmitted it can be carried through:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Direct contact with skin lesions or scabs</li>
                <li>Coughing or sneezing in close proximity</li>
                <li>Contact with clothing or linens of an infected person.</li>
              </ul>
              <p className="text-gray-700 mb-6 leading-relaxed">
                It should be noted that mpox is not easily transmitted. (UK Government, 2024)
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Signs and symptoms</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                There is an incubation period of usually between 5 and 21 days, with the first symptoms possibly including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Fever</li>
                <li>Headache</li>
                <li>Muscle Aches</li>
                <li>Backache</li>
                <li>Swollen Glands</li>
                <li>Rigors (Shivering)</li>
                <li>Lethargy (exhaustion)</li>
                <li>Joint Pain</li>
              </ul>
              <p className="text-gray-700 mb-6 leading-relaxed">
                These symptoms are then usually followed by a painful rash, which can be commonly mistaken for chickenpox. The rash can develop on any part of the body and starts as small, raised spots which develop into ulcers and small blisters filled with fluid. Eventually these become scabs and fall off. (NHS, 2024)
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Transportation Precautions</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Many Mpox patients will be full mobile and will only have transport booked for them to avoid further transmission on public transport.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To keep yourself, your colleagues, and your loved ones safe, as well as the wider public, we must take some simple steps to prevent additional transmission.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Obtain a full handover from the hospital. This will give you a clearer picture of the patient's condition and their baseline, whilst highlighting any additional risks.</li>
                <li>Use appropriate PPE. Contact precautions should be used i.e. gloves mask and apron, to eliminate skin to skin contact. This PPE should be disposed of in an orange bag after use.</li>
                <li>Regular handwashing – ensure thorough cleaning of hands in line with national guidance.</li>
                <li>Vehicle cleaning – Wipe all surfaces that the patient and crew have come into contact with, using the cleaning spray on your ambulance.</li>
                <li>Correct disposal of linen – ensure all linen is placed in a white bag and tied closed. Dispose of this at the hospital at the earliest opportunity.</li>
                <li>Ask the patient to wear a mask if they are able to do so.</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Managing Mpox</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Most people, as with COVID, will be able to recover at home. Self-isolation is important, including isolating from those in the patient's household, ensuring not to share bedding or towels. If symptoms worsen then a patient should call 111, 999 or attend their nearest A&E.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Further Support</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Should you have any questions or concerns elating to transportation of an Mpox patient then your first port of call should always be the Clinical Advice Line.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Further information on this topic can be found on the NHS website, gov.uk and the world health organization website.
              </p>
            </div>

            {/* Ferno Compact 2 Carry Chair Section */}
            <div className="mb-12 bg-amber-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Safe use of the Ferno Compact 2 Carry Chair Recap (Ferno Compact chair 2023)
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Carry chairs should be checked as part of vehicle checks to ensure they are in good working order and defects reported to the office for the attention of the fleet manager</li>
                <li>Always assess and make a plan when using a carry chair and complete a dynamic risk assessment (this can be mentally or documented on a PCR)</li>
                <li>Always ensure when putting up the carry chair the black safety rings are used and over both metal bars of the frame</li>
                <li>Both the leg and arm safety straps should be used to secure the patient into the chair where possible</li>
                <li>Chairs should be carried up and down the stairs with the patient looking down the stairs</li>
                <li>Chairs where possible should be brought down the ramp backwards</li>
                <li>Chairs where possible should be taken up the ramp forwards</li>
                <li>Safe working load of the carry chair is shown below</li>
                <li>Any questions into the safe use of Carry chairs please contact Ross</li>
              </ul>
              <div className="bg-primary text-white p-4 rounded-lg text-center">
                <p className="font-semibold">Clinical Advice Line (24/7 – 365) - 020 3388 0947</p>
              </div>
            </div>

            {/* References */}
            <div className="mb-12 bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-primary mb-6">References</h2>
              <div className="space-y-2 text-sm text-gray-700">
                <p>Ferno LTD, F. (2023) Ferno Compact 2 chair, Ferno Compact 2 chair from Ferno Norden Denmark A/S - AssistData. Available at: https://hmi-basen.dk/en/r11x.asp?linkinfo=68536</p>
                <p>Guy's and St Thomas' NHS Foundation Trust. (2024). Chest Drain. Retrieved from GSTT : https://www.guysandstthomas.nhs.uk/health-information/chest-drain</p>
                <p>NHS. (2024). Mpox. Retrieved from NHS Website: https://www.nhs.uk/conditions/mpox/</p>
                <p>Resuscitation Council UK. (2021). Advanced Life Support Eighth Edition. Resuscitation COuncil (UK).</p>
                <p>Sullivan, B. (2008). Nursing Management of patients with a chest drain. British Journal of Nursing, 17(6), 388-393. doi: https://doi.org/10.12968/bjon.2008.17.6.28906</p>
                <p>UK Government. (2024). Mpox Guidance. Retrieved from Gov.uk: https://www.gov.uk/guidance/monkeypox</p>
                <p>WHO. (2024, August). MPOX. Retrieved from World Health Organisation: https://www.who.int/news-room/fact-sheets/detail/mpox</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
} 