import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import MobileCTA from './components/MobileCTA';

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Timeline />
      </main>
      <Contact />
      <MobileCTA />
    </>
  );
}