// pages/modele-economique.tsx
import React from 'react';
import { motion } from 'framer-motion';
 

const ModeleEconomique: React.FC = () => {
  return (
    <>
   
        <title>Modèle Économique | BALACO</title>
        <meta name="description" content="Découvrez notre modèle économique innovant conçu pour la RCA" />
     

      <main className="bg-white text-[#0A1A2F] min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-[#0A1A2F] to-[#00E0A1] text-white">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Modèle Économique BALACO
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto"
            >
              Une solution financière innovante, durable et profitable pour la République Centrafricaine
            </motion.p>
          </div>
        </section>

        {/* Détails du modèle */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Section Valeurs */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-[#0A1A2F]">Avantages Concurrentiels</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: '🌍',
                    title: 'Marché Stratégique',
                    description: 'Positionnement unique sur un marché de 5.4 millions d\'habitants avec seulement 15% de bancarisation.'
                  },
                  {
                    icon: '💎',
                    title: 'Valeur Unique',
                    description: 'Solution intégrée combinant mobile money, identité numérique et services financiers innovants.'
                  },
                  {
                    icon: '📊',
                    title: 'Potentiel de Croissance',
                    description: 'Projection de 1.2 millions d\'utilisateurs actifs d\'ici 3 ans avec un taux de pénétration de 25%.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border border-gray-200 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-4xl mb-6 text-[#00E0A1]">{item.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-[#0A1A2F]">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Flux de revenus détaillés */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-[#0A1A2F]">Architecture des Revenus</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Transferts d'Argent",
                    description: "Structure de frais compétitive avec segmentation selon le type de transfert.",
                    details: [
                      "Transferts P2P: 1% (max 5,000 FCFA)",
                      "Transferts bancaires: 1.5%",
                      "Transferts internationaux: 3%"
                    ],
                    icon: '🔄'
                  },
                  {
                    title: "Paiements Marchands",
                    description: "Commission sur les transactions commerciales avec incitations pour les partenaires.",
                    details: [
                      "Transactions commerciales: 0.5%",
                      "Paiements de factures: 1%",
                      "Services publics: 0.75%"
                    ],
                    icon: '💳'
                  },
                  {
                    title: "Réseau d'Agents",
                    description: "Modèle de revenus partagés avec notre réseau de distribution.",
                    details: [
                      "Frais d'adhésion: 200 FCFA/cycle",
                      "Commission agent: 0.2% par transaction",
                      "Bonus volumétrique"
                    ],
                    icon: '👥'
                  },
                  {
                    title: "Services Value-Added",
                    description: "Produits financiers complémentaires générant des revenus récurrents.",
                    details: [
                      "Micro-crédits (intérêts)",
                      "Épargne (frais de gestion)",
                      "Assurances (commission)"
                    ],
                    icon: '💰'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm"
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-4 text-[#00E0A1]">{item.icon}</div>
                      <h3 className="text-2xl font-bold text-[#0A1A2F]">{item.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-6">{item.description}</p>
                    <ul className="space-y-3">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#00E0A1] mr-2">•</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Projections financières */}
            <div className="mb-20 bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h2 className="text-3xl font-bold mb-8 text-center text-[#0A1A2F]">Projections Financières 2025-2028</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Indicateur</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Année 1</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Année 2</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Année 3</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { label: "Utilisateurs Actifs", y1: "250,000", y2: "600,000", y3: "1,200,000" },
                      { label: "Transactions Mensuelles", y1: "1.2M", y2: "3.5M", y3: "8M" },
                      { label: "Chiffre d'Affaires (FCFA)", y1: "120M", y2: "350M", y3: "800M" },
                      { label: "Marge Brute (%)", y1: "45%", y2: "52%", y3: "58%" },
                      { label: "Agents Actifs", y1: "500", y2: "1,200", y3: "2,500" }
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.label}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.y1}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.y2}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.y3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ROI et Investissement */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-[#0A1A2F] text-white p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold mb-6">Opportunité d'Investissement</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-[#00E0A1] mr-2">•</span>
                    <span>Montant recherché: 2.5 milliards FCFA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E0A1] mr-2">•</span>
                    <span>Ticket minimum: 250 millions FCFA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E0A1] mr-2">•</span>
                    <span>Horizon de sortie: 5 ans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E0A1] mr-2">•</span>
                    <span>ROI projeté: 35% annuel</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-2xl font-bold mb-6 text-[#0A1A2F]">Impact Socio-Économique</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "85%", label: "Population couverte" },
                    { value: "12k", label: "Emplois créés" },
                    { value: "45%", label: "Inclusion financière" },
                    { value: "30%", label: "Réduction coûts" }
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-3xl font-bold text-[#00E0A1]">{item.value}</p>
                      <p className="text-gray-700">{item.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer Professionnel */}
      
      </main>
    </>
  );
};

export default ModeleEconomique;