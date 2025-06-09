import Image from "next/image"
import CompanyDetails from "@/components/company-details"

export default function OurFleetPage() {
  return (
    <main>
      {/* Header Banner */}
      <div className="bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Fleet</h1>
            <p className="text-lg">
              BEARS has a comprehensive, specialised ambulance fleet providing 24/7 coverage. BEARS offers a range of
              ambulances suited to all types of patient transport needs.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[200px] md:h-[300px] mt-6 md:mt-0">
            <Image
              src="/images/fleet/ambulance-main.jpg"
              alt="BEARS Ambulance"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="prose max-w-none">
              <p>
                At our BEARS (UK) Headquarters, our crews undertake extensive, advanced initial training and ongoing
                refresher training to ensure the highest standards of patient care.
              </p>
              <p className="mt-4">
                Modern, well-maintained ambulances ensure the use of specialised equipment is maintained to the highest
                level. With extensive fleet size, patients can be confident in our ability to provide the best possible
                care.
              </p>

              <div className="my-8">
                <Image
                  src="/images/fleet/ambulance-lineup.jpg"
                  alt="BEARS Fleet"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>

              <p>
                All our vehicles are fitted with the latest Navigation and essential CCTV, dash and reversing cameras.
              </p>
              <p className="mt-4">
                They are also well stocked with all the vehicles fully checked daily and professionally maintained to
                the highest standards.
              </p>

              <div className="grid grid-cols-2 gap-4 my-8">
                <Image
                  src="/images/fleet/driver-1.jpg"
                  alt="BEARS Driver"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <Image
                  src="/images/fleet/driver-2.jpg"
                  alt="BEARS Driver"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <Image
                  src="/images/fleet/driver-3.jpg"
                  alt="BEARS Driver"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <Image
                  src="/images/fleet/driver-4.jpg"
                  alt="BEARS Driver"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          <div>
            <CompanyDetails />
          </div>
        </div>
      </div>
    </main>
  )
}
