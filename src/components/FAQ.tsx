import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQ_DATA = [
  { 
    q: 'What is your primary tech stack for development?', 
    a: 'We specialize in the modern web stack: React, Next.js, and TypeScript for the frontend, powered by robust backends like Node.js, Express, and Supabase.',
    color: '#1A3321' // Deep Green
  },
  { 
    q: 'Can you handle WordPress and E-commerce projects?', 
    a: 'Yes! We build high-performance WordPress sites and custom WooCommerce stores, combining flexibility with modern design principles.',
    color: '#1A2342' // Deep Blue
  },
  { 
    q: 'How do you handle animations and user interactions?', 
    a: 'We use GSAP (GreenSock) and Tailwind CSS to create fluid, high-end animations that engage users without compromising performance.',
    color: '#311A42' // Deep Purple
  },
  { 
    q: 'Will my website be mobile-responsive and SEO-friendly?', 
    a: 'Absolutely. We follow a mobile-first approach and optimize for Core Web Vitals to ensure high visibility on both search engines and AI scrapers.',
    color: '#421A31' // Deep Magenta
  },
  { 
    q: 'What characterizes your development process?', 
    a: 'Transparency and performance. From Figma wireframes to final deployment on Vite or Vercel, we maintain a clear roadmap with rigorous testing.',
    color: '#1A3321' // Green
  },
  { 
    q: 'Do you offer custom backend solutions?', 
    a: 'Yes, we build scalable backends using Node.js, PostgreSQL, and Supabase, ensuring your data is secure and your app can scale effortlessly.',
    color: '#1A2342' // Blue
  },
  { 
    q: 'What design tools do you use for prototyping?', 
    a: 'We use Figma for all our design work, creating high-fidelity prototypes that allow you to visualize and test the user journey before we write any code.',
    color: '#311A42' // Purple
  },
  { 
    q: 'How long does a typical project take to complete?', 
    a: 'A standard high-quality project usually takes 4-8 weeks, depending on complexity. We focus on delivering a pixel-perfect, fully optimized product.',
    color: '#421A31' // Magenta
  },
  { 
    q: 'Do you provide ongoing maintenance and support?', 
    a: 'Yes, we offer maintenance packages to keep your site updated, secure, and performing at its best long after the initial launch.',
    color: '#1A3321' // Green
  },
  { 
    q: 'Can you migrate my existing site to a new platform?', 
    a: 'We specialize in seamless migrations from platforms like WordPress or Shopify to modern stacks like Next.js, ensuring zero downtime and SEO retention.',
    color: '#1A2342' // Blue
  },
  { 
    q: 'How do you ensure the website is fast and performant?', 
    a: 'We use server-side rendering, image optimization, and code-splitting techniques in Next.js to ensure lightning-fast load times and high Lighthouse scores.',
    color: '#311A42' // Purple
  },
];

export default function FAQ() {
  const container = useRef<HTMLDivElement>(null);
  const leftCol = useRef<HTMLDivElement>(null);
  const faqItemsRef = useRef<(HTMLDetailsElement | null)[]>([]);

  useGSAP(() => {
    if (!container.current || !leftCol.current || window.innerWidth < 768) return;

    ScrollTrigger.create({
      trigger: container.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: leftCol.current,
      pinSpacing: false,
    });

    faqItemsRef.current.forEach((item, i) => {
      if (!item) return;
      gsap.fromTo(item, 
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 95%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

  }, { scope: container });

  return (
    <section id="faq" ref={container} className="bg-black text-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:flex">
        
        {/* Left Sticky Column */}
        <div 
          ref={leftCol} 
          className="w-full md:w-[45%] h-fit md:h-screen flex flex-col justify-center py-12 md:py-0 pr-12"
        >
          <div className="max-w-md">
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-8 tracking-tight">
              Got Questions About Our <span className="text-yellow-400">Services?</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 font-medium font-sans">
              Real answers from a team that's built dozens of successful projects.
            </p>
            
            {/* Aesthetic Slider/Divider */}
            <div className="relative w-48 h-[2px] bg-zinc-800">
              <div className="absolute top-1/2 left-[40%] -translate-y-1/2 w-5 h-5 border-2 border-yellow-400 rounded-full bg-black shadow-sm flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Scrolling Column */}
        <div className="w-full md:w-[55%] flex flex-col gap-4 py-12 md:py-48">
          {FAQ_DATA.map((faq, i) => (
            <details 
              key={i} 
              ref={el => faqItemsRef.current[i] = el}
              className="group list-none rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.01] cursor-pointer border border-white/5"
              style={{ backgroundColor: faq.color }}
            >
              <summary className="p-6 md:p-8 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-inset rounded-3xl">
                <h3 className="text-lg md:text-xl font-semibold pr-10 leading-tight text-white/90">
                  {faq.q}
                </h3>
                <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
                  <span className="absolute w-5 h-[1.5px] bg-white/70" />
                  <span className="absolute w-[1.5px] h-5 bg-white/70 transition-transform duration-500 group-open:rotate-90" />
                </div>
              </summary>
              <div className="px-6 md:px-8 pb-8 text-base md:text-lg text-white/60 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-top-4 duration-500">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}




