import React from 'react';

export default function Footer() {
  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#stack', label: 'Tech Stack' },
    { href: '#process', label: 'Process' },
    { href: '#work', label: 'Portfolio' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <footer id="contact" className="bg-zinc-950 text-white relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Upper Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">The Media Tree</h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md mb-6">
              Creative Solutions Agency building custom, high-performance websites that command attention.
            </p>
            <div className="h-1 w-12 bg-yellow-400 rounded-full" />
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold mb-6 uppercase tracking-[0.2em] text-zinc-500">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-zinc-400 hover:text-yellow-400 transition-colors duration-200 text-base inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-yellow-400 group-hover:w-3 transition-all duration-300" aria-hidden="true" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold mb-6 uppercase tracking-[0.2em] text-zinc-500">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:vivek@themediatree.co.in" className="text-zinc-400 hover:text-yellow-400 transition-colors text-base break-all">
                  vivek@themediatree.co.in
                </a>
              </li>
              <li>
                <a href="tel:+919823190760" className="text-zinc-400 hover:text-yellow-400 transition-colors text-base">
                  +91 9823190760
                </a>
              </li>
            </ul>
          </div>

          {/* Address Column */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold mb-6 uppercase tracking-[0.2em] text-zinc-500">Address</h3>
            <address className="text-zinc-400 not-italic text-base leading-relaxed">
              The Media Tree LLP.<br />
              470, Shaniwar Peth,<br />
              Gurudatta Sahawas, D-wing,<br />
              Block 33, Pune - 411 030.
            </address>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} The Media Tree LLP. All rights reserved.
          </p>
          <p className="text-zinc-700 text-xs tracking-wider">
            Designed & Built with <span className="text-yellow-400">♥</span> in Pune
          </p>
        </div>
      </div>
    </footer>
  );
}
