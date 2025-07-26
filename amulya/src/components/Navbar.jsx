import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiCloseLine,
  RiBuilding2Line,
  RiMenuLine,
  RiSunLine,
  RiMoonLine,
} from "react-icons/ri";
import { useTheme } from "../context/ThemeContext";
import ContactModal from "./ContactModal";
import logo from '../assets/images/logo.png';
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => setIsOpen(false);

  const handleBrandLogoClick = () => { 
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsContactModalOpen(true);
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 py-1.5 transition-all duration-300 ${
          scrolled 
            ? darkMode
              ? "bg-gray-900/85 backdrop-blur-md border-b border-gray-800"
              : "bg-white/85 backdrop-blur-md border-b border-gray-100"
            : ""
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={handleBrandLogoClick}
            >
              <img src={logo} alt="Logo" className="w-12 h-12 md:w-14 md:h-14 dark:invert" />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden space-x-8 lg:space-x-12 md:flex md:flex-1 md:justify-center md:items-center">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className={`relative font-medium text-base lg:text-lg transition-colors duration-200 
                    ${darkMode 
                      ? "text-gray-300 hover:text-white" 
                      : "text-gray-700 hover:text-blue-600"
                    }
                    after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
                    after:h-[2px] after:w-full after:origin-left after:scale-x-0 
                    after:transition-transform after:duration-300
                    after:bg-gradient-to-r after:from-blue-600 after:to-blue-600
                    hover:after:scale-x-100`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Right Side Buttons */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className={`p-2.5 rounded-lg transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {darkMode ? (
                  <RiSunLine className="w-5 h-5" />
                ) : (
                  <RiMoonLine className="w-5 h-5" />
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleContactClick}
                className="px-6 py-2.5 font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-700 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
              >
                Contact Us
              </motion.button>
            </div>

            {/* Mobile Buttons */}
            <div className="flex items-center space-x-3 md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className={`p-2.5 rounded-lg transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {darkMode ? (
                  <RiSunLine className="w-5 h-5" />
                ) : (
                  <RiMoonLine className="w-5 h-5" />
                )}
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2.5 rounded-lg transition-all duration-300 ${
                  darkMode
                    ? "text-gray-300 hover:bg-gray-800"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <RiMenuLine className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 z-50 h-full bg-white shadow-2xl w-80 dark:bg-gray-900 md:hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800">
                      <RiBuilding2Line className="w-6 h-6 text-white" />
                    </div>
                    <span className={`text-lg font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}>
                      Amulya
                    </span>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className={`p-2.5 rounded-lg transition-colors ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <RiCloseLine className="w-6 h-6" />
                  </motion.button>
                </div>

                <nav className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={handleLinkClick}
                      className="block px-4 py-3 text-lg font-medium text-gray-700 transition-colors rounded-lg dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {link.name}
                    </motion.a>
                  ))}

                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    onClick={handleContactClick}
                    className="px-6 py-3 font-medium text-white transition-all duration-300 shadow-lg rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-700 hover:shadow-xl hover:shadow-blue-500/25"
                  >
                    Contact Us
                  </motion.button>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};
