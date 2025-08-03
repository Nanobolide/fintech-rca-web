// src/components/ProblemeEtSolution.tsx
import React from 'react';
import { motion } from 'framer-motion';

const ProblemeEtSolution: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="solution">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Problème */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-[#00E0A1]">Problème :</span> L'exclusion financière coûte cher
          </h2>
          <ul className="space-y-4 text-lg">
            {[
              "Frais élevés (3-5% chez les opérateurs étrangers)",
              "Infrastructure financière quasi-inexistante hors Bangui",
              "Dépendance aux solutions étrangères"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#00E0A1] mr-3">•</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#F5F9FF] to-[#E0EAFF] p-8 rounded-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-[#00E0A1]">Solution :</span> BALACO
          </h2>
          <div className="space-y-6">
            {[
              "Mobile money souverain à 1% de frais",
              "Réseau d'agents nationaux formés localement",
              "Technologie indépendante (sans API Orange/MTN)",
              "Support en Sango et français"
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-6 h-6 text-[#00E0A1] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemeEtSolution;
