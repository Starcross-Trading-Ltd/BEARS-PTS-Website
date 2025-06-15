
import Link from "next/link"

export default function AboutSidebar() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">About Us</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/team" className="text-[#0a2240] hover:underline">
            Meet the Team
          </Link>
        </li>
        <li>
          <Link href="/cubs" className="text-[#0a2240] hover:underline">
            Meet the Cubs
          </Link>
        </li>
        <li>
          <Link href="/our-values" className="text-[#0a2240] hover:underline">
            Our Values
          </Link>
        </li>
        <li>
          <Link href="/fleet" className="text-[#0a2240] hover:underline">
            Our Fleet
          </Link>
        </li>
        <li>
          <Link href="/bears-in-numbers" className="text-[#0a2240] hover:underline">
            BEARS in Numbers
          </Link>
        </li>
      </ul>
    </div>
  )
}
