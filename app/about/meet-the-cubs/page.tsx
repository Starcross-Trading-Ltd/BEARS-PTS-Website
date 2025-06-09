import Image from "next/image"

export default function MeetTheCubsPage() {
  return (
    <main>
      {/* Header Banner */}
      <div className="bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet The Cubs</h1>
            <p className="text-lg">
              Our dedicated staff are at the forefront of delivering the highest levels of patient care, safety, and
              comfort.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[200px] md:h-[300px] mt-6 md:mt-0">
            <Image src="/images/cubs/staff-member.jpg" alt="BEARS Staff" fill className="object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Culture Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#0a2240] mb-6">Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <p>
                  At BEARS, our culture is built around delivering the highest levels of patient care, safety, and
                  comfort. We achieve this through a positive approach to company direction through to our operational
                  delivery. We are committed to creating a supportive and inclusive environment where all staff feel
                  valued and empowered to deliver the BEARS way of doing things!
                </p>
                <p className="mt-4">
                  Our team members are encouraged to share ideas, raise concerns, and contribute to continuous
                  improvement. We believe our company values will continue evolving and improving as a result of our
                  staff feedback.
                </p>
                <p className="mt-4">
                  We believe that a positive work environment leads to dedicated staff who deliver exceptional patient
                  care, taking accountability and leadership that drives results in everything we do.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative h-[150px]">
                <Image src="/images/cubs/culture-1.jpg" alt="BEARS Culture" fill className="object-cover rounded-lg" />
              </div>
              <div className="relative h-[150px]">
                <Image src="/images/cubs/culture-2.jpg" alt="BEARS Culture" fill className="object-cover rounded-lg" />
              </div>
              <div className="relative h-[150px]">
                <Image src="/images/cubs/culture-3.jpg" alt="BEARS Culture" fill className="object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Safety Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#0a2240] mb-6">Safety</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-wrap gap-4">
              <div className="relative h-[150px] w-full md:w-[calc(50%-8px)]">
                <Image src="/images/cubs/safety-1.jpg" alt="BEARS Safety" fill className="object-cover rounded-lg" />
              </div>
              <div className="relative h-[150px] w-full md:w-[calc(50%-8px)]">
                <Image src="/images/cubs/safety-2.jpg" alt="BEARS Safety" fill className="object-cover rounded-lg" />
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <p>
                  We prioritize safety with "Safety is First" comprehensive equipment and procedures training to ensure
                  that every step we take is conducted with the highest standards of safety. Our staff are trained to
                  identify and mitigate potential risks, ensuring that all patients receive the safest possible
                  transportation experience.
                </p>
                <p className="mt-4">
                  Regular safety audits, ongoing training, and robust procedures ensure we maintain our commitment to
                  outstanding patient safety.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comfort Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#0a2240] mb-6">Comfort</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <p>
                  We have developed staff uniforms to ensure they are always presenting a professional image whilst
                  delivering patient care. We provide staff with comfortable, well-maintained vehicles and equipment to
                  ensure they can deliver the highest quality service.
                </p>
                <p className="mt-4">
                  A positive patient journey starts with a comfortable environment for our staff. We believe that when
                  our staff are comfortable in their surroundings, it enables them to provide the highest level of
                  patient care.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="relative h-[150px] w-full md:w-[calc(50%-8px)]">
                <Image src="/images/cubs/comfort-1.jpg" alt="BEARS Comfort" fill className="object-cover rounded-lg" />
              </div>
              <div className="relative h-[150px] w-full md:w-[calc(50%-8px)]">
                <Image src="/images/cubs/comfort-2.jpg" alt="BEARS Comfort" fill className="object-cover rounded-lg" />
              </div>
              <div className="relative h-[150px] w-full">
                <Image src="/images/cubs/comfort-3.jpg" alt="BEARS Comfort" fill className="object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Care Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#0a2240] mb-6">Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-wrap gap-4">
              <div className="relative h-[150px] w-full md:w-[calc(50%-8px)]">
                <Image src="/images/cubs/care-1.jpg" alt="BEARS Care" fill className="object-cover rounded-lg" />
              </div>
              <div className="relative h-[150px] w-full md:w-[calc(50%-8px)]">
                <Image src="/images/cubs/care-2.jpg" alt="BEARS Care" fill className="object-cover rounded-lg" />
              </div>
              <div className="relative h-[150px] w-full">
                <Image src="/images/cubs/care-3.jpg" alt="BEARS Care" fill className="object-cover rounded-lg" />
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <p>
                  We put staff at the heart of the high levels of care, our people matter and their welfare and care are
                  paramount. We support staff with regular training, supervision, and mentoring to ensure they have the
                  skills and confidence to provide the highest level of care to patients. We also get staff feedback and
                  developing facilities that are responsive to needs to ensure staff are the best they can be.
                </p>
                <p className="mt-4">
                  We believe that by caring for our staff, we create an environment where they can provide the highest
                  level of care to our patients. Our commitment to staff well-being includes comprehensive support
                  systems, flexible scheduling programs, and regular feedback.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Staff Appreciation Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#0a2240] mb-6">Staff Appreciation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <p>
                  At BEARS, we recognize that our staff are our greatest asset. We regularly celebrate their
                  achievements through staff recognition programs, team events, and social gatherings. Our staff are at
                  the heart of everything we do, and we are committed to creating a positive and supportive work
                  environment.
                </p>
                <p className="mt-4">
                  We value innovation, so "Sharing Ideas Allowed" is the methodology. Empowerment of our talented team
                  is encouraged through regular feedback sessions, team meetings, and opportunities for professional
                  development, recognizing changing needs, role rotation and advancement.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="relative h-[150px] w-full md:w-[calc(50%-8px)]">
                <Image
                  src="/images/cubs/appreciation-1.jpg"
                  alt="BEARS Staff Appreciation"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-[150px] w-full md:w-[calc(50%-8px)]">
                <Image
                  src="/images/cubs/appreciation-2.jpg"
                  alt="BEARS Staff Appreciation"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-[150px] w-full">
                <Image
                  src="/images/cubs/appreciation-3.jpg"
                  alt="BEARS Staff Appreciation"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
