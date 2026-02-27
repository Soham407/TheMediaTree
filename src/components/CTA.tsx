import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const container = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "ab9dd41a-015f-49d4-8f25-2d8dc7cc3265");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
      setTimeout(() => {
        setIsModalOpen(false);
        setResult("");
      }, 3000);
    } else {
      setResult("Error! Please try again.");
    }
  };

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
    <>
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
              <h2 className="font-sans font-bold mb-4 tracking-tight max-w-5xl text-center flex flex-col gap-3">
                <span className="text-3xl md:text-5xl lg:text-6xl leading-[1.1]">Time to go Next.js?</span>
                <span className="text-2xl md:text-4xl lg:text-5xl leading-[1.2] font-medium text-black/90">"Planning for a website or a web application"</span>
                <span className="text-xl md:text-3xl lg:text-4xl leading-[1.2]">Let's Make It Happen.</span>
              </h2>
              <p className="text-base md:text-lg mb-10 max-w-xl text-black/70 font-medium text-center">
                Fill up the contact form - our team will take it from there.
              </p>

              <div className="w-full max-w-lg mx-auto flex flex-col items-center gap-6">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-black hover:bg-zinc-900 text-white px-14 py-4 rounded-xl font-bold text-base md:text-lg tracking-wider transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/30 shadow-lg hover:shadow-2xl transform hover:-translate-y-[2px]"
                >
                  Contact Us →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* Contact Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-yellow-400 border-4 border-black p-8 rounded-2xl shadow-[8px_8px_0_0_#000]">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-black text-white font-bold rounded-full hover:bg-zinc-800 transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>
            <h3 className="text-3xl font-black mb-6 text-black tracking-tight text-center">Let's Connect</h3>
            <form onSubmit={onSubmit} className="flex flex-col gap-4 text-left">
              <div>
                <label className="block text-black font-bold mb-2">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="w-full bg-white border-2 border-black rounded-lg px-4 py-3 font-medium text-black focus:outline-none focus:ring-4 focus:ring-black/20"
                  placeholder="Soham Bhutkar"
                />
              </div>
              <div>
                <label className="block text-black font-bold mb-2">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full bg-white border-2 border-black rounded-lg px-4 py-3 font-medium text-black focus:outline-none focus:ring-4 focus:ring-black/20"
                  placeholder="aarav@example.com"
                />
              </div>
              <div>
                <label className="block text-black font-bold mb-2">Message</label>
                <textarea 
                  name="message" 
                  required 
                  rows={4}
                  className="w-full bg-white border-2 border-black rounded-lg px-4 py-3 font-medium text-black focus:outline-none focus:ring-4 focus:ring-black/20 resize-none"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="mt-2 bg-black text-white font-bold py-4 rounded-lg hover:bg-zinc-800 transition-colors shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-y-1 hover:translate-x-1"
              >
                Submit Form
              </button>
              {result && (
                <p className={`text-center font-bold mt-2 ${result.includes("Error") ? "text-red-700" : "text-black"}`}>
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
