import React from 'react';
import { motion } from 'framer-motion';
import { RiArrowRightLine, RiServiceLine } from 'react-icons/ri';
import { useTheme } from '../context/ThemeContext';
import { services } from '../constant/data';

const ServicesSection = () => {
  const { darkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="relative py-20 px-[10px] overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 ${
        darkMode 
          ? "bg-gradient-to-b from-slate-900 to-gray-900" 
          : "bg-gradient-to-b from-white to-gray-50"
      }`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium transition-all duration-300 border rounded-full"
            style={{
              backgroundColor: darkMode ? 'rgba(30, 58, 138, 0.2)' : 'rgba(59, 130, 246, 0.1)',
              color: darkMode ? 'rgb(147, 197, 253)' : 'rgb(37, 99, 235)',
              borderColor: darkMode ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'
            }}
          >
            <RiServiceLine className="w-4 h-4" />
            Our Services
          </motion.div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Comprehensive Business
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Solutions
            </span>
          </h2>
          
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Expert business consulting tailored to your needs. We provide comprehensive solutions 
            to help your business thrive in today's competitive landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative  p-6 lg:p-8 rounded-2xl border transition-all duration-500  ${
                darkMode
                  ? 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/80 hover:border-blue-500/50 '
                  : 'bg-white/80 border-gray-200/50 hover:bg-white hover:border-blue-300/50'
              } backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/10`}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-2xl bg-gradient-to-br from-blue-50/5 to-transparent group-hover:opacity-100" />
              
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 ${
                  darkMode 
                    ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 group-hover:text-blue-300' 
                    : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200 group-hover:text-blue-700'
                }`}
              >
                <service.icon className="w-8 h-8" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                
                <p className={`text-base leading-relaxed  ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>

                {/* Learn More Link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors duration-300 group-hover:text-blue-700"
                >
                  <span>Learn More</span>
                  <RiArrowRightLine className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 transition-all duration-500 border-2 rounded-2xl border-blue-500/0 group-hover:border-blue-500/20" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl hover:shadow-xl hover:shadow-blue-500/25 group"
          >
            Get Started Today
            <RiArrowRightLine className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;