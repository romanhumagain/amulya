import { motion } from "framer-motion";
import {
  RiBuilding2Line,
  RiFileCheckLine,
  RiCalculatorLine,
  RiBarChartLine,
  RiShieldLine,
  RiArrowRightLine,
  RiCheckLine,
} from "react-icons/ri";

import banner_image from "../assets/images/banner_image.webp";
import { useTheme } from "../context/ThemeContext";

const HeroSection = () => {
  const { darkMode } = useTheme();

  const features = [
    { icon: RiBuilding2Line, text: "Company Registration" },
    { icon: RiFileCheckLine, text: "Legal Compliance" },
    { icon: RiCalculatorLine, text: "Financial Advisory" },
    { icon: RiBarChartLine, text: "Business Analytics" },
  ];

  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen overflow-hidden"
    >
      {/* Background with subtle pattern */}
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"
            : "bg-gradient-to-br from-slate-50 via-blue-50/30 to-white"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 space-y-8 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex"
            >
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${
                  darkMode
                    ? "bg-blue-950/50 text-blue-300 border-blue-800/50"
                    : "bg-blue-50 text-blue-700 border-blue-200/50"
                }`}
              >
                <RiShieldLine className="w-4 h-4" />
                Trusted Business Partner
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Empowering Your Business with{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Expert Legal
                </span>
              </span>{" "}
              and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Financial Services
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`text-lg lg:text-xl leading-relaxed max-w-xl ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              From company registration to advisory and audit, we help
              businesses start, scale, and stay compliant with expert guidance
              every step of the way.
            </motion.p>

            {/* Feature list */}

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-2 gap-3"
            > */}
            {/* {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className={`p-1.5 rounded-lg ${
                    darkMode 
                      ? "bg-blue-900/30 text-blue-400" 
                      : "bg-blue-100 text-blue-600"
                  }`}>
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <span className={`text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}>
                    {feature.text}
                  </span>
                </motion.div>
              ))} */}

            {/* </motion.div> */}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white transition-all duration-300 shadow-lg rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:shadow-blue-500/25 group"
              >
                Book a Free Consultation
                <RiArrowRightLine className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                // onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                onClick={
                  // smooth scroll to services section
                  () => {
                    const servicesSection = document.getElementById("services");
                    if (servicesSection) {
                      servicesSection.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }
                }
                className={`px-8 py-4 rounded-xl font-semibold text-base border-2 transition-all duration-300 backdrop-blur-sm ${
                  darkMode
                    ? "border-gray-700 text-gray-300 hover:bg-gray-800/50 hover:border-blue-500/50 hover:text-white"
                    : "border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-blue-400 hover:text-gray-900"
                } shadow-sm hover:shadow-md`}
              >
                Explore Our Services
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center order-1 lg:justify-end lg:order-2 lg:pl-16 lg:pr-0"
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative group"
            >
              {/* Floating background elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute -inset-4 rounded-3xl opacity-20 blur-2xl ${
                  darkMode
                    ? "bg-gradient-to-br from-blue-500 to-blue-700"
                    : "bg-gradient-to-br from-blue-200 to-blue-400"
                }`}
              />

              {/* Main image container */}
              <div className="relative">
                <div
                  className={`absolute inset-0 rounded-2xl ${
                    darkMode
                      ? "bg-gradient-to-br from-blue-600/10 to-blue-800/10"
                      : "bg-gradient-to-br from-blue-100/40 to-blue-200/40"
                  } backdrop-blur-sm`}
                />

                <img
                  src={banner_image}
                  alt="Professional Business Services"
                  className="relative z-10 w-full h-auto max-w-lg transition-all duration-500 border shadow-2xl rounded-2xl border-white/10 group-hover:shadow-blue-500/20"
                />

                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`absolute -top-6 -right-6 w-12 h-12 rounded-full border-2 border-dashed ${
                    darkMode ? "border-blue-400/30" : "border-blue-500/40"
                  }`}
                />

                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className={`absolute -bottom-4 -left-4 w-8 h-8 rounded-full ${
                    darkMode ? "bg-blue-500/20" : "bg-blue-400/30"
                  }`}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
