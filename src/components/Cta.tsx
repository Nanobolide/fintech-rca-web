// src/components/Cta.tsx
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const Cta: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-r from-[#00E0A1] to-[#00B2E0] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Prêt à participer à la révolution BALACO ?
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-6"
        >
          <motion.button
            variants={fadeInUp}
            className="bg-[#0A1A2F] hover:bg-[#142847] px-8 py-4 rounded-lg font-bold transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Télécharger le deck complet
          </motion.button>

          <motion.button
            variants={fadeInUp}
            className="bg-white text-[#0A1A2F] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-all duration-300"
          >
            Planifier un appel
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
