import { ArrowRight } from "lucide-react"

const testimonials = [
  {
    content:
      "The ambulance crew arrived on time, were very polite and friendly. The journey was comfortable. While in the ambulance, they checked and observed everything. Thank you so much!",
    source: "Guy's and St Thomas' NHS Foundation Trust",
    borderColor: "border-blue-100",
  },
  {
    content:
      "Crew were brilliant, came on time. Driver was very good and the journey was comfortable. The staff member that stayed in the back, kept me entertained and chatted with me all the way home, putting me at ease. Excellent service, 10/10!",
    source: "St Bartholomew's Hospital",
    borderColor: "border-pink-100",
  },
  {
    content:
      "The BEARS team was professional and caring. They made what could have been a stressful journey very smooth and comfortable.",
    source: "Royal London Hospital",
    borderColor: "border-green-100",
  },
  {
    content:
      "I was very nervous about being transported, but the crew was so kind and reassuring. They explained everything they were doing and made sure I was comfortable throughout.",
    source: "University College London Hospital",
    borderColor: "border-purple-100",
  },
  {
    content:
      "The ambulance was spotlessly clean and the staff were extremely professional. They arrived exactly on time and got me to my appointment with plenty of time to spare.",
    source: "King's College Hospital",
    borderColor: "border-yellow-100",
  },
  {
    content:
      "As someone with mobility issues, I was concerned about the transport, but the BEARS team was excellent. They had all the right equipment and knew exactly how to help me safely.",
    source: "Royal Free Hospital",
    borderColor: "border-red-100",
  },
]

export default function ComplimentsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#0a2240] mb-8">Compliments</h1>

      <p className="text-lg text-gray-700 mb-12 max-w-3xl">
        At BEARS, we take pride in the positive feedback we receive from our patients and healthcare partners. Here's
        what people are saying about our service.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`border ${testimonial.borderColor} rounded-lg p-6`}>
            <p className="text-gray-700 mb-6">{testimonial.content}</p>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-[#0a2240] font-medium">{testimonial.source}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-[#0a2240] mb-6">Share Your Experience</h2>
        <p className="text-gray-700 mb-6">
          We value your feedback. If you've recently used our services and would like to share your experience, we'd
          love to hear from you.
        </p>
        <a
          href="/contact?feedback=true"
          className="inline-flex items-center px-6 py-3 bg-[#00855a] text-white font-medium rounded hover:bg-opacity-90 transition-colors"
        >
          Submit Feedback <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
