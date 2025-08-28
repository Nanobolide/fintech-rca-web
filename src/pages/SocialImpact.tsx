// src/pages/SocialImpact.tsx
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Globe,
  MapPin,
  Shield,
  Users,
  Smartphone,
  PieChart,
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import React from 'react';

// Variants conservés (même apparence)
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const
    }
  })
};

const SocialImpact = () => {
  // Données structurées (texte réaliste + sourcé)
  const data = {
    hero: {
      title: "L'Impact Vérifié de BALACO",
      subtitle: "Contenus alignés sur des références internationales (GSMA, Banque mondiale) et le cadre CEMAC/BEAC",
      bgPattern: "bg-[url('/assets/pattern.svg')]"
    },
    studies: [
      {
        icon: <PieChart className="w-5 h-5" />,
        title: "Adoption mondiale",
        content: "1,6 milliard de comptes mobile money dans le monde ; l’Afrique subsaharienne concentre ~70 % des transactions.",
        source: "GSMA 2023",
        link: "https://www.gsma.com/mobilemoney"
      },
      {
        icon: <TrendingUp className="w-5 h-5" />,
        title: "Inclusion financière",
        content: "Le mobile money favorise l’accès aux paiements et services financiers pour les ménages et les petits commerces.",
        source: "Banque mondiale",
        link: "https://www.worldbank.org"
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Effets socio-économiques",
        content: "Digitaliser les paiements réduit les coûts de transaction et améliore la traçabilité pour l’économie locale.",
        source: "GSMA / Banque mondiale",
        link: "https://www.gsma.com/mobilemoney"
      }
    ],
    regulations: [
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Règlementation CEMAC",
        content: "Opération de services de paiement dans le respect des exigences prudentielles et de la lutte contre le blanchiment.",
        authority: "BEAC / COBAC",
        year: "Règlement 01/18 – en vigueur"
      },
      {
        icon: <BookOpen className="w-5 h-5" />,
        title: "Alignement national",
        content: "Convergence avec les objectifs publics d’inclusion financière en République centrafricaine.",
        authority: "Ministère des Finances",
        year: "Cadre national d’inclusion financière"
      }
    ],
    impacts: [
      {
        icon: <MapPin className="w-6 h-6" />,
        value: "Pilote",
        label: "Déploiement initial",
        detail: "Bangui et communes partenaires (phase pilote)",
        source: "BALACO – scénario pilote"
      },
      {
        icon: <Users className="w-6 h-6" />,
        value: "50–100",
        label: "Agents de proximité",
        detail: "Réseau formé et supervisé (phase pilote)",
        source: "BALACO – scénario pilote"
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        value: "1 %",
        label: "Frais P2P",
        detail: "Tarification simple et transparente sur transferts",
        source: "BALACO – grille cible"
      }
    ]
  };

  return (
    <div className="text-[#0A1A2F]">
      {/* Hero Section (apparence conservée) */}
      <section className="relative bg-[#0A1A2F] text-white py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('/assets/map-pattern.svg')]"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={0}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-[#00E0A1]">Impact Social</span> <br />Mesurable en République centrafricaine
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            {data.hero.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Études Internationales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center gap-3 mb-4 text-[#00E0A1]">
              <Globe className="w-7 h-7" />
              <h2 className="text-3xl font-bold text-[#0A1A2F]">Validation Internationale</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des références mondiales confirment l’impact des solutions de paiement mobile
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.studies.map((study, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                custom={index + 1}
                whileHover={{ y: -5 }}
                className="group bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-[#00E0A1]/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-[#00E0A1]/10 p-2 rounded-lg group-hover:bg-[#00E0A1]/20 transition">
                    {study.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{study.title}</h3>
                </div>
                <p className="mb-5 text-gray-700 leading-relaxed">{study.content}</p>
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-[#00E0A1] hover:underline font-medium"
                >
                  Voir la source <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cadre Légal */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center gap-3 mb-4 text-[#00E0A1]">
              <Shield className="w-7 h-7" />
              <h2 className="text-3xl font-bold text-[#0A1A2F]">Conformité Réglementaire</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              BALACO s’inscrit dans les cadres légaux nationaux et régionaux
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.regulations.map((regulation, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                custom={index + 1}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#00E0A1]"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="bg-[#00E0A1]/10 p-3 rounded-lg flex-shrink-0">
                    {regulation.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{regulation.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{regulation.content}</p>
                    <div className="text-sm bg-gray-100 px-4 py-2 rounded-lg inline-block">
                      <p className="font-medium">{regulation.authority}</p>
                      <p className="text-gray-500 text-xs">{regulation.year}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Local (réaliste : phase pilote) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold text-[#0A1A2F] mb-4">Impact concret en République centrafricaine</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Résultats attendus de la phase pilote à Bangui, avec montée en charge progressive
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {data.impacts.map((impact, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                custom={index + 1}
                className="text-center"
              >
                <div className="bg-[#00E0A1]/10 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6">
                  {React.cloneElement(impact.icon, { className: "w-8 h-8 text-[#00E0A1]" })}
                </div>
                <p className="text-5xl font-bold text-[#00E0A1] mb-3">{impact.value}</p>
                <h3 className="text-xl font-semibold mb-2">{impact.label}</h3>
                <p className="text-gray-600 mb-2">{impact.detail}</p>
                <p className="text-xs text-gray-400">{impact.source}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-b from-[#0A1A2F] to-[#0A1A2F]/90 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} custom={0}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à soutenir cette transformation ?
            </h2>
            <motion.p variants={fadeIn} custom={0.3} className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Institutions et partenaires : contactez BALACO pour la phase pilote
            </motion.p>
            <motion.div variants={fadeIn} custom={0.6}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#00E0A1] hover:bg-[#00c991] text-[#0A1A2F] px-8 py-4 rounded-lg font-bold transition-colors shadow-lg hover:shadow-xl"
              >
                Devenir partenaire institutionnel
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SocialImpact;
