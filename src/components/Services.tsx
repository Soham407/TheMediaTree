import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const container = useRef<HTMLDivElement>(null);
  const leftCol = useRef<HTMLDivElement>(null);
  const rightCol = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current || !rightCol.current || !leftCol.current) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: container.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: rightCol.current,
      });
    });

    const steps = gsap.utils.toArray<HTMLElement>('.service-step');
    steps.forEach((step, i) => {
      gsap.from(step, {
        scrollTrigger: {
          trigger: step,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
        },
        opacity: 0.2,
        x: -50,
      });
    });

  }, { scope: container });

  const services = [
    { 
      title: 'UI/UX Design', 
      subtitle: 'User-centric & conversion-focused.',
      desc: 'We craft intuitive, engaging interfaces designed to captivate your audience and drive conversions. By carefully prototyping interfaces, we ensure every touchpoint is optimized for usability before coding begins. Our designs are both aesthetically brilliant and strategically aligned with your brand.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
      )
    },
    { 
      title: 'Web Development', 
      subtitle: 'High-performance React & Next.js builds.',
      desc: 'We engineer blazing-fast, scalable web applications tailored specifically to your business goals. Utilizing modern frameworks, we guarantee pixel-perfect responsiveness across all devices and screen sizes. Clean code and robust architecture ensure your platform is built for long-term success.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
      )
    },
    { 
      title: 'Website Maintenance', 
      subtitle: 'Proactive support & optimization.',
      desc: 'Keep your application secure, fast, and fully updated without lifting a finger. We handle routine security patches, performance monitoring, and necessary content refinements. Focus entirely on your business while we ensure your digital presence never misses a beat.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      )
    },
    { 
      title: 'Platform Migration', 
      subtitle: 'Seamless transitions, zero downtime.',
      desc: 'Upgrade to a modern tech stack like Next.js or WooCommerce without losing your hard-earned SEO. We meticulously plan and execute data transfers to prevent any disruption to your live operations. Enjoy a smooth, stress-free transition that modernizes your infrastructure.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
        </svg>
      )
    },
    { 
      title: 'Consultation', 
      subtitle: 'Clarity meets capability.',
      desc: 'Not sure where to start with your tech stack? We offer expert consultation to help map out your goals, plan your project, and choose the right tools. Whether it\'s strategy, scalability, or performance, we provide the answers and clear roadmaps you need to succeed.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      )
    },
  ];

  return (
    <section id="services" ref={container} className="bg-zinc-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row relative">
        
        {/* Left Scrolling Column */}
        <div ref={leftCol} className="w-full md:w-1/2 py-32 md:py-[50vh] flex flex-col gap-24 pr-0 md:pr-16">
          {services.map((service, i) => (
            <div key={i} className="service-step relative group cursor-pointer block">
              {/* Offset border for neo-brutalism on hover */}
              <div className="absolute inset-0 bg-yellow-400 rounded-4xl translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" aria-hidden="true" />
              
              <div className="relative p-8 md:p-10 bg-black border border-zinc-800 group-hover:border-zinc-600 rounded-4xl z-10 flex flex-col h-full transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {/* Icon Circle */}
                    <div className="w-14 h-14 rounded-2xl border border-zinc-700 bg-zinc-900 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black group-hover:border-yellow-400 transition-all duration-300">
                      {service.icon}
                    </div>
                    <span className="text-zinc-600 text-sm font-mono tracking-widest group-hover:text-yellow-400 transition-colors duration-300">
                      0{i + 1}
                    </span>
                  </div>
                  {/* Subtle arrow indicator */}
                  <div className="text-zinc-700 group-hover:text-yellow-400 transform transition-all duration-300 group-hover:translate-x-1 opacity-0 group-hover:opacity-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight group-hover:text-white transition-colors">{service.title}</h3>
                <h4 className="text-base md:text-lg text-yellow-400/70 font-medium mb-5 group-hover:text-yellow-400 transition-colors">{service.subtitle}</h4>
                
                {/* Divider */}
                <div className="w-12 h-px bg-zinc-800 group-hover:w-20 group-hover:bg-yellow-400 transition-all duration-500 mb-5" />
                
                <p className="text-zinc-500 text-base leading-relaxed group-hover:text-zinc-400 transition-colors">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Sticky Column */}
        <div ref={rightCol} className="w-full md:w-1/2 h-screen flex items-center md:justify-end p-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400/70 font-medium mb-4">What We Do</p>
            <h2 className="text-5xl md:text-7xl font-bold md:text-right leading-tight">
              Our Creative<br />
              <span className="text-yellow-400">Solutions</span>
            </h2>
            <div className="h-1 w-16 bg-yellow-400 mt-6 md:ml-auto rounded-full" />
          </div>
        </div>

      </div>
    </section>
  );
}
