// src/components/FintechLanding.tsx
import React from 'react';
import Hero from './Hero';
import StatsSection from "@/components/StatsSection";
import About from '@/components/About';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div className="font-sans bg-white text-gray-900 overflow-hidden">
      <Hero />
      <StatsSection />
      <About />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;