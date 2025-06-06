import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaWhatsapp, 
  FaLinkedinIn, 
  FaBuilding, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaArrowRight 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: FaWhatsapp, href: '#', label: 'WhatsApp', color: 'hover:text-green-500' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="relative overflow-hidden text-white bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-full h-full transform -skew-y-6 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 transform translate-x-32 translate-y-32 bg-white rounded-full opacity-5"></div>
        <div className="absolute w-32 h-32 bg-white rounded-full top-1/2 left-10 opacity-5"></div>
      </div>

      <div className="relative z-10 px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2"
          >
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl">
                <FaBuilding className="text-white w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Amulya</h3>
                <p className="text-sm font-medium text-blue-100">Business Consultant</p>
              </div>
            </div>

            {/* Description */}
            <p className="max-w-md text-lg leading-relaxed text-blue-100">
              We are specialized in setting up businesses and providing operational services to help you succeed in today's competitive market.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    className={`w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-white hover:bg-opacity-30`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-white">General Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="flex items-center text-blue-100 transition-colors duration-300 hover:text-white group"
                  >
                    <FaArrowRight className="w-4 h-4 mr-2 transition-all duration-300 transform translate-x-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {link.name}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-white">Contact Information</h4>
            <div className="space-y-4">
              {/* Phone */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3 cursor-pointer group"
              >
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-all duration-300 bg-white rounded-lg bg-opacity-20 backdrop-blur-sm group-hover:bg-opacity-30">
                  <FaPhoneAlt className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-100">Call Us</p>
                  <a href="tel:+919898979195" className="font-semibold text-white transition-colors hover:text-blue-200">
                    +91 98989 79195
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3 cursor-pointer group"
              >
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-all duration-300 bg-white rounded-lg bg-opacity-20 backdrop-blur-sm group-hover:bg-opacity-30">
                  <FaEnvelope className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-100">Email Us</p>
                  <a href="mailto:info@amulya.com" className="font-semibold text-white break-all transition-colors hover:text-blue-200">
                    info@amulya.com
                  </a>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3 group"
              >
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-all duration-300 bg-white rounded-lg bg-opacity-20 backdrop-blur-sm group-hover:bg-opacity-30">
                  <FaMapMarkerAlt className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-100">Visit Us</p>
                  <p className="font-semibold text-white">
                    Tower Junction chiyal,<br />
                    Kalyan, Maharashtra, India
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 mt-5 text-sm text-center text-blue-100 border-t border-white border-opacity-20">
        &copy; {currentYear} Amulya. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
