import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Portfolio() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.portfolio-card');
    
    cards.forEach((card: any) => {
      const image = card.querySelector('.portfolio-image');
      
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -10, duration: 0.3, ease: 'power2.out' });
        gsap.to(image, { scale: 1.05, duration: 0.5, ease: 'power2.out' });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
        gsap.to(image, { scale: 1, duration: 0.5, ease: 'power2.out' });
      });
    });
  }, { scope: container });

  const works = [
    { name: 'Govardhan Ecovillage', desc: 'Wellness & Spiritual Retreat', img: 'https://images.unsplash.com/photo-1545389336-eaeecece96ef?auto=format&fit=crop&q=80&w=600&h=400' },
    { name: 'Rioga Premium', desc: 'Luxury Real Estate', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600&h=400' },
    { name: 'Avalon Heights', desc: 'International School', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600&h=400' },
  ];

  return (
    <section ref={container} className="py-24 bg-zinc-900 text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.map((work, i) => (
            <div key={i} className="portfolio-card cursor-pointer group">
              <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img 
                  src={work.img} 
                  alt={work.name} 
                  className="portfolio-image w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{work.name}</h3>
              <p className="text-zinc-400">{work.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
