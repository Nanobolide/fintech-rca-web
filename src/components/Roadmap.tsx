// src/components/Roadmap.tsx
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const investmentSteps = [
  {
    icon: '🚀',
    title: 'Lancement MVP',
    desc: 'Développement et tests d’une version légère pour recueillir les retours utilisateurs et investisseurs.'
  },
  {
    icon: '🏦',
    title: 'Partenariat bancaire',
    desc: 'Signature d’un accord avec une banque locale pour opérer légalement en tant qu’EME (Émetteur de Monnaie Électronique).'
  },
  {
    icon: '📱',
    title: 'Déploiement commercial',
    desc: 'Déploiement à Bangui avec agents, commerçants et premières intégrations de paiement digital.'
  }
];

const Roadmap: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Feuille de route</h2>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          Notre plan de déploiement et opportunités d'investissement
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {investmentSteps.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
          >
            <div className="w-16 h-16 bg-[#00E0A1] rounded-full flex items-center justify-center text-[#0A1A2F] text-2xl font-bold mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
            {index === 0 && (
              <button className="mt-6 text-[#00E0A1] font-bold flex items-center">
                Voir le prototype
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
