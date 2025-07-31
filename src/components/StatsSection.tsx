// src/components/StatsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface StatItem {
  value: string;
  label: string;
}

interface StatsSectionProps {}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const StatsSection: React.FC<StatsSectionProps> = () => {
  const stats: StatItem[] = [
    { value: "90.9%", label: "Satisfaction clients" },
    { value: "500ms", label: "Temps de réponse" },
    { value: "24/7", label: "Support disponible" }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="flex flex-wrap justify-center gap-12 -mt-16 px-6 md:px-12 max-w-6xl mx-auto relative z-20"
    >
      {stats.map((item, index) => (
        <motion.div 
          key={index}
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
        >
          <p className="text-4xl font-bold text-[#00E0A1]">{item.value}</p>
          <p className="text-gray-300 mt-2">{item.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsSection;