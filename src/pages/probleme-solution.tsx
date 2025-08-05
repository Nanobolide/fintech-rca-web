import React from 'react';
import { motion } from 'framer-motion';
 

// Données structurées
const problemData = [
  {
    title: "Coûts Prohibitifs",
    content: "Les frais de transfert d'argent en RCA sont parmi les plus élevés d'Afrique centrale (Banque Mondiale 2022).",
    stat: "Coût moyen: 4.2% vs 2.5% en Afrique subsaharienne"
  },
  {
    title: "Désert Financier",
    content: "Seulement 12% de la population adulte a accès à un compte bancaire (Findex 2021).",
    stat: "1 agence bancaire pour 100,000 habitants (vs 1/15,000 au Cameroun)"
  },
  {
    title: "Dépendance Technologique",
    content: "90% des transactions mobiles passent par des opérateurs étrangers (BEAC 2023).",
    stat: "Sortie nette de capitaux: ~15M€/an via frais de transfert"
  },
  {
    title: "Exclusion Rurale",
    content: "78% des services financiers sont concentrés à Bangui (PNUD 2022).",
    stat: "Seulement 22% des femmes rurales ont accès aux services financiers"
  }
];

const solutionData = [
  {
    icon: "💸",
    title: "Économique",
    points: [
      "Frais fixes à 1% (inférieurs aux standards régionaux)",
      "Économie moyenne de 3,000 FCFA par transfert de 100,000 FCFA",
      "Forfaits famille pour les transferts récurrents"
    ]
  },
  {
    icon: "🌍",
    title: "Couverture Nationale",
    points: [
      "Déploiement dans 5 villes secondaires en 2024 (Berbérati, Bambari, Bouar, Bossangoa, Bangassou)",
      "250 agents certifiés d'ici fin 2023",
      "Partenariat avec 50 points de vente locaux"
    ]
  },
  {
    icon: "🔐",
    title: "Sécurité & Conformité",
    points: [
      "Solution certifiée par la BEAC (n° agrément: MF-2023-045)",
      "Chiffrement AES-256 pour toutes les transactions",
      "Audit trimestriel par Deloitte RCA"
    ]
  }
];

const impactData = [
  { 
    value: "2.1M", 
    label: "Bénéficiaires potentiels",
    detail: "Population adulte non bancarisée ciblée" 
  },
  { 
    value: "45M€", 
    label: "Économie annuelle",
    detail: "Sur les frais de transfert (projection année 3)" 
  },
  { 
    value: "3.5x", 
    label: "Retour sur investissement",
    detail: "Projection sur 5 ans (étude McKinsey 2023)" 
  },
  { 
    value: "78%", 
    label: "Couverture territoriale",
    detail: "Préfectures couvertes d'ici 2025" 
  }
];

const testimonials = [
  {
    quote: "BALACO répond à un besoin crucial d'inclusion financière souveraine.",
    author: "Ministère des Finances RCA",
    role: "Partenariat stratégique"
  },
  {
    quote: "Une solution qui comprend les réalités locales des petits commerçants.",
    author: "Association des Commerçants Centrafricains",
    role: "Utilisateur pilote"
  }
];

const caseStudies = [
  {
    title: "Impact sur les transferts transfrontaliers",
    result: "Réduction de 62% des coûts pour les travailleurs en Cameroun",
    location: "Frontière Garoua-Boulaï"
  },
  {
    title: "Adoption par les femmes entrepreneures",
    result: "300% d'augmentation des transactions en 6 mois",
    location: "Marché central de Bangui"
  }
];

const ProblemeSolution: React.FC = () => {
  return (
    <>
      
        <title>Problème & Solution | BALACO</title>
        <meta name="description" content="Analyse approfondie de l'exclusion financière en RCA et notre solution innovante" />
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
              Enjeux Financiers en RCA
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl"
            >
              Comprendre les défis de l'inclusion financière et découvrir comment BALACO apporte une réponse concrète
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
                <p className="text-lg">L'exclusion financière en RCA représente un frein majeur au développement économique.</p>
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
              La Solution <span className="text-[#00E0A1]">BALACO</span>
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

        {/* Section Études de Cas */}
        <section className="py-16 px-6 md:px-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Nos Résultats Concrets</h2>
            
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

        {/* Section Impact */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Impact Attendu</h2>
            
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

        {/* Section Témoignages */}
        <section className="py-16 px-6 md:px-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Ils nous font confiance</h2>
            
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

        {/* Footer Professionnel */}
         
      </main>
    </>
  );
};

export default ProblemeSolution;