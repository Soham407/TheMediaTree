import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Portfolio() {
  const container = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const image = card.querySelector('.portfolio-image');
    gsap.to(card, { y: -10, duration: 0.3, ease: 'power2.out' });
    gsap.to(image, { scale: 1.05, duration: 0.5, ease: 'power2.out' });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const image = card.querySelector('.portfolio-image');
    gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
    gsap.to(image, { scale: 1, duration: 0.5, ease: 'power2.out' });
  };

  const works = [
    { name: 'Govardhan Ecovillage', desc: 'Wellness & Spiritual Retreat', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600&h=400' },
    { name: 'Rioga Premium', desc: 'Luxury Real Estate', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600&h=400' },
    { name: 'Avalon Heights', desc: 'International School', img: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600&h=400' },
  ];

  return (
    <section id="work" ref={container} className="py-24 bg-zinc-900 text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.map((work, i) => (
            <div 
              key={i} 
              className="portfolio-card cursor-pointer group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="overflow-hidden rounded-2xl mb-6 aspect-4/3">
                <img 
                  src={work.img} 
                  alt={work.name} 
                  loading="lazy"
                  width={600}
                  height={400}
                  className="portfolio-image w-full h-full object-cover bg-zinc-800"
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
