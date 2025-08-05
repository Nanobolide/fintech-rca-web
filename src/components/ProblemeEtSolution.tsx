import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
 

const ProblemeSolutionPreview: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white" id="probleme-solution">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0A1A2F]"
        >
          L'exclusion financière en RCA
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Version condensée du problème */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-red-500 text-white p-2 rounded-full mr-3">!</span>
              Problème
            </h3>
            <ul className="space-y-3">
              {["Frais élevés (3-5%)", "Couverture limitée", "Dépendance étrangère"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Version condensée de la solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-green-50 p-6 rounded-lg border-l-4 border-[#00E0A1]"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-[#00E0A1] text-white p-2 rounded-full mr-3">✓</span>
              Notre Solution
            </h3>
            <ul className="space-y-3">
              {["Frais à 1%", "Réseau national", "Technologie locale"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#00E0A1] mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="text-center">
          <Link to="/probleme-solution" className="inline-block px-6 py-3 bg-[#0A1A2F] text-white rounded-lg font-medium hover:bg-opacity-90 transition">
            Voir l'analyse complète
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProblemeSolutionPreview;