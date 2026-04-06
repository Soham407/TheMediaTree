/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Marquee from './components/Marquee';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

export default function App() {
  const headerRef = React.useRef<HTMLElement>(null);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-purple-600 selection:text-yellow-400">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-yellow-400 focus:text-black focus:font-bold focus:rounded-md shadow-lg"
      >
        Skip to main content
      </a>
      <Header ref={headerRef} />
      <main id="main-content">
        <Hero headerRef={headerRef} />
        <Services />
        <Marquee />
        <TechStack />
        <Process />
        <Portfolio />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
