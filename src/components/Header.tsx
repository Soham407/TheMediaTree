import React, { useEffect, useState, forwardRef } from 'react';
import { Menu, X } from 'lucide-react';

const Header = forwardRef<HTMLElement, {}>(function Header(props, ref) {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trap focus and lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsMenuOpen(false);
      };
      window.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  // GSAP-aware Scroll Listener for Active Section
  useEffect(() => {
    let ticking = false;
    const handleScrollTracking = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = document.querySelectorAll('section[id]');
          let currentSection = '';

          sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop <= window.innerHeight * 0.3) {
              currentSection = section.id;
            }
          });

          if (currentSection && currentSection !== activeSection) {
            setActiveSection(currentSection);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScrollTracking, { passive: true });
    handleScrollTracking();

    return () => window.removeEventListener('scroll', handleScrollTracking);
  }, [activeSection]);

  const navLinks = [
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#stack', label: 'Tech Stack', id: 'stack' },
    { href: '#process', label: 'Process', id: 'process' },
    { href: '#work', label: 'Work', id: 'work' },
    { href: '#faq', label: 'FAQ', id: 'faq' },
  ];

  return (
    <>
      <header 
        ref={ref}
        id="main-header" 
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center transition-all duration-300 text-white ${
          isScrolled ? 'bg-black/90 backdrop-blur-sm p-4 shadow-lg' : 'bg-transparent p-6'
        }`}
      >
        <div className="text-xl font-bold">The Media Tree</div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className={`relative hover:text-yellow-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded px-1 ${activeSection === link.id ? 'text-yellow-400 font-medium' : ''}`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full" aria-hidden="true" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#connect" className="hidden sm:block bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
            Let's Connect
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed inset-0 bg-black z-60 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${isMenuOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'}`}
      >
        <button 
          className="absolute top-6 right-6 text-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <a 
            key={link.href}
            href={link.href} 
            className={`relative text-3xl font-bold hover:text-yellow-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded p-2 ${activeSection === link.id ? 'text-yellow-400' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
            {activeSection === link.id && (
               <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full" aria-hidden="true" />
            )}
          </a>
        ))}
        <a 
          href="#connect" 
          className="mt-4 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-xl"
          onClick={() => setIsMenuOpen(false)}
        >
          Let's Connect
        </a>
      </div>
    </>
  );
});

export default Header;
