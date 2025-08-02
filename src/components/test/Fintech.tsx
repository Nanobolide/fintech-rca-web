// src/components/FintechLanding.tsx
import React from 'react';
import { motion } from 'framer-motion';

const FintechLanding: React.FC = () => {
  // Données réutilisables
  const features = [
    {
      icon: '💳',
      title: 'Paiements instantanés',
      description: 'Envoyez et recevez des fonds en temps réel avec notre technologie sécurisée'
    },
    {
      icon: '📊',
      title: 'Analytique financière',
      description: 'Tableaux de bord personnalisés pour suivre vos performances financières'
    },
    {
      icon: '🔒',
      title: 'Sécurité bancaire',
      description: 'Protection de niveau militaire pour vos transactions'
    }
  ];

  const testimonials = [
    {
      name: 'Karim S.',
      role: 'CEO, FinTech Inc',
      content: 'Cette plateforme a révolutionné notre gestion financière. Simple, rapide et sécurisé.'
    },
    {
      name: 'Aïcha D.',
      role: 'Directrice Financière',
      content: 'L\'intégration a été fluide et le support technique est exceptionnel.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '0',
      description: 'Parfait pour les particuliers',
      features: ['3 transactions/mois', 'Support de base', 'Limite de 50 000 FCFA']
    },
    {
      name: 'Business',
      price: '25 000',
      description: 'Pour les petites entreprises',
      features: ['50 transactions/mois', 'Support prioritaire', 'Limite de 500 000 FCFA']
    }
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-900 antialiased overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00072D] to-[#001C55] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00C896] rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0066FF] rounded-full filter blur-[100px]"></div>
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
                  <span className="w-2 h-2 bg-[#00C896] rounded-full mr-2"></span>
                  <span className="text-sm font-medium">Nouvelle version disponible</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  La banque digitale <span className="text-[#00C896]">sans limites</span> pour l'Afrique
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-lg">
                  Une solution financière complète pour les particuliers et entreprises. Simple, rapide et sécurisé.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#00C896] hover:bg-[#00B383] text-[#001C55] px-8 py-4 rounded-lg font-bold transition-all shadow-lg"
                  >
                    Ouvrir un compte
                  </motion.button>
                  <button className="border-2 border-white hover:bg-white hover:text-[#001C55] px-8 py-4 rounded-lg font-bold transition-all">
                    Voir la démo
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
              <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#0066FF]/20 rounded-full filter blur-[80px]"></div>
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-2 shadow-2xl">
                <div className="bg-black rounded-2xl overflow-hidden">
                  <img 
                    src="/images/app-screenshot.png" 
                    alt="Application mobile"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Logos */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 mb-8">Ils nous font confiance</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70">
            {['Partner1', 'Partner2', 'Partner3', 'Partner4', 'Partner5'].map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="w-24 h-24 bg-gray-200 rounded-lg"
              ></motion.div>
            ))}
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
            Une expérience bancaire <span className="text-[#0066FF]">révolutionnaire</span>
          </motion.h2>
          <p className="text-xl text-gray-600">
            Conçue pour répondre aux besoins des africains avec des solutions adaptées
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
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-[#00C896]/30 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mobile App Showcase */}
      <section className="py-24 bg-gradient-to-r from-[#F5F9FF] to-[#E0EAFF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#00C896]/10 rounded-full filter blur-[80px]"></div>
              <div className="relative">
                <img 
                  src="/images/phone-mockup.png" 
                  alt="Application mobile"
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Votre banque <span className="text-[#0066FF]">dans la poche</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Gérez vos finances où que vous soyez avec notre application mobile ultra performante.
              </p>
              <ul className="space-y-6 mb-10">
                {[
                  'Notifications en temps réel',
                  'Paiements QR code sécurisés',
                  'Gestion multi-comptes',
                  'Historique détaillé'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-[#00C896] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
                  </svg>
                  Google Play
                </button>
                <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
                  </svg>
                  App Store
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ce que nos clients disent</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les témoignages de ceux qui utilisent notre plateforme au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#0066FF] rounded-full mr-4 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-lg italic">"{testimonial.content}"</p>
                <div className="flex mt-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Des tarifs adaptés à vos besoins</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choisissez l'offre qui correspond à votre utilisation
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
                className={`rounded-2xl p-8 border-2 ${index === 1 ? 'border-[#00C896] bg-white shadow-lg' : 'border-gray-200 bg-white'}`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="flex items-end mb-8">
                  <span className="text-4xl font-bold">{plan.price === '0' ? 'Gratuit' : `${plan.price} FCFA`}</span>
                  {plan.price !== '0' && <span className="text-gray-500 ml-2">/mois</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-[#00C896] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-bold ${index === 1 ? 'bg-[#00C896] text-white hover:bg-[#00B383]' : 'bg-gray-100 hover:bg-gray-200'}`}
                >
                  {plan.price === '0' ? 'Commencer' : 'Essayer gratuitement'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#0066FF] to-[#00C896] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Prêt à révolutionner votre expérience bancaire ?
          </motion.h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Rejoignez des milliers d'utilisateurs satisfaits dès aujourd'hui.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0066FF] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-all shadow-lg"
            >
              Ouvrir un compte
            </motion.button>
            <button className="border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold transition-all">
              Contactez-nous
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#00072D] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-[#00C896] text-[#00072D] w-8 h-8 rounded-lg flex items-center justify-center mr-3">F</span>
              FinTech
            </h3>
            <p className="opacity-80">
              La solution bancaire digitale pour l'Afrique nouvelle génération.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Produit</h4>
            <ul className="space-y-3 opacity-80">
              <li className="hover:text-[#00C896] transition-colors cursor-pointer">Fonctionnalités</li>
              <li className="hover:text-[#00C896] transition-colors cursor-pointer">Tarifs</li>
              <li className="hover:text-[#00C896] transition-colors cursor-pointer">Applications</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Ressources</h4>
            <ul className="space-y-3 opacity-80">
              <li className="hover:text-[#00C896] transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-[#00C896] transition-colors cursor-pointer">FAQ</li>
              <li className="hover:text-[#00C896] transition-colors cursor-pointer">Centre d'aide</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Entreprise</h4>
            <ul className="space-y-3 opacity-80">
              <li className="hover:text-[#00C896] transition-colors cursor-pointer">À propos</li>
              <li className="hover:text-[#00C896] transition-colors cursor-pointer">Carrières</li>
              <li className="hover:text-[#00C896] transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-80 mb-4 md:mb-0">© {new Date().getFullYear()} FinTech. Tous droits réservés.</p>
          <div className="flex space-x-6">
            {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00C896] hover:text-[#00072D] transition-all cursor-pointer"
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