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
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-purple-600 selection:text-yellow-400">
      <Header />
      <main>
        <Hero />
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
