// src/components/About.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface AboutProps {}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const About: React.FC<AboutProps> = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">À propos de notre solution</h2>
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
          Une plateforme innovante conçue pour répondre aux besoins des entreprises modernes
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="bg-gray-100 rounded-2xl p-8 aspect-video"></div>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold">Une technologie révolutionnaire</h3>
          <p className="text-gray-600">
            Notre plateforme utilise l'intelligence artificielle et la blockchain pour offrir des solutions financières transparentes et sécurisées.
          </p>
          <ul className="space-y-4">
            {[
              "Infrastructure cloud-native scalable",
              "API RESTful moderne",
              "Conforme aux régulations financières",
              "Support technique dédié"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-[#00E0A1] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;