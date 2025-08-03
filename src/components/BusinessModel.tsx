// src/components/BusinessModel.tsx
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const valuePropositions = [
  {
    icon: '📈',
    title: 'Marché stratégique',
    description: '85% de non-bancarisés en RCA - Premier entrant avantageux'
  },
  {
    icon: '💡',
    title: 'Innovation locale',
    description: 'Solution conçue par et pour les Centrafricains'
  },
  {
    icon: '🔄',
    title: 'Modèle éprouvé',
    description: 'Inspiré des succès Wave et M-Pesa, adapté au contexte RCA'
  }
];

const BusinessModel: React.FC = () => {
  return (
    <section className="bg-[#0A1A2F] text-white py-24 px-6 md:px-12"  id="modele">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Modèle économique viable</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Une structure de revenus simple, souveraine et scalable pour accompagner la révolution BALACO.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {valuePropositions.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white/10 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="opacity-90 mb-6">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Business Model Canvas Visuel */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-white/10 p-8 rounded-2xl backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Flux de revenus</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Transferts", value: "1% de frais" },
              { title: "Paiements", value: "0.5% de commission" },
              { title: "Agents", value: "200F/cycle" },
              { title: "Data", value: "Monétisation Analytics" }
            ].map((item, i) => (
              <div key={i} className="bg-[#00E0A1] text-[#0A1A2F] p-4 rounded-lg text-center">
                <p className="font-bold">{item.title}</p>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessModel;
