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
import logo from '../assets/images/logo.png'; 

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

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

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 py-1.5 transition-all duration-300 ${
          scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm" : ""
        }`}
        style={{
          boxShadow: !scrolled ? "0px 2px 10px rgba(0, 0, 0, 0.08)" : "none",
        }}
      >
        <div className="px-4 sm:px-6 lg:px-16">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
                <img src={logo} alt="Logo" className="w-14 h-14" />
           
            
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden space-x-8 lg:space-x-14 md:flex md:flex-1 md:justify-center md:items-center">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className="font-medium text-gray-700 transition-colors text-md lg:text-lg dark:text-gray-300 hover:text-blue-600 dark:hover:text-white"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Right Side Buttons */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className="p-2 text-gray-600 transition-colors bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {darkMode ? (
                  <RiSunLine className="w-4 h-4" />
                ) : (
                  <RiMoonLine className="w-4 h-4" />
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 font-medium text-white transition-colors duration-500 rounded-full bg-gradient-to-r from-blue-500 to-blue-800 hover:from-blue-800 hover:to-blue-700"
              >
                Contact Us
              </motion.button>
            </div>

            {/* Mobile Buttons */}
            <div className="flex items-center space-x-2 md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className="p-2 text-gray-600 transition-colors bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {darkMode ? (
                  <RiSunLine className="w-4 h-4" />
                ) : (
                  <RiMoonLine className="w-4 h-4" />
                )}
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-700 transition-colors rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
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
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
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
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-lg">
                      <RiBuilding2Line className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      Amulya
                    </span>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-700 transition-colors rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
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
                    onClick={handleLinkClick}
                    className="px-3.5 py-1.5 font-medium text-white transition-colors duration-500 rounded-full bg-gradient-to-r from-blue-500 to-blue-800 hover:from-blue-800 hover:to-blue-700"
                  >
                    Contact Us
                  </motion.button>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
