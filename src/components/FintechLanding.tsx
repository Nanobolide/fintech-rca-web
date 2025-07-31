import React, { useEffect } from 'react';
import { motion } from 'framer-motion';


// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const FintechLanding = () => {
  // Gestion du SEO sans dépendance externe
  useEffect(() => {
    document.title = "FinFlow - Solution Fintech Innovante";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Solution SaaS bancaire 100% API pour entreprises');
    }
  }, []);

  return (
    <div className="font-sans bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-[#0A1A2F] text-white py-28 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E0A1] rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-6xl mx-auto relative z-10"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Banque 100% API : <br /> Gérez vos finances en temps réel
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl mb-10 max-w-2xl opacity-90"
          >
            Solution SaaS pour entreprises. Automatisez vos processus bancaires avec notre API moderne et sécurisée.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap gap-4 mb-20"
          >
            <button className="bg-[#00E0A1] hover:bg-[#00c991] text-[#0A1A2F] px-8 py-4 rounded-lg font-bold transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Commencer maintenant
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-[#0A1A2F] px-8 py-4 rounded-lg font-bold transition-all duration-300">
              Voir la démo
            </button>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="flex flex-wrap gap-12 mt-16"
          >
            {[
              { value: "90.9%", label: "Satisfaction clients" },
              { value: "500ms", label: "Temps de réponse" },
              { value: "24/7", label: "Support disponible" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              >
                <p className="text-4xl font-bold text-[#00E0A1]">{item.value}</p>
                <p className="text-gray-300 mt-2">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Solutions complètes pour votre fintech</h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Des outils puissants pour automatiser et optimiser vos processus financiers
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
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
          ].map((card, index) => (
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
      </section>

      {/* Technology Section */}
      <section className="bg-gradient-to-br from-[#F5F9FF] to-[#E0EAFF] py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Technologie de pointe</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Notre infrastructure cloud-native garantit performance, scalabilité et sécurité pour vos applications financières.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Documentation complète",
                desc: "API claire avec exemples d'intégration pour tous les langages",
                icon: "📚"
              },
              {
                title: "Infrastructure cloud",
                desc: "Hébergement sécurisé avec 99.99% de disponibilité",
                icon: "☁️"
              },
              {
                title: "Mobile-first",
                desc: "Applications iOS et Android natives avec SDK dédié",
                icon: "📱"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ils nous font confiance</h2>
          <p className="text-xl md:text-2xl text-gray-600">Plus de 500 entreprises utilisent nos solutions</p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {["Technologie", "Start-up", "Entreprises", "Banques", "Assurances", "Marketplaces"].map((item, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-gray-100 rounded-full"
            >
              <p className="font-medium">{item}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-3xl shadow-lg max-w-4xl mx-auto"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-[#00E0A1] rounded-full mr-4"></div>
            <div>
              <p className="font-bold">Smart Software</p>
              <p className="text-gray-500">Directeur Technique</p>
            </div>
          </div>
          <p className="text-xl italic mb-6">
            "FinFlow a révolutionné notre approche des paiements. L'intégration a pris moins de 2 jours et nous avons réduit nos frais de transaction de 40%."
          </p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0A1A2F] text-white py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions fréquentes</h2>
            <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur nos services
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto space-y-6"
          >
            {[
              {
                question: "Comment garantissez-vous la sécurité ?",
                answer: "Nous utilisons un chiffrement AES-256, une couverture PCI-DSS et des audits de sécurité trimestriels."
              },
              {
                question: "Quelle est la durée d'intégration ?",
                answer: "La plupart de nos clients sont opérationnels en 2-3 jours. Nous fournissons une équipe dédiée pour les intégrations complexes."
              },
              {
                question: "Quels sont vos tarifs ?",
                answer: "Forfaits flexibles à partir de 99€/mois. Contactez-nous pour une estimation personnalisée selon votre volume."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="border-b border-gray-700 pb-6"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-3 flex items-center">
                  <span className="w-6 h-6 bg-[#00E0A1] rounded-full flex items-center justify-center text-[#0A1A2F] font-bold mr-4 text-sm">?</span>
                  {item.question}
                </h3>
                <p className="opacity-80 pl-10">{item.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-r from-[#00E0A1] to-[#00B2E0] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Prêt à transformer votre flux financier ?
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
              Démarrer l'essai gratuit
            </motion.button>
            <motion.button 
              variants={fadeInUp}
              className="bg-white text-[#0A1A2F] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-all duration-300"
            >
              Parler à un expert
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-[#00E0A1] text-[#0A1A2F] w-8 h-8 rounded-lg flex items-center justify-center mr-3">F</span>
              FinFlow
            </h3>
            <p className="opacity-80">
              La solution SaaS de référence pour la gestion financière automatisée.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Produit</h4>
            <ul className="space-y-3 opacity-80">
              <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">Solutions</li>
              <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">Documentation API</li>
              <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">Tarifs</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Ressources</h4>
            <ul className="space-y-3 opacity-80">
              <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">Centre d'aide</li>
              <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">Webinaires</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Légal</h4>
            <ul className="space-y-3 opacity-80">
              <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">CGU</li>
              <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">Confidentialité</li>
              <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">Mentions légales</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-80 mb-4 md:mb-0">© {new Date().getFullYear()} FinFlow. Tous droits réservés.</p>
          <div className="flex space-x-6">
            {["Twitter", "LinkedIn", "GitHub"].map((social, index) => (
              <div key={index} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#00E0A1] hover:text-[#0A1A2F] transition-all cursor-pointer">
                {social.charAt(0)}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FintechLanding;