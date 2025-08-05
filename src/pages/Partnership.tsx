import { ArrowRight, Check, Shield, Banknote, Satellite, Users, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
// import { Helmet } from 'react-helmet-async';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 }
  })
};

const Partnership = () => {
  const partners = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Institutions Publiques",
      benefits: [
        "Souveraineté financière numérique",
        "Traçabilité des flux budgétaires",
        "Infrastructure critique nationale"
      ]
    },
    {
      icon: <Banknote className="w-8 h-8" />,
      title: "Banques & Microfinances",
      benefits: [
        "Accès à 85% de non-bancarisés",
        "Solutions white-label",
        "Réseau d'agents partagé"
      ]
    },
    {
      icon: <Satellite className="w-8 h-8" />,
      title: "Opérateurs Télécoms",
      benefits: [
        "Nouveaux revenus (USSD, mobile money)",
        "Synergies infrastructurelles",
        "Bonus fidélisation clients"
      ]
    }
  ];

  const collaborationModels = [
    {
      title: "Intégration API",
      icon: <Cpu className="w-6 h-6" />,
      description: "Connectez vos systèmes à notre plateforme sécurisée"
    },
    {
      title: "Réseau d'Agents",
      icon: <Users className="w-6 h-6" />,
      description: "Devenez distributeur agréé avec formation certifiante"
    }
  ];

  return (
    <>
       
        <title>Devenir Partenaire | BALACO RCA</title>
        <meta name="description" content="Rejoignez le mouvement pour une finance souveraine en RCA. Solutions partenaires pour institutions, banques et opérateurs." />
       

      {/* Hero Section */}
      <section className="bg-[#0A1A2F] text-white py-20 px-6 text-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#00E0A1]">Co-construisez</span> l'écosystème financier centrafricain
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Partenariats stratégiques pour une solution <strong>100% RCA</strong>
          </p>
        </motion.div>
      </section>

      {/* Pourquoi BALACO ? */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="md:flex gap-12 items-center"
          >
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-[#0A1A2F] mb-6">
                Pourquoi une <span className="text-[#00E0A1]">solution nationale</span> ?
              </h2>
              <ul className="space-y-4">
                {[
                  "Dépendance actuelle aux solutions étrangères (frais élevés)",
                  "Besoin de conformité avec les régulations BCEAC",
                  "Opportunité unique de créer 5 000 emplois locaux d'ici 2026"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    custom={i + 1}
                    variants={fadeIn}
                    className="flex items-start"
                  >
                    <Check className="text-[#00E0A1] mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 bg-gray-50 p-8 rounded-xl border border-[#00E0A1]/20">
              <h3 className="text-xl font-bold text-[#0A1A2F] mb-4">Chiffres Clés RCA</h3>
              <div className="space-y-4">
                {[
                  ["85%", "de la population non bancarisée"],
                  ["<10%", "de couverture bancaire hors Bangui"],
                  ["$12M", "de transferts mensuels (est. 2024)"]
                ].map(([value, label], i) => (
                  <motion.div 
                    key={i}
                    custom={i + 2}
                    variants={fadeIn}
                    className="flex justify-between border-b border-gray-200 pb-2"
                  >
                    <span className="font-medium">{label}</span>
                    <span className="text-[#00E0A1] font-bold">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Avantages par Partenaire */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-3xl font-bold text-[#0A1A2F] mb-12 text-center"
          >
            Avantages <span className="text-[#00E0A1]">par Profil</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                custom={i + 1}
                className="bg-white p-8 rounded-xl shadow-md border border-[#0A1A2F]/10"
              >
                <div className="text-[#00E0A1] mb-4">{partner.icon}</div>
                <h3 className="text-xl font-bold text-[#0A1A2F] mb-4">{partner.title}</h3>
                <ul className="space-y-3">
                  {partner.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start">
                      <Check className="text-[#00E0A1] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modèles de Collaboration */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-3xl font-bold text-[#0A1A2F] mb-12 text-center"
          >
            Nos <span className="text-[#00E0A1]">Modèles de Collaboration</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {collaborationModels.map((model, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                custom={i + 1}
                className="bg-[#0A1A2F] text-white p-8 rounded-xl"
              >
                <div className="text-[#00E0A1] mb-4">{model.icon}</div>
                <h3 className="text-xl font-bold mb-3">{model.title}</h3>
                <p className="opacity-90">{model.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#00E0A1] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-[#0A1A2F]">
          <motion.h2 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-3xl font-bold mb-6"
          >
            Prêt à écrire l'avenir financier de la RCA ?
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Notre équipe partenariats vous propose une démonstration sur mesure.
          </motion.p>
          <motion.div variants={fadeIn}>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0A1A2F] text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition"
            >
              Prendre contact <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Partnership;