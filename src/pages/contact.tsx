// src/pages/ContactPage.tsx
import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const ContactPage: React.FC = () => {
  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen">
      {/* En-tête */}
      <header className="bg-[#0A1A2F] text-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Contactez <span className="text-[#00E0A1]">BALACO</span>
          </motion.h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Investisseurs, partenaires techniques ou institutionnels — discutons de votre implication.
          </p>
        </div>
      </header>

      {/* Formulaire */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8">Envoyez-nous un message</h2>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg mb-2">Votre nom</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00E0A1] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00E0A1] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-lg mb-2">Vous êtes</label>
                <select
                  id="type"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00E0A1] focus:border-transparent"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="investor">Investisseur</option>
                  <option value="bank">Banque / Institution</option>
                  <option value="tech">Partenaire technique</option>
                  <option value="press">Presse</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-lg mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00E0A1] focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#00E0A1] hover:bg-[#00c991] text-[#0A1A2F] px-8 py-4 rounded-lg font-bold transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Envoyer le message
              </button>
            </form>
          </motion.div>

          {/* Informations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#F5F9FF] p-8 rounded-2xl h-fit"
          >
            <h3 className="text-2xl font-bold mb-6">Coordonnées</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-[#00E0A1] mb-2">Email</h4>
                <p>contact@balaco-rca.com</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#00E0A1] mb-2">Téléphone</h4>
                <p>+236 XX XX XX XX</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#00E0A1] mb-2">Adresse</h4>
                <p>Bangui, République Centrafricaine</p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-[#00E0A1] mb-4">Pour les investisseurs :</h4>
                <button className="bg-[#0A1A2F] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#142847] transition-all w-full">
                  Planifier un appel
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Carte */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <h3 className="text-xl font-bold mb-4">Notre siège à Bangui</h3>
            <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Carte à intégrer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pied de page */}
      <footer className="bg-gray-900 text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <span className="bg-[#00E0A1] text-[#0A1A2F] w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold mr-3">B</span>
          </div>
          <p className="opacity-80 mb-6">
            BALACO — La révolution du mobile money en Centrafrique
          </p>
          <p className="opacity-60">
            © {new Date().getFullYear()} BALACO RCA. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
