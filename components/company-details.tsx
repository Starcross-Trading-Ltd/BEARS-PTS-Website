import Link from "next/link"

export default function CompanyDetails() {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Company Details</h3>
      <p className="text-gray-700 mb-2">Westbury Trading Estate, Westbury, BA13 4JU</p>
      <p className="text-gray-700 mb-2">Ambulance HQ, Unit 3 Old Wool Office, Castle Road, Knaresborough, LS5 2SD</p>
      <Link href="tel:03300555222" className="text-[#4285f4] hover:underline">
        Enquiries: 033 0055 5222
      </Link>
    </div>
  )
}
