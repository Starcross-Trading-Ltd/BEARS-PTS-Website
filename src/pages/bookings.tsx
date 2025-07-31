import React, { useState, useEffect } from 'react';
import HeroSection from '../components/common/hero-section';
import { sendBookingEmail } from '../lib/emailjs';
import { useToast } from '../hooks/use-toast';
import { useLanguage } from '../components/language-provider';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  message: '',
};

const services = [
  'NEPTS',
  'Patient Transport',
  'Paramedic Service',
  'Bariatric Transport',
  'Mental Health Transport',
  'Neonatal & Paediatric',
  'Critical Care',
  'ECMO',
  'High Dependence',
  'Other',
];

export default function BookingsPage() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const result = await sendBookingEmail(form);

      if (result.success) {
        toast({
          title: "Booking Request Sent!",
          description: "Your booking enquiry has been received. Our team will contact you shortly.",
        });
        setSubmitted(true);
        setForm(initialForm);
      } else {
        throw new Error('Failed to send booking request');
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      toast({
        title: "Error",
        description: "Failed to send your booking request. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Scroll to form handler
  const scrollToForm = () => {
    const formSection = document.getElementById('booking-form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-white flex flex-col">
      {/* Hero Section */}
      <HeroSection
        title="Book Patient Transport with BEARS"
        subtitle="Fast, safe, and compassionate journeys. Trusted by the NHS, loved by families. Book your journey with the UK’s leading patient transport specialists."
        image="/images/booking/2025_BEARS_002.png"
        imageAlt="BEARS Ambulance Team Member"
        imagePosition="left"
        // Remove bgColor, use className for gradient
        className="bg-gradient-to-r from-[#388e6c] via-[#0a2240] to-[#388e6c] text-white"
      >
        <div className="flex flex-wrap justify-center gap-4 mb-6 mt-4">
          <span className="inline-flex items-center px-5 py-2 bg-white/10 border border-white/20 rounded-full text-lg font-semibold shadow">NHS Trusted</span>
          <span className="inline-flex items-center px-5 py-2 bg-white/10 border border-white/20 rounded-full text-lg font-semibold shadow">24/7 Service</span>
          <span className="inline-flex items-center px-5 py-2 bg-white/10 border border-white/20 rounded-full text-lg font-semibold shadow">CQC Registered</span>
          <span className="inline-flex items-center px-5 py-2 bg-white/10 border border-white/20 rounded-full text-lg font-semibold shadow">Award-Winning Care</span>
        </div>
        <div className="w-full flex justify-center">
          <button
            onClick={scrollToForm}
            className="mt-2 px-10 py-4 bg-[#388e6c] text-white text-xl font-bold rounded-lg shadow-lg hover:bg-[#2e7358] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Book Now
          </button>
        </div>
      </HeroSection>

      {/* Booking Form Section */}
      <section id="booking-form-section" className="flex-1 flex items-center justify-center py-16">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-10 mx-4 border-t-8 border-primary animate-fade-in-up">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Book Your Journey</h2>
          <p className="text-lg text-gray-600 mb-8 text-center">Complete the form below and our team will be in touch to confirm your booking. For urgent bookings, please call <a href="tel:02082025160" className="text-primary font-semibold underline">020 8202 5160</a>.</p>
          {submitted ? (
            <div className="text-center text-green-700 text-xl font-semibold py-8">
              Thank you! Your booking enquiry has been received.<br />Our team will contact you shortly.
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none text-lg shadow"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none text-lg shadow"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none text-lg shadow"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Type of Service</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none text-lg shadow"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">Preferred Date & Time</label>
                  <input
                    type="datetime-local"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none text-lg shadow"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Additional Information</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none text-lg shadow"
                  placeholder="Tell us anything else we should know..."
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-primary text-white text-xl font-bold rounded-lg shadow-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary mt-2"
              >
                {submitting ? 'Submitting...' : 'Book Now'}
              </button>
              <div className="text-xs text-gray-400 text-center mt-2">Your information is safe with us. We never share your details.</div>
            </form>
          )}
        </div>
      </section>

      {/* Trust & Marketing Section */}
      <section className="py-12 bg-gradient-to-r from-green-50 via-blue-50 to-white border-t border-primary/10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 justify-center">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-2">Why Book with BEARS?</h3>
            <ul className="text-lg text-gray-700 space-y-2 mb-4">
              <li>✔️ Over 15 years of trusted patient transport</li>
              <li>✔️ NHS & CQC accredited</li>
              <li>✔️ Friendly, highly trained staff</li>
              <li>✔️ Modern, comfortable vehicles</li>
              <li>✔️ 24/7 support and rapid response</li>
            </ul>
            <div className="text-primary font-semibold text-lg">Your journey, our care—book with confidence.</div>
          </div>
          <div className="flex-1 flex justify-center items-center w-full">
            <div className="relative p-10 rounded-2xl border border-[#00855a]/30 shadow-lg bg-white/70 backdrop-blur-md max-w-xl w-full min-h-[220px] md:min-h-[260px] flex flex-col justify-center">
              {/* Small quote icon in top left */}
              <svg
                className="absolute top-4 left-4 w-7 h-7 text-[#00855a]/60"
                fill="none"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <text x="0" y="28" fontSize="32" fontWeight="bold" fill="currentColor">“</text>
              </svg>
              <div className="relative z-10 text-left">
                <p className="text-lg text-gray-800 italic font-medium">"Really appreciated how reassuring and compassionate the staff has been while transporting me to hospital. They continually made sure I was comfortable and understood what would be happening. They have made this difficult time for me a bit less scary and less lonely. Thank you so much!"</p>
                <div className="mt-4 text-right">
                  <p className="text-xl font-extrabold text-[#00855a]">St Bartholomew's Hospital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 