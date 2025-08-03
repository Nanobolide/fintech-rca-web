// import  { useEffect } from 'react';
// import { motion } from 'framer-motion';

// // Animations
// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 }
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// };

// const FintechLanding = () => {
//   // Gestion du SEO sans dépendance externe
//   useEffect(() => {
//     document.title = "Balaco RCA - La future solution d'argent mobile";
//     const metaDesc = document.querySelector('meta[name="description"]');
//     if (metaDesc) {
//       metaDesc.setAttribute('content', 'Service de transfert d\'argent mobile innovant pour la République Centrafricaine - Bientôt disponible');
//     }
//   }, []);

//   // Données réutilisables
//   const features = [
//     {
//       icon: '💸',
//       title: 'Compte sans frais',
//       description: 'Pas de frais de dépôt ou de retrait sur votre compte Balaco'
//     },
//     {
//       icon: '📲',
//       title: 'Transferts à 1%',
//       description: 'Envoyez de l\'argent à seulement 1% du montant transféré'
//     },
//     {
//       icon: '🔒',
//       title: 'Sécurité renforcée',
//       description: 'Protection de vos fonds avec des standards internationaux'
//     }
//   ];

//   const pricingPlans = [
//     {
//       name: 'Particulier',
//       price: '0',
//       description: 'Pour les utilisateurs individuels',
//       features: [
//         'Aucun frais de compte',
//         'Transferts à 1% seulement',
//         'Support gratuit 24/7'
//       ]
//     },
//     {
//       name: 'Commerçant',
//       price: '1%',
//       description: 'Pour les professionnels',
//       features: [
//         'Acceptez les paiements à 1%',
//         'Tableau de bord professionnel',
//         'Historique des transactions'
//       ]
//     }
//   ];

//   const agentNetwork = [
//     {
//       title: 'Devenez Agent',
//       description: 'Opportunité de revenus avec notre réseau d\'agents'
//     },
//     {
//       title: 'Couverture nationale',
//       description: 'Réseau en expansion dans toute la Centrafrique'
//     }
//   ];

//   return (
//     <div className="font-sans bg-white text-gray-900 overflow-hidden">
//       {/* Hero Section */}
//       <section className="bg-[#0A1A2F] text-white py-28 px-6 md:px-12 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E0A1] rounded-full mix-blend-screen filter blur-3xl"></div>
//         </div>
        
//         <motion.div 
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           className="max-w-6xl mx-auto relative z-10"
//         >
//           <motion.h1 
//             variants={fadeInUp}
//             className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
//           >
//             La future solution <span className="text-[#00E0A1]">d'argent mobile</span> en Centrafrique
//           </motion.h1>
          
//           <motion.p 
//             variants={fadeInUp}
//             className="text-xl md:text-2xl mb-10 max-w-2xl opacity-90"
//           >
//             Balaco arrive bientôt avec des transferts à 1%, un compte sans frais et une sécurité maximale.
//           </motion.p>
          
//           <motion.div 
//             variants={fadeInUp}
//             className="flex flex-wrap gap-4 mb-20"
//           >
//             <button className="bg-[#00E0A1] hover:bg-[#00c991] text-[#0A1A2F] px-8 py-4 rounded-lg font-bold transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
//               Soyez informé du lancement
//             </button>
//             <button className="border-2 border-white hover:bg-white hover:text-[#0A1A2F] px-8 py-4 rounded-lg font-bold transition-all duration-300">
//               Devenir partenaire
//             </button>
//           </motion.div>
          
//           <motion.div 
//             variants={staggerContainer}
//             className="flex flex-wrap gap-12 mt-16"
//           >
//             {[
//               { value: "1%", label: "Seulement sur les transferts" },
//               { value: "0 XAF", label: "Frais de compte" },
//               { value: "Bientôt", label: "Disponible en RCA" }
//             ].map((item, index) => (
//               <motion.div 
//                 key={index}
//                 variants={fadeInUp}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
//               >
//                 <p className="text-4xl font-bold text-[#00E0A1]">{item.value}</p>
//                 <p className="text-gray-300 mt-2">{item.label}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Solutions Section */}
//       <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre modèle économique</h2>
//           <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
//             Simple, transparent et conçu pour la Centrafrique
//           </p>
//         </motion.div>
        
