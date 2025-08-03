// src/components/Partenariat.tsx
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const partnerTypes = [
  {
    title: 'Banques partenaires',
    description: 'Pour héberger la monnaie électronique et soutenir la régulation de nos services.'
  },
  {
    title: 'Commerçants & Agents',
    description: 'Pour servir de points de dépôt, retrait et paiement BALACO dans tout le pays.'
  },
  {
    title: 'Investisseurs à impact',
    description: 'Pour accélérer notre croissance tout en promouvant l’inclusion financière en RCA.'
  }
];

const Partenariat: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#F5F9FF] to-[#E0EAFF]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Opportunités de partenariat</h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Rejoignez-nous dans cette aventure financière
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {partnerTypes.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.description}</p>
              <button className="w-full bg-[#0A1A2F] text-white py-3 rounded-lg font-bold hover:bg-[#142847] transition-all">
                Nous contacter
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partenariat;
