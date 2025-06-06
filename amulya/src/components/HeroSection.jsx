import { motion } from "framer-motion";
import {
  RiBuilding2Line,
  RiFileCheckLine,
  RiCalculatorLine,
  RiBarChartLine,
  RiShieldLine,
  RiArrowRightLine,
} from "react-icons/ri";

import banner_image from "../assets/images/banner_image.webp";
import { useTheme } from "../context/ThemeContext";

const HeroSection = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
        } opacity-50`}
      ></div>

      <div className="px-4 py-12 sm:py-20 mx-auto max-w-[1200px] sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-8 lg:gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Empowering Your Business with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Expert Legal
              </span>{" "}
              and{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Financial Services
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`text-base sm:text-lg lg:text-xl ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              From company registration to advisory and audit, we help
              businesses start, scale, and stay compliant with expert guidance
              every step of the way.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg shadow-lg hover:shadow-xl"
              >
                Book a Free Consultation
                <RiArrowRightLine className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg border-2 transition-all duration-300 backdrop-blur-sm ${
                  darkMode
                    ? "border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:border-blue-500"
                    : "border-gray-300 text-gray-700 hover:bg-white/50 hover:border-blue-500"
                } shadow-lg hover:shadow-xl`}
              >
                Explore Our Services
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div
                className={`absolute inset-0 rounded-2xl ${
                  darkMode
                    ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                    : "bg-gradient-to-br from-blue-100/50 to-purple-100/50"
                } blur-xl transform -translate-y-4 translate-x-4`}
              ></div>
              <img
                src={banner_image}
                alt="Professional Banner"
                className="relative z-10 max-w-full sm:max-w-[450px] w-full h-auto sm:h-[320px] object-cover rounded-2xl shadow-2xl border border-gray-300 dark:border-gray-700"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
