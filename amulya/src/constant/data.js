import {
  RiBuilding2Line,
  RiFileCheckLine,
  RiCalculatorLine,
  RiArrowUpLine,
  RiShieldCheckLine,
  RiUser3Line,
  RiFacebookFill,
  RiInstagramLine,
  RiWhatsappLine,
  RiLinkedinBoxFill,
} from 'react-icons/ri';

export const headerData = {
  title: "Empowering Your Business with Expert Legal and Financial Services",
  description: "From company registration to advisory and audit, we help businesses start, scale, and stay compliant with expert guidance every step of the way.",
};

export const services = [
  {
    icon: RiBuilding2Line,
    title: 'Company Registration',
    description: 'Complete company formation services including documentation, compliance, and legal structuring for your business.',
    features: ['Private Limited Company', 'LLP Registration', 'Partnership Firm', 'Sole Proprietorship'],
  },
  {
    icon: RiFileCheckLine,
    title: 'Audit & Assurance',
    description: 'Comprehensive audit services ensuring compliance with regulations and providing financial transparency.',
    features: ['Statutory Audit', 'Internal Audit', 'Tax Audit', 'GST Audit'],
  },
  {
    icon: RiCalculatorLine,
    title: 'Taxation Services',
    description: 'Expert tax planning, filing, and compliance services for individuals and businesses.',
    features: ['Income Tax Filing', 'GST Services', 'TDS Compliance', 'Tax Planning'],
  },
  {
    icon: RiArrowUpLine,
    title: 'Business Advisory',
    description: 'Strategic business consulting to help your company grow and achieve its financial goals.',
    features: ['Financial Planning', 'Business Strategy', 'Investment Advisory', 'Risk Management'],
  },
  {
    icon: RiShieldCheckLine,
    title: 'Legal Compliance',
    description: 'Ensure your business stays compliant with all legal requirements and regulatory changes.',
    features: ['ROC Compliance', 'Annual Filings', 'Board Meetings', 'Regulatory Updates'],
  },
  {
    icon: RiUser3Line,
    title: 'Corporate Services',
    description: 'End-to-end corporate solutions including company updates, closures, and restructuring.',
    features: ['Company Closure', 'Name Change', 'Share Transfer', 'Director Changes'],
  },
];

export const companyInfo = {
  name: "Amulya",
  tagline: "Business Consultant Pvt.Ltd",
  description: "We are specialized in setting up businesses and providing operational services to help you succeed in today's competitive market.",
  address: {
    street: "Thamel, Kathmandu",
    city: "Kathmandu",
    country: "Nepal"
  },
  contact: {
    phone: "+977 9819671738",
    email: "info@amulyabiz.com.np"
  }
};

export const socialLinks = [
  { icon: RiFacebookFill, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
  { icon: RiInstagramLine, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
  { icon: RiWhatsappLine, href: '#', label: 'WhatsApp', color: 'hover:text-green-500' },
  { icon: RiLinkedinBoxFill, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export const stats = [
  { number: "10+", label: "Years of Experience" },
  { number: "3000+", label: "Projects Completed" },
  { number: "4000+", label: "Happy Clients" },
];