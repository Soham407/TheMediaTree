import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ExternalLink, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const container = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    const image = card.querySelector('.portfolio-image');
    gsap.to(card, { y: -10, duration: 0.4, ease: 'power2.out' });
    gsap.to(image, { scale: 1.05, duration: 0.6, ease: 'power2.out' });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    const image = card.querySelector('.portfolio-image');
    gsap.to(card, { y: 0, duration: 0.4, ease: 'power2.out' });
    gsap.to(image, { scale: 1, duration: 0.6, ease: 'power2.out' });
  };

  const works = [
    { 
      name: 'Pure Elements', 
      desc: 'Natural Ayurvedic Skin & Hair Care E-commerce', 
      img: '/projects/pureelements.in.webp',
      url: 'https://pureelements.in/'
    },
    { 
      name: 'Ikigai Real Estate', 
      desc: 'Premium Dubai Real Estate Investment & Brokerage', 
      img: '/projects/ikigaire.ae.webp',
      url: 'https://ikigaire.ae/'
    },
    { 
      name: 'Manoj Rane Associates', 
      desc: 'Bespoke Interior Design & Turnkey Projects', 
      img: '/projects/manojraneassociates.com.webp',
      url: 'https://manojraneassociates.com/'
    },
    { 
      name: 'Nikhil Group', 
      desc: 'Infrastructure & Building Solution Excellence', 
      img: '/projects/nikhilgroup.in.webp',
      url: 'https://nikhilgroup.in/'
    },
    { 
      name: 'Fountain Park Dental', 
      desc: 'Comprehensive Oral Health & Confident Smiles', 
      img: '/projects/fountainparkdental.com.webp',
      url: 'https://fountainparkdental.com/'
    },
    { 
      name: 'Mihir Joglekar', 
      desc: 'Illustration, Books & Advertising Art Portfolio', 
      img: '/projects/mihirjoglekar.com.webp',
      url: 'https://mihirjoglekar.com/'
    },
    { 
      name: 'Gravitas', 
      desc: 'Cost-Effective Construction Chemical Solutions', 
      img: '/projects/gravitasllp.com.webp',
      url: 'https://gravitasllp.com/'
    },
    { 
      name: 'Steel Point', 
      desc: 'Reinforcement Steel (TMT) Bars Supply', 
      img: '/projects/steelpoint.co.in.webp',
      url: 'https://steelpoint.co.in/'
    },
    { 
      name: 'C-BRIDGE (SPPU)', 
      desc: 'Innovation & Incubation Centre Ecosystem', 
      img: '/projects/iil.unipune.ac.in.webp',
      url: 'https://iil.unipune.ac.in/'
    },
    { 
      name: 'The Construction Group', 
      desc: 'Quality Real Estate Development Since 1987', 
      img: '/projects/theconstructiongroup.com.webp',
      url: 'https://theconstructiongroup.com/'
    },
    { 
      name: 'A&A Group', 
      desc: 'Architecture, Interiors & Planning Solutions', 
      img: '/projects/aandagroup.in.webp',
      url: 'https://aandagroup.in/'
    },
    { 
      name: 'Espree Realtors', 
      desc: 'Luxury Residential & Commercial Real Estate', 
      img: '/projects/espreerealtors.com.webp',
      url: 'https://espreerealtors.com/'
    },
    { 
      name: 'Pacific Smile Krafters', 
      desc: 'Compassionate Personalized Family Dentistry', 
      img: '/projects/pacificsmilekrafters.com.webp',
      url: 'https://pacificsmilekrafters.com/'
    },
    { 
      name: 'Savemax Solar', 
      desc: 'Solar Water Heating & Electricity Solutions', 
      img: '/projects/savemaxsolar.com.webp',
      url: 'https://savemaxsolar.com/'
    },
    { 
      name: 'JDS Ecosolutions', 
      desc: 'Sustainable Microbial Agricultural Solutions', 
      img: '/projects/jds-ecosolutions.com.webp',
      url: 'https://jds-ecosolutions.com/'
    },
    { 
      name: 'Shadaj', 
      desc: 'Hindustani Classical Music Promotion & Events', 
      img: '/projects/shadaj.org.webp',
      url: 'https://shadaj.org/'
    },
    { 
      name: 'Manish Industrial Corp', 
      desc: 'One-Stop Solution for Steel Requirements', 
      img: '/projects/micpune.com.webp',
      url: 'https://micpune.com/'
    },
    { 
      name: 'Chula Vista Urgent Dental', 
      desc: 'Emergency Dental Care & Smile Transformations', 
      img: '/projects/chulavistaurgentdental.com.webp',
      url: 'https://chulavistaurgentdental.com/'
    },
    { 
      name: 'GSL Biotech', 
      desc: 'WHO-GMP Certified Pharmaceutical Manufacturing', 
      img: '/projects/gslbiotech.in.webp',
      url: 'https://gslbiotech.in/'
    },
    { 
      name: 'Dr. Parmars Dentistry', 
      desc: 'Family & Cosmetic Dental Services', 
      img: '/projects/drparmars.com.webp',
      url: 'https://drparmars.com/'
    },
  ];

  return (
    <section id="work" ref={container} className="py-32 bg-black text-white px-4 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Featured Projects</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400">Work</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            A selection of our recent digital experiences, scalable platforms, and bespoke web solutions crafted for industry leaders.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, i) => (
            <a 
              key={i} 
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card group relative flex flex-col p-4 bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 rounded-[2rem] transition-colors duration-500"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Browser Mockup Wrapper */}
              <div className="relative overflow-hidden rounded-2xl mb-6 border border-zinc-800/50 bg-black">
                {/* Browser Top Bar */}
                <div className="h-8 bg-zinc-900/80 border-b border-zinc-800/50 flex items-center px-3 gap-1.5 absolute top-0 left-0 right-0 z-10 backdrop-blur-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                {/* Image Container with Top Padding for Top Bar */}
                <div className="aspect-4/3 pt-8 overflow-hidden bg-zinc-900">
                  <img 
                    src={work.img} 
                    alt={work.name} 
                    loading="lazy"
                    width={600}
                    height={400}
                    className="portfolio-image w-full h-full object-cover object-top origin-top"
                  />
                </div>
                
                {/* Hover Overlay Badge */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 pointer-events-none">
                   <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                     Visit Site <ExternalLink className="w-4 h-4" />
                   </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="px-2 pb-2">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{work.name}</h3>
                <p className="text-zinc-400 text-sm line-clamp-2">{work.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
