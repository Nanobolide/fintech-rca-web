// src/components/Features.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCard {
  title: string;
  desc: string;
  features: string[];
}

interface FeaturesProps {}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Features: React.FC<FeaturesProps> = () => {
  const features: FeatureCard[] = [
    {
      title: "Paiements instantanés",
      desc: "Processus de paiement sécurisés avec une infrastructure bancaire de pointe.",
      features: ["Transactions cross-border", "Frais transparents", "Multi-devices"]
    },
    {
      title: "Analytics avancées",
      desc: "Tableaux de bord personnalisables avec données financières en temps réel.",
      features: ["KPI sur mesure", "Alertes intelligentes", "Export automatisé"]
    },
    {
      title: "Sécurité bancaire",
      desc: "Protection des données conforme aux régulations les plus strictes.",
      features: ["Certification PCI-DSS", "Chiffrement AES-256", "Audits réguliers"]
    }
  ];

  return (
    <section className="bg-gradient-to-br from-[#F5F9FF] to-[#E0EAFF] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Fonctionnalités clés</h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Découvrez ce qui rend notre plateforme unique
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((card, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="w-14 h-14 bg-[#00E0A1]/10 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-[#00E0A1] rounded-md"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-600 mb-6">{card.desc}</p>
              <ul className="space-y-3">
                {card.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-[#00E0A1] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;