// src/components/FintechLanding.tsx
import React from 'react';
import { motion } from 'framer-motion';

const FintechLanding: React.FC = () => {
  // Données réutilisables
  const features = [
    {
      icon: '📱',
      title: 'Paiements mobiles',
      description: 'Envoyez et recevez de l\'argent instantanément avec votre mobile'
    },
    {
      icon: '🏦',
      title: 'Cash-in/Cash-out',
      description: 'Déposez et retirez de l\'argent via notre réseau d\'agents agréés'
    },
    {
      icon: '💼',
      title: 'Business Solutions',
      description: 'Outils professionnels pour gérer votre entreprise'
    }
  ];

  const pricingPlans = [
    {
      name: 'Particulier',
      price: '0',
      description: 'Pour les utilisateurs individuels',
      features: [
        'Envois d\'argent gratuits',
        'Pas de frais de compte',
        'Limite de 500 000 XAF/jour'
      ]
    },
    {
      name: 'Commerçant',
      price: '1%',
      description: 'Pour les professionnels et entreprises',
      features: [
        'Paiements clients à 1%',
        'Tableau de bord analytique',
        'Limite de 5 000 000 XAF/jour'
      ]
    }
  ];

  const agentNetwork = [
    {
      title: 'Devenez Agent',
      description: 'Rejoignez notre réseau et générez des revenus'
    },
    {
      title: 'Points de service',
      description: 'Retrouvez nos agents près de chez vous'
    }
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-900 antialiased overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003366] to-[#0066CC] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00CC99] rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0099FF] rounded-full filter blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-28 md:py-36 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
                  <span className="w-2 h-2 bg-[#00CC99] rounded-full mr-2"></span>
                  <span className="text-sm font-medium">Service maintenant disponible en RCA</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  L'argent mobile <span className="text-[#00CC99]">simple et abordable</span> en Centrafrique
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-lg">
                  Envoyez, recevez et payez sans compte bancaire. Solution 100% mobile pour tous.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#00CC99] hover:bg-[#00B386] text-[#003366] px-8 py-4 rounded-lg font-bold transition-all shadow-lg"
                  >
                    Télécharger l'app
                  </motion.button>
                  <button className="border-2 border-white hover:bg-white hover:text-[#003366] px-8 py-4 rounded-lg font-bold transition-all">
                    Trouver un agent
                  </button>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#0099FF]/20 rounded-full filter blur-[80px]"></div>
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-2 shadow-2xl">
                <div className="bg-black rounded-2xl overflow-hidden">
                  <img 
                    src="/images/wave-like-app.png" 
                    alt="Application mobile"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Pourquoi choisir notre solution ?
          </motion.h2>
          <p className="text-xl text-gray-600">
            Une alternative bancaire accessible à tous en République Centrafricaine
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-[#00CC99]/30 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-r from-[#F0F9FF] to-[#E0F2FE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comment ça marche ?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Accédez aux services financiers en quelques étapes simples
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '1',
                title: 'Téléchargez l\'appli',
                description: 'Disponible sur Android et iOS'
              },
              {
                step: '2',
                title: 'Créez votre compte',
                description: 'Enregistrez-vous en 2 minutes'
              },
              {
                step: '3',
                title: 'Approvisionnez',
                description: 'Via nos agents ou partenaires'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-[#0099FF] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Network */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#00CC99]/10 rounded-full filter blur-[80px]"></div>
              <div className="relative bg-gray-100 rounded-2xl p-8 aspect-video flex items-center justify-center">
                <span className="text-gray-400">Carte des agents en RCA</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Notre réseau <span className="text-[#0099FF]">d'agents</span> en Centrafrique
              </h2>
              
              {agentNetwork.map((item, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-2xl font-bold flex items-center">
                    <span className="w-6 h-6 bg-[#00CC99] rounded-full mr-4"></span>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 pl-10">{item.description}</p>
                </div>
              ))}

              <button className="ml-10 bg-[#0099FF] hover:bg-[#0088EE] text-white px-8 py-3 rounded-lg font-bold transition-all">
                En savoir plus
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tarifs transparents</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des frais simples et compétitifs, sans surprises
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`rounded-2xl p-8 border-2 ${index === 1 ? 'border-[#00CC99] bg-white shadow-lg' : 'border-gray-200 bg-white'}`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="flex items-end mb-8">
                  <span className="text-4xl font-bold">{plan.price === '0' ? 'Gratuit' : `${plan.price} par transaction`}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-[#00CC99] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-bold ${index === 1 ? 'bg-[#0099FF] text-white hover:bg-[#0088EE]' : 'bg-gray-100 hover:bg-gray-200'}`}
                >
                  {plan.price === '0' ? 'Commencer' : 'Contact commercial'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#0066CC] to-[#00CC99] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Rejoignez la révolution financière en Centrafrique
          </motion.h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Téléchargez l'application et commencez à envoyer de l'argent en quelques minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0066CC] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-all shadow-lg"
            >
              Télécharger sur Google Play
            </motion.button>
            <button className="border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold transition-all">
              Télécharger sur l'App Store
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003366] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-[#00CC99] text-[#003366] w-8 h-8 rounded-lg flex items-center justify-center mr-3">$</span>
              NomApp
            </h3>
            <p className="opacity-80">
              Service d'argent mobile pour la République Centrafricaine
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Service</h4>
            <ul className="space-y-3 opacity-80">
              <li className="hover:text-[#00CC99] transition-colors cursor-pointer">Envoyer de l'argent</li>
              <li className="hover:text-[#00CC99] transition-colors cursor-pointer">Payer des factures</li>
              <li className="hover:text-[#00CC99] transition-colors cursor-pointer">Réseau d'agents</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Entreprise</h4>
            <ul className="space-y-3 opacity-80">
              <li className="hover:text-[#00CC99] transition-colors cursor-pointer">À propos</li>
              <li className="hover:text-[#00CC99] transition-colors cursor-pointer">Carrières</li>
              <li className="hover:text-[#00CC99] transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Légal</h4>
            <ul className="space-y-3 opacity-80">
              <li className="hover:text-[#00CC99] transition-colors cursor-pointer">Conditions d'utilisation</li>
              <li className="hover:text-[#00CC99] transition-colors cursor-pointer">Politique de confidentialité</li>
              <li className="hover:text-[#00CC99] transition-colors cursor-pointer">Licences</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-80 mb-4 md:mb-0">© {new Date().getFullYear()} NomApp RCA. Tous droits réservés.</p>
          <div className="flex space-x-6">
            {['Facebook', 'Twitter', 'LinkedIn'].map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00CC99] hover:text-[#003366] transition-all cursor-pointer"
              >
                {social.charAt(0)}
              </motion.div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FintechLanding;