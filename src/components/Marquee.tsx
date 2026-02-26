import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Marquee() {
  const container = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!track.current) return;
    
    // Calculate the width of one set of items
    const trackWidth = track.current.scrollWidth / 2;

    gsap.to(track.current, {
      x: -trackWidth,
      duration: 20,
      ease: 'none',
      repeat: -1,
    });
  }, { scope: container });

  const items = ['Strategy', 'Design', 'CMS', 'Speed', '100% Custom Craft', '300+ Brands'];

  return (
    <div ref={container} className="py-8 bg-yellow-400 text-black overflow-hidden flex whitespace-nowrap">
      <div ref={track} className="flex gap-8 items-center text-2xl md:text-4xl font-bold uppercase">
        {/* Double the items for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <React.Fragment key={i}>
            <span>{item}</span>
            <span className="w-3 h-3 bg-black rounded-full inline-block"></span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
