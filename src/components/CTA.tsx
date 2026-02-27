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
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 85%',
      }
    });

    // Gentle floating animation to give the squiggles a custom feeling
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
    <section id="connect" ref={container} className="relative py-32 bg-black overflow-hidden flex justify-center items-center px-4 md:px-8">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: 'clamp(30px, 4vw, 50px) clamp(30px, 4vw, 50px)'
        }}
        aria-hidden="true"
      />

      {/* Decorative Squiggles */}
      <div className="squiggle absolute left-2 md:left-[10%] bottom-16 md:bottom-24 z-0 opacity-70 pointer-events-none">
        {/* Loopy signature squiggle */}
        <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white drop-shadow">
          <path d="M5,45 C5,20 25,10 30,30 C35,50 15,60 25,40 C35,20 50,10 55,30 C60,50 40,60 50,40 C60,20 75,10 80,30 C85,50 65,60 75,40 C85,20 100,20 100,20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="squiggle absolute right-4 md:right-[15%] top-16 md:top-24 z-0 opacity-70 pointer-events-none">
        {/* Zig-zag squiggle */}
        <svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white drop-shadow">
          <path d="M5,40 L15,10 L30,40 L45,15 L60,35 L75,10 L90,30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Main Card */}
      <div className="cta-card relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Offset Border Effect (Neo-brutalist style) */}
        <div className="absolute inset-0 border border-zinc-500 rounded-4xl transform translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5 pointer-events-none" aria-hidden="true" />
        
        {/* Inner Container */}
        <div className="relative border border-zinc-500 rounded-4xl bg-black p-3 md:p-5 lg:p-6">
          
          {/* Main Colored Box */}
          <div className="bg-yellow-400 text-black rounded-3xl py-12 px-6 md:py-16 md:px-16 text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-medium mb-4 tracking-tight leading-[1.1]">
              Time to go Next.js?<br />Let's Make It Happen.
            </h2>
            <p className="text-base md:text-lg mb-8 max-w-xl text-black/80 font-medium tracking-wide">
              Drop your site URL - our modern React & Next.js experts will take it from there.
            </p>

            <form className="w-full max-w-lg mx-auto flex flex-col items-center gap-8 relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="url" 
                placeholder="Please enter your website" 
                className="w-full bg-transparent border-0 border-b-2 border-black/80 px-2 py-2 text-center text-lg md:text-xl outline-none placeholder:text-black/50 focus:border-black transition-colors font-medium text-black focus:ring-0"
                required
                aria-label="Website URL"
              />
              <button 
                type="submit"
                className="bg-zinc-800 hover:bg-black text-white px-12 py-3.5 rounded-lg font-medium text-base md:text-lg tracking-wider transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/40 shadow-lg hover:shadow-xl transform hover:-translate-y-[2px]"
              >
                Next
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
