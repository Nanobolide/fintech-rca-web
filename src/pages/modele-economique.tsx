// pages/modele-economique.tsx
import React from 'react';
import { motion } from 'framer-motion';

const ModeleEconomique: React.FC = () => {
  return (
    <>
      <title>Modèle Économique | BALACO</title>
      <meta
        name="description"
        content="Découvrez le modèle économique BALACO : application simple type Wave, réseau d’agents, frais à 1 % sur transferts P2P, adapté à la République centrafricaine."
      />

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
              Une solution simple et durable pour la République centrafricaine :
              frais à <strong>1 %</strong> sur les transferts P2P, paiements marchands,
              et réseau d’agents de proximité.
            </motion.p>
          </div>
        </section>

        {/* Détails du modèle */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Section Valeurs */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-[#0A1A2F]">
                Avantages Concurrentiels
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: '🌍',
                    title: 'Marché stratégique',
                    description:
                      "En République centrafricaine, l’inclusion financière reste faible (≈ 15 % des adultes). L’opportunité de digitalisation par une application simple et des agents est majeure."
                  },
                  {
                    icon: '💎',
                    title: 'Valeur simple & claire',
                    description:
                      "Positionnement type Wave : application épurée, frais transparents à 1 % sur P2P, reçus systématiques et expérience utilisateur accessible."
                  },
                  {
                    icon: '📊',
                    title: 'Croissance maîtrisée',
                    description:
                      "Déploiement progressif : pilote à Bangui, extension nationale avec montée en charge du réseau d’agents et des paiements marchands."
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
              <h2 className="text-3xl font-bold mb-12 text-center text-[#0A1A2F]">
                Architecture des Revenus
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Transferts d’argent (P2P)",
                    description:
                      "Cœur du modèle avec tarification simple : accessibilité et volumes.",
                    details: [
                      "Transferts P2P : 1 % (frais clairs et plafonds transparents)",
                      "Reçus et historique des transactions",
                      "Objectif : maximiser l’adoption grâce à la simplicité"
                    ],
                    icon: '🔄'
                  },
                  {
                    title: "Paiements marchands (C2B/B2B)",
                    description:
                      "Digitalisation des paiements en boutique et entre entreprises.",
                    details: [
                      "Paiements marchands : 0,5 %",
                      "QR/numéro de téléphone, confirmations instantanées",
                      "Incitations d’adoption pour commerçants"
                    ],
                    icon: '💳'
                  },
                  {
                    title: "Services complémentaires",
                    description:
                      "Revenus additionnels pour fidéliser et augmenter la valeur d’usage.",
                    details: [
                      "Airtime & factures : commission ~3 %",
                      "Partenariats (facturiers, éducation, santé…)",
                      "Épargne/microcrédit : à partir de l’Année 3 via banques partenaires"
                    ],
                    icon: '💰'
                  },
                  {
                    title: "Réseau d’agents",
                    description:
                      "Distribution physique au plus près des usagers.",
                    details: [
                      "Commissions agents : partage jusqu’à ~40 % des frais collectés",
                      "Formation, affichage des tarifs, service client",
                      "Supervision et contrôle qualité du réseau"
                    ],
                    icon: '👥'
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

            {/* Projections financières (alignées à tes docs : A1, A3, A5) */}
            <div className="mb-20 bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h2 className="text-3xl font-bold mb-8 text-center text-[#0A1A2F]">
                Projections financières (repères)
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Indicateur</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Année 1</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Année 3</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Année 5</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { label: "Comptes enregistrés", a1: "≈ 35 000", a3: "≈ 350 000", a5: "≈ 875 000" },
                      { label: "Utilisateurs actifs mensuels", a1: "≈ 15 000", a3: "≈ 150 000", a5: "≈ 400 000" },
                      { label: "Réseau d’agents", a1: "≈ 500", a3: "≈ 3 000", a5: "≈ 8 000" },
                      { label: "Chiffre d’affaires (USD)", a1: "≤ 0,5 M", a3: "> 4 M", a5: "8–12 M" },
                      { label: "Rentabilité", a1: "Négative (investissement)", a3: "Seuil de rentabilité atteint", a5: "Marge nette 15–20 %" }
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.label}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.a1}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.a3}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.a5}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Investissement & Impact (texte ajusté, sans promesses non sourcées) */}
           {/* Investissement & Impact (réaliste, pilote Bangui) */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-[#0A1A2F] text-white p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold mb-6">Opportunité d’investissement (phase pilote)</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-[#00E0A1] mr-2">•</span>
                    <span><strong>Montant recherché :</strong> 10 à 15 millions FCFA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E0A1] mr-2">•</span>
                    <span>Utilisation des fonds : finalisation de l’application, conformité réglementaire, déploiement pilote à Bangui</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E0A1] mr-2">•</span>
                    <span>Mise en place d’un réseau initial de 50 à 100 agents dans la capitale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E0A1] mr-2">•</span>
                    <span>Objectif : tester le modèle, valider l’adoption et préparer l’extension nationale</span>
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
                <h3 className="text-2xl font-bold mb-6 text-[#0A1A2F]">Impact attendu (phase pilote)</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "1 000+", label: "Utilisateurs actifs visés à Bangui" },
                    { value: "50–100", label: "Agents déployés en capitale" },
                    { value: "1 %", label: "Frais simples et compétitifs" },
                    { value: "Année 1", label: "Mise en place & test du modèle" }
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
      </main>
    </>
  );
};

export default ModeleEconomique;
