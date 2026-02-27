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

    ScrollTrigger.create({
      trigger: container.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: window.innerWidth >= 768 ? leftCol.current : false,
    });

    const steps = gsap.utils.toArray('.process-step');
    steps.forEach((step: any, i) => {
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
    { title: 'Brand Foundation', desc: 'Define or refine logo, messaging & brand positioning.' },
    { title: 'Planning & Design', desc: 'Create wireframes and visual design in Figma.' },
    { title: 'Digital Development', desc: 'Build responsive & scalable web pages.' },
    { title: 'Interactions & Testing', desc: 'Add animations, forms, and custom interactions.' },
    { title: 'Launch & Support', desc: 'Go live smoothly with ongoing support.' },
  ];

  return (
    <section id="process" ref={container} className="bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row relative">
        {/* Left Sticky Column */}
        <div ref={leftCol} className="w-full md:w-1/2 h-screen flex items-center p-8">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Our Strategic<br />
            <span className="text-yellow-400">Process</span>
          </h2>
        </div>

        {/* Right Scrolling Column */}
        <div ref={rightCol} className="w-full md:w-1/2 py-32 md:py-[50vh] flex flex-col gap-32">
          {steps.map((step, i) => (
            <div key={i} className="process-step p-8 border-l-2 border-yellow-400">
              <div className="text-yellow-400 text-xl font-mono mb-4">0{i + 1}</div>
              <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
              <p className="text-zinc-400 text-lg">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
