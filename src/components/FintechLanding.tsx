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
      metaDesc.setAttribute('content', 'La fintech centrafricaine de mobile money - 1% de frais, 100% souverain');
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

    
    </div>
  );
};

export default InvestorLanding;
