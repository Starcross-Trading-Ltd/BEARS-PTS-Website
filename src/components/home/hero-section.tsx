import React from 'react'

export default function HeroSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-[#388e6c] via-[#0a2240] to-[#388e6c] text-white text-center shadow-2xl relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <img src="/Buddy Bear   _ FINAL_Shirt grey outline_with info.png" alt="BEARS Logo" className="mx-auto mb-8 w-48 h-48 object-contain rounded-full drop-shadow-xl animate-fade-in-up" />
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">Patient Transport with BEARS</h1>
        <p className="text-2xl md:text-3xl max-w-2xl mx-auto mb-8 font-medium opacity-90">Fast, safe, and compassionate journeys. Trusted by the NHS, loved by families. Your journey with the UK's leading patient transport specialists.</p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <span className="inline-flex items-center px-5 py-2 bg-white/10 border border-white/20 rounded-full text-lg font-semibold shadow">NHS Trusted</span>
          <span className="inline-flex items-center px-5 py-2 bg-white/10 border border-white/20 rounded-full text-lg font-semibold shadow">24/7 Service</span>
          <span className="inline-flex items-center px-5 py-2 bg-white/10 border border-white/20 rounded-full text-lg font-semibold shadow">CQC Registered</span>
          <span className="inline-flex items-center px-5 py-2 bg-white/10 border border-white/20 rounded-full text-lg font-semibold shadow">Award-Winning Care</span>
        </div>
        <div className="mt-8 animate-bounce">
          <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className="mx-auto text-white opacity-80"><path d="M12 5v14m0 0l-7-7m7 7l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-0" />
    </section>
  )
}
