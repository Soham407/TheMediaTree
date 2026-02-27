import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 text-white py-12 px-4 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">The Media Tree</h2>
          <p className="text-zinc-400 max-w-sm">
            Creative Solutions Agency building custom, high-performance websites.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Navigation</h3>
          <ul className="space-y-2 text-zinc-400">
            <li><a href="#services" className="hover:text-yellow-400 transition-colors">Services</a></li>
            <li><a href="#stack" className="hover:text-yellow-400 transition-colors">Tech Stack</a></li>
            <li><a href="#process" className="hover:text-yellow-400 transition-colors">Process</a></li>
            <li><a href="#work" className="hover:text-yellow-400 transition-colors">Portfolio</a></li>
            <li><a href="#faq" className="hover:text-yellow-400 transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Contact</h3>
          <ul className="space-y-2 text-zinc-400">
            <li><a href="mailto:vivek@themediatree.co.in" className="hover:text-yellow-400 transition-colors">vivek@themediatree.co.in</a></li>
            <li><a href="tel:+919823190760" className="hover:text-yellow-400 transition-colors">+91 9823190760</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Address</h3>
          <address className="text-zinc-400 not-italic space-y-1">
            <p>The Media Tree LLP.</p>
            <p>470, Shaniwar Peth,</p>
            <p>Gurudatta Sahawas, D-wing,</p>
            <p>Block 33, Pune - 411 030.</p>
          </address>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-zinc-900 text-center text-zinc-500 text-sm">
        © {new Date().getFullYear()} The Media Tree. All rights reserved.
      </div>
    </footer>
  );
}
