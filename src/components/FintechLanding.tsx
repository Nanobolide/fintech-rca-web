import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Cta  from "./Cta";
import Hero from './Hero';
import BusinessModel from './BusinessModel';
import Roadmap from './Roadmap';
import Partenariat from './Partenariat';
import ProblemeEtSolution  from './ProblemeEtSolution';


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const InvestorLanding = () => {
  useEffect(() => {
    document.title = "BALACO RCA - Investissez dans la révolution financière";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Opportunité d\'investissement dans la première fintech centrafricaine de mobile money - 1% de frais, 100% souverain');
    }
  }, []);

  // Nouvelles données pour investisseurs
  const valuePropositions = [
    {
      icon: '📈',
      title: 'Marché stratégique',
      description: '85% de non-bancarisés en RCA - Premier entrant avantageux'
    },
    {
      icon: '💡',
      title: 'Innovation locale',
      description: 'Solution conçue par et pour les Centrafricains'
    },
    {
      icon: '🔄',
      title: 'Modèle éprouvé',
      description: 'Inspiré des succès Wave et M-Pesa, adapté au contexte RCA'
    }
  ];

  const investmentSteps = [
    {
      title: "Phase 1",
      desc: "Prototype terminé - MVP en développement",
      icon: "1"
    },
    {
      title: "Phase 2",
      desc: "Test pilote à Bangui (Q1 2026)",
      icon: "2"
    },
    {
      title: "Phase 3",
      desc: "Déploiement national avec partenaires bancaires",
      icon: "3"
    }
  ];

  const partnerTypes = [
    {
      title: 'Investisseurs',
      description: 'Capital-risque, business angels, institutions financières'
    },
    {
      title: 'Partenaires techniques',
      description: 'Opérateurs telecom, fournisseurs de solutions de paiement'
    },
    {
      title: 'Institutions',
      description: 'Banques locales, mairies, organisations internationales'
    }
  ];

  return (
    <div className="font-sans bg-white text-gray-900 overflow-hidden">
      {/* Hero Section Révisée */}  
      <Hero />
      {/* Section Problème/Solution */}
      <ProblemeEtSolution />

      {/* Section Modèle Economique */}
      <BusinessModel />
      {/* Section Roadmap */}
      <Roadmap />

      {/* Section Partenariat */}
      <Partenariat />     
      {/* Section Partenariats */}
    
      <Cta />
      {/* CTA Final */}


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-[#00E0A1] text-[#0A1A2F] w-8 h-8 rounded-lg flex items-center justify-center mr-3">B</span>
              BALACO RCA
            </h3>
            <p className="opacity-80">
              La première fintech patriotique de République Centrafricaine
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Pour investisseurs</h4>
            <ul className="space-y-3 opacity-80">
              <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">Deck d'investissement</li>
              <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">Projections financières</li>
              <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">FAQ Investisseurs</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-3 opacity-80">
              <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">contact@balaco-rca.com</li>
              <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">+236 XX XX XX XX</li>
              <li className="hover:text-[#00E0A1] transition-colors cursor-pointer">Bangui, RCA</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-gray-800 text-center">
          <p className="opacity-80">© {new Date().getFullYear()} BALACO RCA. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default InvestorLanding;