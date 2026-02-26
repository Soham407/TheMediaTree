import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import EnergyBeam from "./ui/energy-beam";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const textMask = useRef<SVGTextElement>(null);
  const [fontSize, setFontSize] = useState(120);

  // Compute responsive font size since SVG attributes don't support CSS clamp()
  useEffect(() => {
    const updateFontSize = () => {
      const vw = window.innerWidth;
      // Equivalent of clamp(3rem, 15vw, 12rem) → clamp(48px, 15vw, 192px)
      const computed = Math.min(192, Math.max(48, vw * 0.15));
      setFontSize(computed);
    };
    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  useGSAP(
    () => {
      if (!container.current || !textMask.current) return;

      // Header lives outside this component's scope, so we must
      // grab it by direct DOM reference (scoped selectors won't reach it)
      const header = document.querySelector("#main-header");
      if (header) gsap.set(header, { autoAlpha: 0 });

      // Reset initial states
      gsap.set(".energy-beam-container", { autoAlpha: 0 });
      gsap.set(".hero-bg-crossfade", { autoAlpha: 0 });
      gsap.set(".scroll-indicator-container", { autoAlpha: 0 });

      const mm = gsap.matchMedia();

      // 1. Reduced Motion Preference: Gentle fade-ins, no extreme scaling or infinite pulses
      mm.add("(prefers-reduced-motion: reduce)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        tl.set(textMask.current, { autoAlpha: 0 })
          .to(".hero-bg-crossfade", { autoAlpha: 1, duration: 1 })
          .to(".energy-beam-container", { autoAlpha: 1, duration: 1 }, "<")
          .to(".hero-masked", { clipPath: "none", duration: 0.01 }, "+=0.1")
          .fromTo(".hero-content", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, "<")
          .from(".hero-word", { opacity: 0, duration: 1, stagger: 0.1 }, "<")
          .to(".scroll-indicator-container", { autoAlpha: 1, duration: 0.5 }, "+=0.2")
          .to(header, { autoAlpha: 1, duration: 1 }, "<");
      });

      // 2. Default Motion: Time-based scale on load (no scroll-cutscene friction)
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

        tl.fromTo(
            textMask.current,
            { scale: 1, transformOrigin: "50% 50%" },
            { scale: 80, transformOrigin: "50% 50%", duration: 1.8, force3D: true, delay: 1 } // Changed delay to 1 second
          )
          .to(".hero-bg-crossfade", { autoAlpha: 1, duration: 0.4, ease: "power1.in" }, 1.8)
          .to(".energy-beam-container", { autoAlpha: 1, duration: 0.6 }, 1.9)
          .fromTo(".hero-content", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 1 }, 2.2)
          .to(".hero-masked", { clipPath: "none", duration: 0.01 }, 2.8)
          .from(".hero-word", { y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }, 2.3)
          .to(".scroll-indicator-container", { autoAlpha: 1, duration: 0.5 }, 3)
          .to(header, { autoAlpha: 1, duration: 0.5, ease: "power1.out" }, 3);

        // Pulse animation for decorative circles
        gsap.to(".pulse-circle-1", {
          scale: 1.5,
          opacity: 0,
          duration: 3,
          repeat: -1,
          ease: "power1.out"
        });

        gsap.to(".pulse-circle-2", {
          scale: 1.5,
          opacity: 0,
          duration: 3,
          repeat: -1,
          delay: 1.5,
          ease: "power1.out"
        });
      });

      return () => mm.revert();
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="w-full h-screen min-h-svh relative overflow-hidden bg-white text-black z-10"
    >
      {/* Accessibility Fix: Screen Reader Context */}
      <h1 className="sr-only">The Media Tree</h1>
      <h2 className="sr-only">We Make Engaging Websites</h2>

      {/* Accessibility & UX Fix: Clickable Scroll Indicator */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="scroll-indicator-container opacity-0 absolute bottom-10 flex flex-col items-center pointer-events-auto">
          <button 
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
            className="group flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
            aria-label="Scroll down to next section"
          >
            <span className="text-sm uppercase tracking-widest mb-2 font-medium opacity-70 group-hover:opacity-100 transition-opacity text-white drop-shadow-md">
              Scroll to explore
            </span>
            <svg
              className="animate-bounce text-white drop-shadow-md"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Black crossfade overlay */}
      <div
        className="absolute inset-0 z-5 bg-black hero-bg-crossfade pointer-events-none"
        aria-hidden="true"
      />

      {/* The hero content, masked by the SVG clip-path */}
      <div
        className="absolute inset-0 z-10 flex flex-col justify-center items-center bg-black text-white overflow-hidden hero-masked"
        style={{ clipPath: "url(#hero-clip-path)" }}
      >
        <div className="absolute inset-0 z-0 energy-beam-container">
          <EnergyBeam />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-yellow-400 pulse-circle-1 opacity-50 z-0 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-yellow-400 pulse-circle-2 opacity-50 z-0 pointer-events-none"></div>

        <div className="hero-content z-10 text-center pointer-events-none opacity-0 relative">
          <div className="flex flex-col items-center">
            {/* Minimalist 'Quality' Tagline */}
            <div className="mb-12 overflow-hidden">
               <span className="hero-word block text-xs md:text-sm tracking-[0.4em] uppercase text-yellow-500 font-bold">
                 Premium Digital Craft
               </span>
            </div>

            <div className="flex flex-col items-center gap-4 md:gap-6 overflow-visible w-full px-4">
              <div className="overflow-hidden">
                <div className="hero-word">
                  <img src="/wemake.svg" alt="" aria-hidden="true" className="w-[60vw] max-w-[200px] md:max-w-[280px] h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]" />
                </div>
              </div>
              
              <div className="overflow-hidden">
                <div className="hero-word">
                  <img src="/engaging.svg" alt="" aria-hidden="true" className="w-[80vw] max-w-[300px] md:max-w-[450px] h-auto object-contain drop-shadow-[0_0_30px_rgba(234,179,8,0.1)]" />
                </div>
              </div>

              <div className="overflow-hidden">
                <div className="hero-word">
                  <img src="/websites.svg" alt="" aria-hidden="true" className="w-[65vw] max-w-[220px] md:max-w-[320px] h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]" />
                </div>
              </div>
            </div>

            <div className="mt-16 h-px w-24 bg-linear-to-r from-transparent via-zinc-500 to-transparent hero-word"></div>

            <p className="mt-8 text-sm md:text-base text-zinc-500 max-w-lg mx-auto hero-word tracking-widest uppercase font-light leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Strategically designed to <span className="text-white font-medium italic">Command Attention</span>
            </p>
          </div>
        </div>
      </div>

      {/* SVG clip-path definition */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="hero-clip-path">
            <text
              ref={textMask}
              x="50%"
              y="45%"
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={fontSize}
              fontWeight="900"
              fontFamily="'Outfit', sans-serif"
              letterSpacing="-0.02em"
            >
              <tspan x="50%" dy="-1.05em">
                THE
              </tspan>
              <tspan x="50%" dy="1.05em">
                MEDIA
              </tspan>
              <tspan x="50%" dy="1.05em">
                TREE
              </tspan>
            </text>
          </clipPath>
        </defs>
      </svg>
    </section>
  );
}
