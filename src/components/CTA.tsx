import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const container = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const squigglesRef = useRef<(SVGElement | null)[]>([]);
  const [result, setResult] = useState("");

  const isSending = result === "Sending....";
  const isSuccess = result === "Form Submitted Successfully";

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY || "ab9dd41a-015f-49d4-8f25-2d8dc7cc3265");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.currentTarget.reset();
      } else {
        setResult("Error! Please try again: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setResult("Network error! Please try again later.");
    }
  };

  useGSAP(() => {
    if (!container.current || !cardRef.current) return;

    gsap.from(cardRef.current, {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 85%',
      }
    });

    if (squigglesRef.current.length > 0) {
      gsap.to(squigglesRef.current, {
        rotate: 5,
        y: 8,
        yoyo: true,
        repeat: -1,
        duration: 3,
        ease: 'sine.inOut',
        stagger: 0.5
      });
    }

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
      <div className="absolute left-2 md:left-[8%] bottom-12 md:bottom-20 z-0 opacity-50 pointer-events-none">
        <svg ref={el => squigglesRef.current[0] = el} width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white drop-shadow">
          <path d="M5,45 C5,20 25,10 30,30 C35,50 15,60 25,40 C35,20 50,10 55,30 C60,50 40,60 50,40 C60,20 75,10 80,30 C85,50 65,60 75,40 C85,20 100,20 100,20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="absolute right-4 md:right-[12%] top-12 md:top-20 z-0 opacity-50 pointer-events-none">
        <svg ref={el => squigglesRef.current[1] = el} width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white drop-shadow">
          <path d="M5,40 L15,10 L30,40 L45,15 L60,35 L75,10 L90,30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Main Card */}
      <div ref={cardRef} className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Offset Border Effect */}
        <div className="absolute inset-0 border border-zinc-600 rounded-4xl transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 pointer-events-none" aria-hidden="true" />
        
        {/* Inner Container */}
        <div className="relative border border-zinc-600 rounded-4xl bg-black p-3 md:p-4 lg:p-5">
          
          {/* Main Colored Box */}
          <div className="bg-yellow-400 text-black rounded-3xl py-10 px-6 md:py-16 md:px-12 relative overflow-hidden">
            {/* Subtle dot pattern inside the yellow card */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)',
                backgroundSize: '16px 16px'
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col lg:flex-row w-full gap-12 lg:gap-8 justify-between text-left">
              <div className="flex-1 flex flex-col justify-center">
                <p className="text-sm uppercase tracking-[0.3em] text-black/50 font-bold mb-6">Get Started</p>
                <h2 className="font-sans font-bold mb-6 tracking-tight flex flex-col gap-2">
                  <span className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl leading-[1.1]">Ready to upgrade?</span>
                  <span className="text-xl md:text-2xl lg:text-3xl leading-[1.2] text-black/80">Let's build a high-performance website.</span>
                </h2>
                <p className="text-base md:text-lg mb-8 max-w-lg text-black/70 font-medium">
                  Fill out the form and our team will get back to you within a business day.
                </p>
              </div>

              <div className="flex-1 w-full max-w-md mx-auto lg:mx-0 bg-white/40 p-6 md:p-8 rounded-2xl border border-black/10 backdrop-blur-sm self-center">
                {isSuccess ? (
                   <div className="text-center py-12 flex flex-col items-center">
                      <div className="w-16 h-16 bg-black text-yellow-400 rounded-full flex items-center justify-center mb-6">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="font-medium text-black/80 mb-8 max-w-xs">Thank you for reaching out. We will be in touch shortly.</p>
                      <button 
                        onClick={() => setResult('')} 
                        className="bg-black hover:bg-zinc-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                      >
                        Send another
                      </button>
                   </div>
                ) : (
                  <form onSubmit={onSubmit} className="flex flex-col gap-4 text-left">
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                    <div>
                      <label htmlFor="cta-name" className="block text-black font-bold mb-1">Name</label>
                      <input 
                        id="cta-name"
                        type="text" 
                        name="name" 
                        required 
                        disabled={isSending}
                        className="w-full bg-white/80 border-2 border-black/20 focus:border-black rounded-lg px-4 py-3 font-medium text-black focus:outline-none focus:ring-4 focus:ring-black/10 transition-colors disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="cta-email" className="block text-black font-bold mb-1">Email</label>
                      <input 
                        id="cta-email"
                        type="email" 
                        name="email" 
                        required 
                        disabled={isSending}
                        className="w-full bg-white/80 border-2 border-black/20 focus:border-black rounded-lg px-4 py-3 font-medium text-black focus:outline-none focus:ring-4 focus:ring-black/10 transition-colors disabled:opacity-50"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="cta-message" className="block text-black font-bold mb-1">Message</label>
                      <textarea 
                        id="cta-message"
                        name="message" 
                        required 
                        rows={3}
                        disabled={isSending}
                        className="w-full bg-white/80 border-2 border-black/20 focus:border-black rounded-lg px-4 py-3 font-medium text-black focus:outline-none focus:ring-4 focus:ring-black/10 resize-none transition-colors disabled:opacity-50"
                        placeholder="How can we help?"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSending}
                      className="mt-2 bg-black text-white font-bold py-4 rounded-lg hover:bg-zinc-800 transition-colors shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/30 disabled:opacity-70 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] disabled:cursor-not-allowed"
                    >
                      {isSending ? 'Sending...' : 'Send Message'}
                    </button>
                    {result && !isSending && (
                      <p className={`text-center font-bold mt-2 text-red-700`}>
                        {result}
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
