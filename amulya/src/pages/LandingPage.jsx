import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServiceSection";
import ContactSection from "../components/ContactSection";
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
        className={`min-h-screen pt-20 overflow-hidden ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
        } transition-colors duration-500`}
      >
        <div className="w-full mx-auto">
          <main className="space-y-16 sm:space-y-20">
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ContactSection />
          </main>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LandingPage;
