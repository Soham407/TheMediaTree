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

    ScrollTrigger.create({
      trigger: container.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: window.innerWidth >= 768 ? rightCol.current : false,
    });

    const steps = gsap.utils.toArray('.service-step');
    steps.forEach((step: any, i) => {
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
      desc: 'We craft intuitive, engaging interfaces designed to captivate your audience and drive conversions. By carefully prototyping interfaces, we ensure every touchpoint is optimized for usability before coding begins. Our designs are both aesthetically brilliant and strategically aligned with your brand.'
    },
    { 
      title: 'Web Development', 
      subtitle: 'High-performance React & Next.js builds.',
      desc: 'We engineer blazing-fast, scalable web applications tailored specifically to your business goals. Utilizing modern frameworks, we guarantee pixel-perfect responsiveness across all devices and screen sizes. Clean code and robust architecture ensure your platform is built for long-term success.'
    },
    { 
      title: 'Website Maintenance', 
      subtitle: 'Proactive support & optimization.',
      desc: 'Keep your application secure, fast, and fully updated without lifting a finger. We handle routine security patches, performance monitoring, and necessary content refinements. Focus entirely on your business while we ensure your digital presence never misses a beat.'
    },
    { 
      title: 'Platform Migration', 
      subtitle: 'Seamless transitions, zero downtime.',
      desc: 'Upgrade to a modern tech stack like Next.js or WooCommerce without losing your hard-earned SEO. We meticulously plan and execute data transfers to prevent any disruption to your live operations. Enjoy a smooth, stress-free transition that modernizes your infrastructure.'
    },
    { 
      title: 'Consultation', 
      subtitle: 'Clarity meets capability.',
      desc: 'Not sure where to start with your tech stack? We offer expert consultation to help map out your goals, plan your project, and choose the right tools. Whether it\'s strategy, scalability, or performance, we provide the answers and clear roadmaps you need to succeed.'
    },
  ];

  return (
    <section id="services" ref={container} className="bg-zinc-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row relative">
        
        {/* Left Scrolling Column */}
        <div ref={leftCol} className="w-full md:w-1/2 py-32 md:py-[50vh] flex flex-col gap-32 pr-0 md:pr-16">
          {services.map((service, i) => (
            <div key={i} className="service-step p-8 bg-black border-l-2 border-yellow-400 rounded-2xl hover:border-white transition-colors">
              <div className="text-yellow-400 text-xl font-mono mb-4">0{i + 1}</div>
              <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
              <h4 className="text-xl text-zinc-300 font-semibold mb-4">{service.subtitle}</h4>
              <p className="text-zinc-500 text-lg leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Right Sticky Column */}
        <div ref={rightCol} className="w-full md:w-1/2 h-screen flex items-center md:justify-end p-8">
          <h2 className="text-5xl md:text-7xl font-bold md:text-right leading-tight">
            Our Creative<br />
            <span className="text-yellow-400">Solutions</span>
          </h2>
        </div>

      </div>
    </section>
  );
}
