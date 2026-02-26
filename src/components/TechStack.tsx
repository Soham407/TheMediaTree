import React from 'react';
import ScrollVelocity from './ui/ScrollVelocity';
import { 
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiNodedotjs,
  SiExpress,
  SiGreensock,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiPython,
  SiC,
  SiCplusplus,
  SiGithub,
  SiFigma,
  SiVite,
  SiWordpress,
  SiWoocommerce
} from 'react-icons/si';

const techLine1 = [
  { name: 'React JS', icon: <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiReact color="#61DAFB" size="100%" /></div> },
  { name: 'Next JS', icon: <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiNextdotjs color="white" size="100%" /></div> },
  { 
    name: 'HTML CSS JS', 
    icon: (
      <div className="flex gap-2">
        <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiHtml5 color="#E34F26" size="100%" /></div>
        <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiCss3 color="#1572B6" size="100%" /></div>
        <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiJavascript color="#F7DF1E" size="100%" /></div>
      </div>
    ) 
  },
  { name: 'PHP', icon: <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiPhp color="#777BB4" size="100%" /></div> },
  { name: 'Node JS', icon: <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiNodedotjs color="#339933" size="100%" /></div> },
  { name: 'EXPRESS JS', icon: <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiExpress color="white" size="100%" /></div> },
  { name: 'GSAP', icon: <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiGreensock color="#88CE02" size="100%" /></div> },
  { name: 'TypeScript', icon: <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiTypescript color="#3178C6" size="100%" /></div> },
  { name: 'Tailwind CSS', icon: <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiTailwindcss color="#06B6D4" size="100%" /></div> },
  { name: 'Vite', icon: <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiVite color="#646CFF" size="100%" /></div> },
];

const techLine2 = [
  { name: 'Supabase', icon: <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiSupabase color="#3ECF8E" size="100%" /></div> },
  { name: 'PostGress SQL', icon: <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiPostgresql color="#4169E1" size="100%" /></div> },
  { name: 'MongoDB', icon: <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiMongodb color="#47A248" size="100%" /></div> },
  { name: 'Firebase', icon: <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiFirebase color="#FFCA28" size="100%" /></div> },
  { name: 'Python', icon: <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiPython color="#3776AB" size="100%" /></div> },
  { 
    name: 'C,C++', 
    icon: (
      <div className="flex gap-2">
        <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiC color="#A8B9CC" size="100%" /></div>
        <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiCplusplus color="#00599C" size="100%" /></div>
      </div>
    ) 
  },
  { name: 'GitHub', icon: <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiGithub color="white" size="100%" /></div> },
  { name: 'Figma', icon: <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiFigma color="#F24E1E" size="100%" /></div> },
  { name: 'Wordpress', icon: <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiWordpress color="#21759B" size="100%" /></div> },
  { name: 'woocommerce', icon: <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"><SiWoocommerce color="#96588A" size="100%" /></div> },
];

interface TechRowProps {
  items: { name: string; icon: React.ReactNode }[];
  key?: React.Key; // This key is for React's internal use when rendering lists of TechRow components
}

const TechRow = ({ items }: TechRowProps) => (
  <div className="flex items-center gap-12 pr-12">
    {items.map((item, i) => (
      <div key={i} className="flex items-center gap-4">
        {item.icon}
        <span className="text-4xl md:text-7xl font-bold tracking-tight">{item.name}</span>
      </div>
    ))}
  </div>
);

export default function TechStack() {
  return (
    <section id="stack" className="py-24 bg-black text-white overflow-hidden flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 mb-4 md:mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Technologies We Use</h2>
      </div>
      
      <div className="flex flex-col gap-12 md:gap-16">
        <ScrollVelocity
          texts={[ <TechRow key="1" items={techLine1} />, <TechRow key="2" items={techLine2} /> ]} 
          velocity={50}
          className="py-4"
        />
      </div>
    </section>
  );
}