//         <div className="grid md:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-50px" }}
//               variants={fadeInUp}
//               whileHover={{ y: -10 }}
//               className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 bg-white"
//             >
//               <div className="text-4xl mb-6">{feature.icon}</div>
//               <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
//               <p className="text-gray-600 mb-6">{feature.description}</p>
//               <button className="text-[#00E0A1] font-bold flex items-center">
//                 En savoir plus
//                 <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//                 </svg>
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="bg-gradient-to-br from-[#F5F9FF] to-[#E0EAFF] py-24 px-6 md:px-12">
//         <div className="max-w-6xl mx-auto">
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">Comment ça marchera ?</h2>
//             <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
//               Le futur service en quelques étapes simples
//             </p>
//           </motion.div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Téléchargez l'appli",
//                 desc: "Disponible bientôt sur Android et iOS",
//                 icon: "1"
//               },
//               {
//                 title: "Créez votre compte",
//                 desc: "Enregistrement simple et rapide",
//                 icon: "2"
//               },
//               {
//                 title: "Commencez à utiliser",
//                 desc: "Envoyez et recevez de l'argent facilement",
//                 icon: "3"
//               }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeInUp}
//                 className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <div className="w-16 h-16 bg-[#00E0A1] rounded-full flex items-center justify-center text-[#0A1A2F] text-2xl font-bold mb-6">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">{item.title}</h3>
//                 <p className="text-gray-600">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Agent Network */}
//       <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="bg-gray-100 rounded-2xl p-8 aspect-video flex items-center justify-center">
//               <span className="text-gray-400">Réseau d'agents à venir</span>
//             </div>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="space-y-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold">
//               Notre futur réseau <span className="text-[#00E0A1]">d'agents</span>
//             </h2>
            
//             {agentNetwork.map((item, index) => (
//               <div key={index} className="space-y-4">
//                 <h3 className="text-2xl font-bold flex items-center">
//                   <span className="w-6 h-6 bg-[#00E0A1] rounded-full mr-4"></span>
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 pl-10">{item.description}</p>
//               </div>
//             ))}

//             <button className="ml-10 bg-[#00E0A1] hover:bg-[#00c991] text-[#0A1A2F] px-8 py-3 rounded-lg font-bold transition-all">
//               Exprimer son intérêt
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Pricing */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6 md:px-12">
//           <div className="text-center mb-20">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">Tarifs prévus</h2>
//             <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
//               Une structure de frais simple et transparente
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {pricingPlans.map((plan, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ scale: 1.02 }}
//                 className={`rounded-2xl p-8 border-2 ${index === 1 ? 'border-[#00E0A1] bg-white shadow-lg' : 'border-gray-200 bg-white'}`}
//               >
//                 <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
//                 <p className="text-gray-600 mb-6">{plan.description}</p>
//                 <div className="flex items-end mb-8">
//                   <span className="text-4xl font-bold">{plan.price === '0' ? 'Gratuit' : `${plan.price} par transaction`}</span>
//                 </div>
//                 <ul className="space-y-4 mb-8">
//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex items-start">
//                       <svg className="w-5 h-5 text-[#00E0A1] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                       </svg>
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <button
//                   className={`w-full py-3 rounded-lg font-bold ${index === 1 ? 'bg-[#00E0A1] text-[#0A1A2F] hover:bg-[#00c991]' : 'bg-gray-100 hover:bg-gray-200'}`}
//                 >
//                   {plan.price === '0' ? 'En savoir plus' : 'Contact pré-commercial'}
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 px-6 md:px-12 bg-gradient-to-r from-[#00E0A1] to-[#00B2E0] text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-bold mb-8"
//           >
//             Prêt pour la révolution Balaco ?
//           </motion.h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
//             Inscrivez-vous pour être informé de notre lancement en Centrafrique.
//           </p>
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//             className="flex flex-wrap justify-center gap-6"
//           >
//             <motion.button 
//               variants={fadeInUp}
//               className="bg-[#0A1A2F] hover:bg-[#142847] px-8 py-4 rounded-lg font-bold transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
//             >
//               S'inscrire à la newsletter
//             </motion.button>
//             <motion.button 
//               variants={fadeInUp}
//               className="bg-white text-[#0A1A2F] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-all duration-300"
//             >
//               Devenir partenaire
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-16 px-6 md:px-12">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
//           <div>
//             <h3 className="text-2xl font-bold mb-6 flex items-center">
//               <span className="bg-[#00E0A1] text-[#0A1A2F] w-8 h-8 rounded-lg flex items-center justify-center mr-3">B</span>
//               Balaco RCA
//             </h3>
//             <p className="opacity-80">
//               La future solution d'argent mobile pour la République Centrafricaine
//             </p>
//           </div>
          
//           <div>
//             <h4 className="font-bold text-lg mb-6">A venir</h4>
//             <ul className="space-y-3 opacity-80">
//               <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">Transferts d'argent</li>
//               <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">Paiements de factures</li>
//               <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">Réseau d'agents</li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="font-bold text-lg mb-6">Entreprise</h4>
//             <ul className="space-y-3 opacity-80">
//               <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">À propos</li>
//               <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">Carrières</li>
//               <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">Contact</li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="font-bold text-lg mb-6">Légal</h4>
//             <ul className="space-y-3 opacity-80">
//               <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">Mentions légales</li>
//               <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">Confidentialité</li>
//               <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">CGU</li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
//           <p className="opacity-80 mb-4 md:mb-0">© {new Date().getFullYear()} Balaco RCA. Tous droits réservés.</p>
//           <div className="flex space-x-6">
//             {['Facebook', 'Twitter', 'LinkedIn'].map((social, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -3 }}
//                 className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#00E0A1] hover:text-[#0A1A2F] transition-all cursor-pointer"
//               >
//                 {social.charAt(0)}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default FintechLanding;