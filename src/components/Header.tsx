import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: '#work', label: 'Work', id: 'work' },
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#stack', label: 'Stack', id: 'stack' },
    { href: '#about', label: 'About', id: 'about' },
  ];

  return (
    <>
      <header 
        id="main-header" 
        className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-sm text-white z-50 p-4 flex justify-between items-center transition-colors duration-300"
      >
        <div className="text-xl font-bold">The Media Tree</div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className={`hover:text-yellow-400 transition-colors ${activeSection === link.id ? 'text-yellow-400' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden sm:block bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
            Let's Connect
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-60 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <a 
            key={link.href}
            href={link.href} 
            className={`text-3xl font-bold hover:text-yellow-400 transition-colors ${activeSection === link.id ? 'text-yellow-400' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a 
          href="#contact" 
          className="mt-4 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-xl"
          onClick={() => setIsMenuOpen(false)}
        >
          Let's Connect
        </a>
      </div>
    </>
  );
}
