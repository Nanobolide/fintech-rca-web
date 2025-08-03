import { useEffect } from 'react';
import Cta  from "./Cta";
import Hero from './Hero';
import BusinessModel from './BusinessModel';
import Roadmap from './Roadmap';
import Partenariat from './Partenariat';
import ProblemeEtSolution  from './ProblemeEtSolution';

const InvestorLanding = () => {
  useEffect(() => {
    document.title = "BALACO RCA - Investissez dans la révolution financière";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Opportunité d\'investissement dans la première fintech centrafricaine de mobile money - 1% de frais, 100% souverain');
    }
  }, []);

  return (
    <div className="font-sans bg-white text-gray-900 overflow-hidden">
      <Hero />
      <ProblemeEtSolution />
      <BusinessModel />
      <Roadmap />
      <Partenariat />
      <Cta />

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
