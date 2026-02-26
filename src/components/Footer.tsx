import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 text-white py-12 px-4 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">The Media Tree</h2>
          <p className="text-zinc-400 max-w-sm">
            Creative Solutions Agency building custom, high-performance websites.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Links</h3>
          <ul className="space-y-2 text-zinc-400">
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Work</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">About</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Contact</h3>
          <ul className="space-y-2 text-zinc-400">
            <li><a href="mailto:connect@themediatree.com" className="hover:text-yellow-400 transition-colors">connect@themediatree.com</a></li>
            <li><a href="tel:+919769220222" className="hover:text-yellow-400 transition-colors">+91-9769220222</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-zinc-900 text-center text-zinc-500 text-sm">
        © {new Date().getFullYear()} The Media Tree. All rights reserved.
      </div>
    </footer>
  );
}
