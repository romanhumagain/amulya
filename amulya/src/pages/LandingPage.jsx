import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServiceSection";
import { useTheme } from "../context/ThemeContext";

const LandingPage = () => {
  const { darkMode } = useTheme();

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`min-h-screen ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
        } transition-colors duration-500`}
      >
        <div className="w-full mx-auto">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LandingPage;
