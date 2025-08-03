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
      <section className="bg-[#0A1A2F] text-white py-28 px-6 md:px-12 relative">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-6xl mx-auto relative z-10"
        >
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Investissez dans le <span className="text-[#00E0A1]">futur financier</span> de la RCA
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-10 max-w-2xl opacity-90">
            BALACO - La première fintech patriotique offrant des services financiers accessibles à 1% de frais
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-20">
            <button className="bg-[#00E0A1] hover:bg-[#00c991] text-[#0A1A2F] px-8 py-4 rounded-lg font-bold transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Télécharger le deck investisseurs
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-[#0A1A2F] px-8 py-4 rounded-lg font-bold transition-all duration-300">
              Demander une démo
            </button>
          </motion.div>
          
          <motion.div variants={staggerContainer} className="flex flex-wrap gap-12 mt-16">
            {[
              { value: "85%", label: "Population non-bancarisée" },
              { value: "$12M", label: "Transferts mensuels (est. RCA)" },
              { value: "1%", label: "Frais uniques - 3x moins cher" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              >
                <p className="text-4xl font-bold text-[#00E0A1]">{item.value}</p>
                <p className="text-gray-300 mt-2">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
  );
};

export default Hero;