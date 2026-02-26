import React, { useRef } from 'react';

export default function FAQ() {
  const container = useRef<HTMLDivElement>(null);

  const faqs = [
    { q: 'What is your approach to website development?', a: 'We focus on high-performance, custom-built websites that combine stunning design with robust functionality.' },
    { q: 'Can you redesign my current website?', a: 'Yes - we specialize in migrating and redesigning websites from various platforms into modern, scalable solutions.' },
    { q: 'Will I be able to update content myself?', a: 'Absolutely. We set up intuitive content management systems (CMS) so you can easily update text and images.' },
    { q: 'How long does it take to build a website?', a: 'Most project timelines range from 4 to 10 weeks, depending on the complexity and scope of the work.' },
  ];

  return (
    <section ref={container} id="faq" className="py-24 bg-black text-white px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Got Questions?</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details 
              key={i} 
              className="group border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900"
            >
              <summary className="p-6 flex justify-between items-center cursor-pointer hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 list-none [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg font-medium">{faq.q}</h3>
                <span className="transform transition-transform duration-300 group-open:rotate-45 text-2xl leading-none" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="p-6 pt-0 text-zinc-400 animate-in fade-in slide-in-from-top-2 duration-300">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
