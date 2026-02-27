import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Marquee() {
  const container = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!track.current || !container.current) return;
    
    // Calculate the width of one set of items
    const trackWidth = track.current.scrollWidth / 2;

    const tween = gsap.to(track.current, {
      x: -trackWidth,
      duration: 20,
      ease: 'none',
      repeat: -1,
    });

    const handleMouseEnter = () => tween.pause();
    const handleMouseLeave = () => tween.play();

    const node = container.current;
    node.addEventListener('mouseenter', handleMouseEnter);
    node.addEventListener('mouseleave', handleMouseLeave);
    node.addEventListener('focusin', handleMouseEnter);
    node.addEventListener('focusout', handleMouseLeave);

    return () => {
      node.removeEventListener('mouseenter', handleMouseEnter);
      node.removeEventListener('mouseleave', handleMouseLeave);
      node.removeEventListener('focusin', handleMouseEnter);
      node.removeEventListener('focusout', handleMouseLeave);
    };
  }, { scope: container });

  const items = ['Strategy', 'Design', 'CMS', 'Speed', '100% Custom Craft'];

  return (
    <div ref={container} tabIndex={0} aria-label="Scrolling Features" className="py-8 bg-yellow-400 text-black overflow-hidden flex whitespace-nowrap focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-4 focus-visible:ring-black">
      <div ref={track} className="flex gap-8 items-center text-2xl md:text-4xl font-bold uppercase">
        {/* First set for screen readers */}
        {items.map((item, i) => (
          <React.Fragment key={`first-${i}`}>
            <span>{item}</span>
            <span className="w-3 h-3 bg-black rounded-full inline-block" aria-hidden="true"></span>
          </React.Fragment>
        ))}
        {/* Second set hidden from screen readers for seamless loop */}
        {items.map((item, i) => (
          <React.Fragment key={`second-${i}`}>
            <span aria-hidden="true">{item}</span>
            <span className="w-3 h-3 bg-black rounded-full inline-block" aria-hidden="true"></span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
