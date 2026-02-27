import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQ_DATA = [
  { 
    q: 'What is your primary tech stack for development?', 
    a: 'We specialize in the modern web stack: React, Next.js, and TypeScript for the frontend, powered by robust backends like Node.js, Express, and Supabase.'
  },
  { 
    q: 'Can you handle WordPress and E-commerce projects?', 
    a: 'Yes! We build high-performance WordPress sites and custom WooCommerce stores, combining flexibility with modern design principles.'
  },
  { 
    q: 'How do you handle animations and user interactions?', 
    a: 'We use GSAP (GreenSock) and Tailwind CSS to create fluid, high-end animations that engage users without compromising performance.'
  },
  { 
    q: 'Will my website be mobile-responsive and SEO-friendly?', 
    a: 'Absolutely. We follow a mobile-first approach and optimize for Core Web Vitals to ensure high visibility on both search engines and AI scrapers.'
  },
  { 
    q: 'What characterizes your development process?', 
    a: 'Transparency and performance. From Figma wireframes to final deployment on Vite or Vercel, we maintain a clear roadmap with rigorous testing.'
  },
  { 
    q: 'Do you offer custom backend solutions?', 
    a: 'Yes, we build scalable backends using Node.js, PostgreSQL, and Supabase, ensuring your data is secure and your app can scale effortlessly.'
  },
  { 
    q: 'What design tools do you use for prototyping?', 
    a: 'We use Figma for all our design work, creating high-fidelity prototypes that allow you to visualize and test the user journey before we write any code.'
  },
  { 
    q: 'How long does a typical project take to complete?', 
    a: 'A standard high-quality project usually takes 4-8 weeks, depending on complexity. We focus on delivering a pixel-perfect, fully optimized product.'
  },
  { 
    q: 'Do you provide ongoing maintenance and support?', 
    a: 'Yes, we offer maintenance packages to keep your site updated, secure, and performing at its best long after the initial launch.'
  },
  { 
    q: 'Can you migrate my existing site to a new platform?', 
    a: 'We specialize in seamless migrations from platforms like WordPress or Shopify to modern stacks like Next.js, ensuring zero downtime and SEO retention.'
  },
  { 
    q: 'How do you ensure the website is fast and performant?', 
    a: 'We use server-side rendering, image optimization, and code-splitting techniques in Next.js to ensure lightning-fast load times and high Lighthouse scores.'
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

    faqItemsRef.current.forEach((item) => {
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
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:flex relative z-10">
        
        {/* Left Sticky Column */}
        <div 
          ref={leftCol} 
          className="w-full md:w-[45%] h-fit md:h-screen flex flex-col justify-center py-12 md:py-0 pr-0 md:pr-12"
        >
          <div className="max-w-md">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400/70 font-medium mb-4">FAQ</p>
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Got Questions About Our <span className="text-yellow-400">Services?</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 mb-8 font-medium font-sans">
              Real answers from a team that's built dozens of successful projects.
            </p>
            
            {/* Stats row */}
            <div className="flex gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-sm text-zinc-600 uppercase tracking-wider">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">4-8</div>
                <div className="text-sm text-zinc-600 uppercase tracking-wider">Week Delivery</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">100%</div>
                <div className="text-sm text-zinc-600 uppercase tracking-wider">Custom</div>
              </div>
            </div>

            <div className="h-1 w-16 bg-yellow-400 rounded-full" />
          </div>
        </div>

        {/* Right Scrolling Column */}
        <div className="w-full md:w-[55%] flex flex-col gap-4 py-12 md:py-48">
          {FAQ_DATA.map((faq, i) => (
            <details 
              key={i} 
              ref={el => faqItemsRef.current[i] = el}
              className="group list-none rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer border border-zinc-800 bg-zinc-950 open:bg-yellow-400 open:border-yellow-400 shadow-lg open:shadow-xl hover:border-zinc-600"
            >
              <summary className="p-6 md:p-8 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400 group-open:focus-visible:ring-black focus-visible:ring-inset rounded-3xl group-open:rounded-b-none transition-colors">
                <h3 className="text-lg md:text-xl font-bold pr-10 leading-tight text-white group-open:text-black transition-colors duration-300">
                  {faq.q}
                </h3>
                {/* Plus / Minus Custom Icon */}
                <div className="relative w-10 h-10 flex items-center justify-center shrink-0 rounded-full border border-zinc-700 bg-black group-open:bg-black group-open:border-black transition-transform duration-500 group-hover:scale-110">
                  <span className="absolute w-4 h-[2px] bg-white group-open:bg-white transition-all duration-300 group-open:rotate-180" />
                  <span className="absolute w-[2px] h-4 bg-white group-open:bg-white transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                </div>
              </summary>
              <div className="px-6 md:px-8 pb-8 text-base md:text-lg text-black/80 font-medium leading-relaxed max-w-2xl">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
