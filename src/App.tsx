/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const Services = lazy(() => import('./components/Services'));
const Marquee = lazy(() => import('./components/Marquee'));
const Process = lazy(() => import('./components/Process'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const FAQ = lazy(() => import('./components/FAQ'));
const CTA = lazy(() => import('./components/CTA'));
const TechStack = lazy(() => import('./components/TechStack'));
const Footer = lazy(() => import('./components/Footer'));

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
        <Suspense fallback={<div className="h-32 bg-black"></div>}>
          <Services />
          <Marquee />
          <TechStack />
          <Process />
          <Portfolio />
          <FAQ />
          <CTA />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
