// src/components/Footer.tsx
import React from 'react';

interface FooterLink {
  title: string;
  items: string[];
}

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const links: FooterLink[] = [
    {
      title: "Produit",
      items: ["Solutions", "Documentation API", "Tarifs"]
    },
    {
      title: "Ressources",
      items: ["Blog", "Centre d'aide", "Webinaires"]
    },
    {
      title: "Légal",
      items: ["CGU", "Confidentialité", "Mentions légales"]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="bg-[#00E0A1] text-[#0A1A2F] w-8 h-8 rounded-lg flex items-center justify-center mr-3">F</span>
            FinFlow
          </h3>
          <p className="opacity-80">
            La solution SaaS de référence pour la gestion financière automatisée.
          </p>
        </div>
        
        {links.map((section, index) => (
          <div key={index}>
            <h4 className="font-bold text-lg mb-6">{section.title}</h4>
            <ul className="space-y-3 opacity-80">
              {section.items.map((item, i) => (
                <li key={i} className="hover:text-[#00E0A1] transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p className="opacity-80 mb-4 md:mb-0">© {new Date().getFullYear()} FinFlow. Tous droits réservés.</p>
        <div className="flex space-x-6">
          {["Twitter", "LinkedIn", "GitHub"].map((social, index) => (
            <div 
              key={index} 
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#00E0A1] hover:text-[#0A1A2F] transition-all cursor-pointer"
            >
              {social.charAt(0)}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;