import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const container = useRef<HTMLDivElement>(null);
  const rightCol = useRef<HTMLDivElement>(null);
  const leftCol = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current || !rightCol.current || !leftCol.current) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: container.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: leftCol.current,
      });
    });

    const steps = gsap.utils.toArray<HTMLElement>('.process-step');
    steps.forEach((step) => {
      gsap.from(step, {
        scrollTrigger: {
          trigger: step,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
        },
        opacity: 0.2,
        x: 50,
      });
    });

  }, { scope: container });

  const steps = [
    { 
      title: 'Brand Foundation', 
      desc: 'Define or refine logo, messaging & brand positioning.',
      detail: 'We dive deep into your brand DNA to understand what makes you unique, then craft a visual and verbal identity that resonates with your target audience.'
    },
    { 
      title: 'Planning & Design', 
      desc: 'Create wireframes and visual design in Figma.',
      detail: 'High-fidelity prototypes that let you interact with your product before a single line of code is written. Iterate fast, launch confident.'
    },
    { 
      title: 'Digital Development', 
      desc: 'Build responsive & scalable web pages.',
      detail: 'Clean, performant code using React, Next.js, and TypeScript. Every component is crafted for speed, accessibility, and maintainability.'
    },
    { 
      title: 'Interactions & Testing', 
      desc: 'Add animations, forms, and custom interactions.',
      detail: 'GSAP-powered animations, form validation, third-party integrations — rigorously tested across devices and browsers.'
    },
    { 
      title: 'Launch & Support', 
      desc: 'Go live smoothly with ongoing support.',
      detail: 'Seamless deployment on Vercel or your preferred host. We stick around for monitoring, maintenance, and continuous improvement.'
    },
  ];

  return (
    <section id="process" ref={container} className="bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row relative">
        {/* Left Sticky Column */}
        <div ref={leftCol} className="w-full md:w-1/2 h-screen flex items-center p-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400/70 font-medium mb-4">How We Work</p>
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Our Strategic<br />
              <span className="text-yellow-400">Process</span>
            </h2>
            <p className="text-zinc-500 text-lg mt-6 max-w-md">
              A proven 5-step framework that turns your vision into a high-performance digital product.
            </p>
            <div className="h-1 w-16 bg-yellow-400 mt-8 rounded-full" />
          </div>
        </div>

        {/* Right Scrolling Column */}
        <div ref={rightCol} className="w-full md:w-1/2 py-32 md:py-[50vh] flex flex-col gap-24">
          {steps.map((step, i) => (
            <div key={i} className="process-step group relative pl-8 md:pl-12">
              {/* Vertical progress line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800 group-hover:bg-yellow-400/30 transition-colors duration-500" aria-hidden="true" />
              {/* Active dot */}
              <div className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-yellow-400 bg-black group-hover:bg-yellow-400 transition-all duration-300" aria-hidden="true" />

              <div className="flex items-center gap-3 mb-3">
                <span className="text-yellow-400 text-sm font-mono tracking-widest">STEP 0{i + 1}</span>
                <div className="h-px w-8 bg-zinc-800 group-hover:w-16 group-hover:bg-yellow-400 transition-all duration-500" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight group-hover:text-white transition-colors">{step.title}</h3>
              <p className="text-yellow-400/70 text-lg font-medium mb-3 group-hover:text-yellow-400 transition-colors">{step.desc}</p>
              <p className="text-zinc-600 text-base leading-relaxed group-hover:text-zinc-400 transition-colors">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
