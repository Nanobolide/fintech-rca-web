import React from 'react';
import { motion } from 'framer-motion';

// Données structurées (corrigées, sans USSD)
const problemData = [
  {
    title: "Coûts élevés",
    content:
      "Les frais sur les transferts d’argent restent élevés par rapport au pouvoir d’achat local (références régionales 3–7 %).",
    stat: "Référence marché : 3–7 % selon services (vs 1 % visé par BALACO)"
  },
  {
    title: "Faible inclusion",
    content:
      "Environ 15 % des adultes disposent d’un compte formel en République centrafricaine (Banque mondiale).",
    stat: "Moyenne Afrique centrale ≈ 33 % (Banque mondiale)"
  },
  {
    title: "Dépendance d’acteurs externes",
    content:
      "Le marché s’appuie principalement sur des solutions d’opérateurs étrangers ; il manque une solution nationale.",
    stat: "Enjeu : souveraineté financière et traçabilité"
  },
  {
    title: "Accès inégal hors capitale",
    content:
      "Les services financiers sont concentrés à Bangui ; l’accès reste limité dans de nombreuses villes et zones rurales.",
    stat: "Nécessité d’un réseau d’agents de proximité"
  }
];

const solutionData = [
  {
    icon: "💸",
    title: "Tarifs simples",
    points: [
      "Frais à 1 % sur transferts P2P (positionnement transparent)",
      "Objectif : réduire le coût total pour les ménages et commerçants",
      "Grille tarifaire courte, reçus systématiques"
    ]
  },
  {
    icon: "📱",
    title: "Application simple",
    points: [
      "Parcours minimalistes : dépôt, transfert, paiement marchand",
      "QR ou numéro de téléphone, confirmations instantanées",
      "Design accessible pour tous les niveaux de littératie numérique"
    ]
  },
  {
    icon: "🏪",
    title: "Réseau d’agents",
    points: [
      "Agents locaux formés pour dépôts/retraits",
      "Supervision, affichage des tarifs, service client",
      "Déploiement progressif : pilote à Bangui, extension nationale"
    ]
  },
  {
    icon: "🔐",
    title: "Sécurité & conformité",
    points: [
      "Conformité BEAC/CEMAC (KYC/LCB-FT, limites par paliers)",
      "Traçabilité des transactions et protection des données",
      "Gouvernance des risques et audits réguliers"
    ]
  }
];

const impactData = [
  {
    value: "875 000",
    label: "Comptes enregistrés (A5, proj.)",
    detail: "Projection Business Plan (année 5)"
  },
  {
    value: "8 000",
    label: "Agents (A5, proj.)",
    detail: "Réseau d’agents formés et supervisés"
  },
  {
    value: "≥ 300 Mds FCFA",
    label: "Transactions digitalisées (A5, proj.)",
    detail: "Volume cumulé estimatif à 5 ans"
  },
  {
    value: "Année 3",
    label: "Seuil de rentabilité (proj.)",
    detail: "Rentabilité opérationnelle visée"
  }
];

// Témoignages : gardés génériques (pas d’attribution institutionnelle non confirmée)
const testimonials = [
  {
    quote: "Une application simple qui réduit le coût des transferts pour les familles et les commerçants.",
    author: "Utilisateur pilote",
    role: "Commerçant de quartier"
  },
  {
    quote: "Le réseau d’agents de proximité facilite les dépôts et retraits au quotidien.",
    author: "Utilisateur pilote",
    role: "Agent point de service"
  }
];

const caseStudies = [
  {
    title: "Création d’emplois locaux (pilote)",
    result: "Mise en place d’un réseau d’agents avec supervision et formation",
    location: "Bangui (phase pilote)"
  },
  {
    title: "Inclusion financière (pilote)",
    result: "Onboarding simple via l’application, reçus et traçabilité",
    location: "Marchés et communes partenaires"
  }
];

const ProblemeSolution: React.FC = () => {
  return (
    <>
      <title>Problème & Solution | BALACO</title>
      <meta
        name="description"
        content="Analyse de l’exclusion financière en République centrafricaine et réponse proposée par BALACO : application simple, réseau d’agents, tarifs à 1 %."
      />
      <link rel="icon" href="/favicon.ico" />

      <main className="bg-white text-[#0A1A2F]">
        {/* Hero Section */}
        <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-[#0A1A2F] to-[#00E0A1] text-white">
          <div className="max-w-6xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Enjeux financiers en République centrafricaine
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl"
            >
              Comprendre les défis d’inclusion financière et découvrir comment BALACO apporte
              une réponse concrète, simple et souveraine.
            </motion.p>
          </div>
        </section>

        {/* Section Problème */}
        <section className="py-16 px-6 md:px-12 bg-red-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start gap-8"
            >
              <div className="md:w-1/3">
                <h2 className="text-3xl font-bold mb-4 text-red-600">Le Problème</h2>
                <p className="text-lg">
                  L’exclusion financière en République centrafricaine freine la croissance et
                  entretient l’usage massif des espèces.
                </p>
              </div>

              <div className="md:w-2/3 grid md:grid-cols-2 gap-6">
                {problemData.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-sm"
                  >
                    <h3 className="text-xl font-bold mb-3 text-red-600">{item.title}</h3>
                    <p className="mb-3">{item.content}</p>
                    <p className="text-sm font-medium bg-red-100 px-3 py-1 rounded-full inline-block">
                      {item.stat}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section Solution */}
        <section className="py-16 px-6 md:px-12 bg-[#0A1A2F] text-white">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center"
            >
              La solution <span className="text-[#00E0A1]">BALACO</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {solutionData.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 p-8 rounded-xl backdrop-blur-sm"
                >
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.points.map((point, j) => (
                      <li key={j} className="flex items-start">
                        <span className="text-[#00E0A1] mr-2">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Études de Cas (pilote) */}
        <section className="py-16 px-6 md:px-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Études de cas (pilote)</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#00E0A1]"
                >
                  <h3 className="text-2xl font-bold mb-3 text-[#0A1A2F]">{study.title}</h3>
                  <p className="text-3xl font-bold text-[#00E0A1] mb-2">{study.result}</p>
                  <p className="text-gray-600 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {study.location}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Impact (projections BP) */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Impact attendu (projections)</h2>

            <div className="grid md:grid-cols-4 gap-6">
              {impactData.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition"
                >
                  <p className="text-4xl font-bold text-[#00E0A1] mb-2">{item.value}</p>
                  <p className="font-medium mb-1">{item.label}</p>
                  <p className="text-sm text-gray-600">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Témoignages (génériques) */}
        <section className="py-16 px-6 md:px-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Ils nous font confiance (pilote)</h2>

          <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white p-8 rounded-lg shadow-sm"
                >
                  <blockquote className="text-lg italic mb-6">"{item.quote}"</blockquote>
                  <p className="font-bold">{item.author}</p>
                  <p className="text-gray-600">{item.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProblemeSolution;
