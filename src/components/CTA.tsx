import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    gsap.from('.cta-card', {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 85%',
      }
    });

    gsap.to('.squiggle', {
      rotate: 5,
      y: 8,
      yoyo: true,
      repeat: -1,
      duration: 3,
      ease: 'sine.inOut',
      stagger: 0.5
    });

  }, { scope: container });

  return (
    <section id="connect" ref={container} className="relative py-24 md:py-32 bg-black overflow-hidden flex justify-center items-center px-4 md:px-8">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: 'clamp(30px, 4vw, 50px) clamp(30px, 4vw, 50px)'
        }}
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-yellow-400/5 blur-[150px] rounded-full pointer-events-none" aria-hidden="true" />

      {/* Decorative Squiggles */}
      <div className="squiggle absolute left-2 md:left-[8%] bottom-12 md:bottom-20 z-0 opacity-50 pointer-events-none">
        <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white drop-shadow">
          <path d="M5,45 C5,20 25,10 30,30 C35,50 15,60 25,40 C35,20 50,10 55,30 C60,50 40,60 50,40 C60,20 75,10 80,30 C85,50 65,60 75,40 C85,20 100,20 100,20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="squiggle absolute right-4 md:right-[12%] top-12 md:top-20 z-0 opacity-50 pointer-events-none">
        <svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white drop-shadow">
          <path d="M5,40 L15,10 L30,40 L45,15 L60,35 L75,10 L90,30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Main Card */}
      <div className="cta-card relative z-10 w-full max-w-6xl mx-auto">
        {/* Offset Border Effect */}
        <div className="absolute inset-0 border border-zinc-600 rounded-4xl transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 pointer-events-none" aria-hidden="true" />
        
        {/* Inner Container */}
        <div className="relative border border-zinc-600 rounded-4xl bg-black p-3 md:p-4 lg:p-5">
          
          {/* Main Colored Box */}
          <div className="bg-yellow-400 text-black rounded-3xl py-12 px-6 md:py-16 md:px-16 text-center flex flex-col items-center relative overflow-hidden">
            {/* Subtle dot pattern inside the yellow card */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)',
                backgroundSize: '16px 16px'
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col items-center">
              <p className="text-sm uppercase tracking-[0.3em] text-black/50 font-bold mb-6">Get Started</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold mb-4 tracking-tight leading-[1.1]">
                Time to go Next.js?<br />Let's Make It Happen.
              </h2>
              <p className="text-base md:text-lg mb-10 max-w-xl text-black/70 font-medium">
                Drop your site URL — our modern React & Next.js experts will take it from there.
              </p>

              <form className="w-full max-w-lg mx-auto flex flex-col items-center gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="w-full relative">
                  <input 
                    type="url" 
                    placeholder="Please enter your website" 
                    className="w-full bg-white/90 backdrop-blur-sm border-2 border-black/10 rounded-xl px-6 py-4 text-center text-lg outline-none placeholder:text-black/40 focus:border-black/30 transition-all font-medium text-black focus:ring-0 shadow-sm"
                    required
                    aria-label="Website URL"
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-black hover:bg-zinc-900 text-white px-14 py-4 rounded-xl font-bold text-base md:text-lg tracking-wider transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/30 shadow-lg hover:shadow-2xl transform hover:-translate-y-[2px]"
                >
                  Next →
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
