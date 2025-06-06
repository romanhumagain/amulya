import React from 'react';
import { motion } from 'framer-motion';
import {
  RiBuilding2Line as Building2,
  RiFileCheckLine as FileCheck,
  RiCalculatorLine as Calculator,
  RiArrowUpLine as TrendingUp,  // safe replacement
  RiShieldCheckLine as Shield,
  RiUser3Line as Users,
  RiCheckboxCircleFill as CheckCircle,
} from 'react-icons/ri';

import { useTheme } from '../context/ThemeContext';

const ServicesSection = () => {
  const { darkMode } = useTheme();

  const services = [
    {
      icon: Building2,
      title: 'Company Registration',
      description: 'Complete company formation services including documentation, compliance, and legal structuring for your business.',
      features: ['Private Limited Company', 'LLP Registration', 'Partnership Firm', 'Sole Proprietorship'],
    },
    {
      icon: FileCheck,
      title: 'Audit & Assurance',
      description: 'Comprehensive audit services ensuring compliance with regulations and providing financial transparency.',
      features: ['Statutory Audit', 'Internal Audit', 'Tax Audit', 'GST Audit'],
    },
    {
      icon: Calculator,
      title: 'Taxation Services',
      description: 'Expert tax planning, filing, and compliance services for individuals and businesses.',
      features: ['Income Tax Filing', 'GST Services', 'TDS Compliance', 'Tax Planning'],
    },
    {
      icon: TrendingUp,
      title: 'Business Advisory',
      description: 'Strategic business consulting to help your company grow and achieve its financial goals.',
      features: ['Financial Planning', 'Business Strategy', 'Investment Advisory', 'Risk Management'],
    },
    {
      icon: Shield,
      title: 'Legal Compliance',
      description: 'Ensure your business stays compliant with all legal requirements and regulatory changes.',
      features: ['ROC Compliance', 'Annual Filings', 'Board Meetings', 'Regulatory Updates'],
    },
    {
      icon: Users,
      title: 'Corporate Services',
      description: 'End-to-end corporate solutions including company updates, closures, and restructuring.',
      features: ['Company Closure', 'Name Change', 'Share Transfer', 'Director Changes'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="services" className="relative py-20 overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent ${
            darkMode
              ? 'bg-gradient-to-r from-blue-400 to-purple-500'
              : 'bg-gradient-to-r from-blue-600 to-purple-700'
          }`}>
            Our Services
          </h2>
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto mb-16 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Expert business consulting tailored to your needs. We provide comprehensive solutions to help your business thrive in today's competitive landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                darkMode
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500'
                  : 'bg-white bg-opacity-80 backdrop-blur-lg shadow-xl hover:shadow-2xl'
              }`}
            >
              <div className="flex flex-col items-center">
                <div className={`inline-flex p-4 rounded-xl mb-6 ${
                  darkMode 
                    ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' 
                    : 'bg-gradient-to-br from-blue-100 to-purple-100'
                }`}>
                  <service.icon className={`w-8 h-8 ${
                    darkMode
                      ? 'text-blue-400'
                      : 'text-blue-600'
                  }`} />
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                <p className={`text-base sm:text-lg text-center mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center text-sm sm:text-base ${
                      darkMode ? 'text-gray-400' : 'text-gray-700'
                    }`}>
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
