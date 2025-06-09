import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const newsArticles = [
  {
    title: "Christmas @ BEARS Ambulance",
    excerpt:
      "'Tis the season of giving, and our BEARS Ambulance family came together to celebrate the holidays in true emergency services style. Our dedicated team took ...",
    date: "December 25, 2023",
    image: "/images/christmas.jpg",
    slug: "christmas",
  },
  {
    title: "The Pulse Clinical Newsletter #4",
    excerpt:
      "ISSUE 4 – September 2024 Transportation of patients with chest drains What is a chest drain? A chest drain is a narrow tube that is ...",
    date: "September 15, 2024",
    image: null,
    slug: "pulse-4",
  },
  {
    title: "The Pulse Clinical Newsletter #3",
    excerpt:
      "ISSUE 3 – July 2024 Transportation of Children & Young People It is likely that in the course of your duties, you will be asked ...",
    date: "July 10, 2024",
    image: null,
    slug: "pulse-3",
  },
  {
    title: "New Ambulances Join Our Fleet",
    excerpt:
      "We're excited to announce the addition of three new state-of-the-art ambulances to our growing fleet, enhancing our capacity to provide high-quality patient transport services...",
    date: "June 5, 2024",
    image: "/images/ambulance.jpg",
    slug: "new-ambulances",
  },
  {
    title: "BEARS Receives Quality Certification",
    excerpt:
      "We're proud to announce that BEARS Patient Transport Service has been awarded the ISO 9001:2015 certification for our quality management systems...",
    date: "May 20, 2024",
    image: null,
    slug: "quality-certification",
  },
  {
    title: "The Pulse Clinical Newsletter #2",
    excerpt:
      "ISSUE 2 – April 2024 Transportation of patients with tracheostomies What is a tracheostomy? A tracheostomy is an opening created at the front of the neck...",
    date: "April 12, 2024",
    image: null,
    slug: "pulse-2",
  },
]

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#0a2240] mb-8">Latest News</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {newsArticles.map((article, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden h-full flex flex-col">
            {article.image ? (
              <div className="relative h-48">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>
            ) : (
              <div className="relative h-48 bg-[#0a2240] flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white text-center">
                  The Pulse
                  <br />
                  Clinical Newsletter
                </h3>
              </div>
            )}
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex-grow">
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-xl font-bold text-[#0a2240] mb-3">{article.title}</h3>
                <p className="text-gray-700 mb-4">{article.excerpt}</p>
              </div>
              <Link
                href={`/news/${article.slug}`}
                className="inline-flex items-center text-[#4285f4] mt-2 hover:underline"
              >
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-[#0a2240] mb-6">Subscribe to Our Newsletter</h2>
        <p className="text-gray-700 mb-6">
          Stay updated with the latest news, clinical insights, and developments at BEARS Patient Transport Service.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00855a] flex-grow"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#00855a] text-white font-medium rounded hover:bg-opacity-90 transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}
