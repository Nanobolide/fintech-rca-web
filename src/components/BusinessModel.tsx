// src/components/BusinessModelPreview.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
 

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

const BusinessModelPreview: React.FC = () => {
  return (
    <section className="bg-[#0A1A2F] text-white py-16 px-6 md:px-12" id="modele">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Modèle économique viable</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Une structure de revenus simple, souveraine et scalable pour accompagner la révolution BALACO.
          </p> 
              <Link 
                to="/modele-economique"
                className="inline-block mt-4 px-6 py-3 bg-[#00E0A1] text-[#0A1A2F] font-bold rounded-lg hover:bg-[#00c991] transition"
              >
                Voir le modèle complet
              </Link>

        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {valuePropositions.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white/10 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="opacity-90">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessModelPreview;