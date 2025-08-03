import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
const navItems = [
  { id: "solution", label: "Notre Solution" },
  { id: "modele", label: "Modèle Économique" },
  { id: "impact", label: "Impact Social" },
  { id: "contact", label: "Contact", to: "/contact" }  // ← ajouter un champ `to`
];


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-[#0A1A2F] text-white sticky top-0 z-50 shadow-lg border-b border-[#00E0A1]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Barre de navigation principale */}
        <div className="flex justify-between items-center py-4">
          {/* Logo BALACO */}
        {/* Logo BALACO */}
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center cursor-pointer"
                >
                  <div className="bg-[#00E0A1] text-[#0A1A2F] w-8 h-8 rounded-lg flex items-center justify-center mr-2 font-bold">
                    B
                  </div>
                  <span className="text-xl font-bold">BALACO</span>
                </motion.div>
              </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
           {navItems.map((item) => (
            item.to ? (
              <Link key={item.id} to={item.to}>
                <motion.span
                  whileHover={{ y: -2, color: "#00E0A1" }}
                  transition={{ duration: 0.2 }}
                  className="font-medium px-3 py-2 cursor-pointer"
                >
                  {item.label}
                </motion.span>
              </Link>
            ) : (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                whileHover={{ y: -2, color: "#00E0A1" }}
                transition={{ duration: 0.2 }}
                className="font-medium px-3 py-2"
              >
                {item.label}
              </motion.a>
            )
          ))}

            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#00c991"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-[#00E0A1] text-[#0A1A2F] px-6 py-2 rounded-lg font-bold ml-4"
            >
              Devenir Partenaire
            </motion.button>
          </nav>

          {/* Bouton Menu Mobile */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.9 }}
              className="text-white focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </motion.button>
          </div>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-2 pb-4 space-y-2">
                {navItems.map((item) => (
                  item.to ? (
                    <Link key={item.id} to={item.to} onClick={() => setMobileMenuOpen(false)}>
                      <motion.span
                        whileTap={{ scale: 0.95 }}
                        className="block px-3 py-3 rounded-md text-base font-medium hover:bg-[#00E0A1]/10 hover:text-[#00E0A1]"
                      >
                        {item.label}
                      </motion.span>
                    </Link>
                  ) : (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      whileTap={{ scale: 0.95 }}
                      className="block px-3 py-3 rounded-md text-base font-medium hover:bg-[#00E0A1]/10 hover:text-[#00E0A1]"
                    >
                      {item.label}
                    </motion.a>
                  )
                ))}

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 bg-[#00E0A1] text-[#0A1A2F] px-6 py-3 rounded-lg font-bold"
                >
                  Devenir Partenaire
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};