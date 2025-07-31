// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="bg-[#0A1A2F] text-white py-28 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E0A1] rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          Banque 100% API : <br /> Gérez vos finances en temps réel
        </motion.h1>
        
        <motion.p 
          variants={fadeInUp}
          className="text-xl md:text-2xl mb-10 max-w-2xl opacity-90"
        >
          Solution SaaS pour entreprises. Automatisez vos processus bancaires avec notre API moderne et sécurisée.
        </motion.p>
        
        <motion.div 
          variants={fadeInUp}
          className="flex flex-wrap gap-4 mb-20"
        >
          <button className="bg-[#00E0A1] hover:bg-[#00c991] text-[#0A1A2F] px-8 py-4 rounded-lg font-bold transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
            Commencer maintenant
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-[#0A1A2F] px-8 py-4 rounded-lg font-bold transition-all duration-300">
            Voir la démo
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;