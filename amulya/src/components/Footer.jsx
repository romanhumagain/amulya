import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaBuilding,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/images/logo.png";

const Footer = () => {
  const { darkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "#",
      label: "Facebook",
      color: "hover:text-blue-400",
    },
    {
      icon: FaInstagram,
      href: "#",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
    {
      icon: FaWhatsapp,
      href: "#",
      label: "WhatsApp",
      color: "hover:text-green-400",
    },
    {
      icon: FaLinkedinIn,
      href: "#",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <footer
      className={`relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-gradient-to-br from-slate-800 via-slate-900 to-black"
      }`}
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E')",
        }}
      />

      <div className="relative z-10 px-6 py-16 mx-auto max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2"
          >
            {/* Logo */}
            <div className="flex items-center space-x-3">
              {/* <div className="flex items-center justify-center w-10 h-10 rounded-lg shadow-lg bg-gradient-to-br from-blue-500 to-purple-600">
                <FaBuilding className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white">Amulya</h3>
                <p className="text-sm font-medium text-slate-300">Business Consultant</p>
              </div> */}

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <img src={logo} alt="Logo" className="w-12 h-12 md:w-14 md:h-14 invert" />
              </motion.div>
            </div>

            {/* Description */}
            <p className="max-w-lg leading-relaxed text-slate-300">
              We specialize in setting up businesses and providing operational
              services to help you succeed in today's competitive market.
            </p>

            {/* Social Links */}
            <div className="flex pt-2 space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center transition-all duration-300 border rounded-lg w-9 h-9 bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/50"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 transition-colors duration-300 text-slate-300 hover:text-white" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="flex items-center transition-all duration-300 text-slate-300 hover:text-white group"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 transition-all duration-300 transform -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-4">
              {/* Phone */}
              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-center space-x-3 group"
              >
                <div className="flex items-center justify-center w-8 h-8 transition-all duration-300 border rounded-lg bg-slate-800/50 border-slate-700/50 group-hover:border-slate-600/50">
                  <FaPhoneAlt className="w-3.5 h-3.5 text-slate-300" />
                </div>
                <div>
                  <p className="text-xs tracking-wide uppercase text-slate-400">
                    Phone
                  </p>
                  <a
                    href="tel:+9779819671738"
                    className="text-sm font-medium text-white transition-colors hover:text-blue-400"
                  >
                    +977 9819671738
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-center space-x-3 group"
              >
                <div className="flex items-center justify-center w-8 h-8 transition-all duration-300 border rounded-lg bg-slate-800/50 border-slate-700/50 group-hover:border-slate-600/50">
                  <FaEnvelope className="w-3.5 h-3.5 text-slate-300" />
                </div>
                <div>
                  <p className="text-xs tracking-wide uppercase text-slate-400">
                    Email
                  </p>
                  <a
                    href="mailto:info@amulyabiz.com.np"
                    className="text-sm font-medium text-white break-all transition-colors hover:text-blue-400"
                  >
                    info@amulyabiz.com.np
                  </a>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-start space-x-3 group"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800/50 border border-slate-700/50 group-hover:border-slate-600/50 transition-all duration-300 mt-0.5">
                  <FaMapMarkerAlt className="w-3.5 h-3.5 text-slate-300" />
                </div>
                <div>
                  <p className="text-xs tracking-wide uppercase text-slate-400">
                    Address
                  </p>
                  <p className="text-sm font-medium leading-tight text-white">
                    Thamel (opposite Chhya Center),<br></br> Kathmandu, Nepal
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-slate-700/50 bg-slate-900/30">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-center text-slate-400">
              © {currentYear} Amulya Business Consultant Pvt. Ltd.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="transition-colors text-slate-400 hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="transition-colors text-slate-400 hover:text-white"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
