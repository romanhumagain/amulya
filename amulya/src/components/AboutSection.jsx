import { motion, useInView } from "framer-motion";
import { RiGroupLine, RiTrophyLine, RiShieldCheckLine, RiArrowRightLine } from "react-icons/ri";
import { useTheme } from "../context/ThemeContext";
import { useRef, useEffect, useState } from "react";
import banner_image from "../assets/images/banner_image.webp";

const AboutSection = () => {
  const { darkMode } = useTheme();
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, threshold: 0.3 });

  const stats = [
    { number: 10, suffix: "+", label: "Years of Experience", icon: RiTrophyLine },
    { number: 3000, suffix: "+", label: "Projects Completed", icon: RiShieldCheckLine },
    { number: 4000, suffix: "+", label: "Happy Clients", icon: RiGroupLine },
  ];

  const features = [
    "Expert Legal Consultation",
    "Comprehensive Financial Advisory",
    "Seamless Company Registration",
    "Ongoing Compliance Support"
  ];

  // Counter animation component
  const AnimatedCounter = ({ number, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isInView) return;
      
      let startTime;
      const startCount = 0;
      const endCount = number;
      
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(startCount + (endCount - startCount) * easeOutQuart);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [isInView, number, duration]);
    
    return <span>{count.toLocaleString()}{suffix}</span>;
  };

  return (
    <section id="about" className="relative">
      {/* Stats Section - Full Width Blue Gradient */}
      <div className="relative py-8 overflow-hidden" ref={statsRef}>
        {/* Professional Blue Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
          {/* Overlay patterns for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 via-transparent to-blue-800/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute rounded-full w-28 h-28 top-10 left-10 bg-white/5 blur-xl"
          />
          <motion.div
            animate={{ 
              y: [0, 25, 0],
              x: [0, -15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-40 h-40 rounded-full bottom-20 right-20 bg-white/3 blur-2xl"
          />
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.6, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-16 h-16 mb-6 transition-all duration-300 border bg-white/10 backdrop-blur-sm rounded-2xl border-white/20 group-hover:bg-white/15"
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </motion.div>
                
                {/* Animated Number */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-4 text-3xl font-bold text-white lg:text-5xl"
                >
                  <AnimatedCounter 
                    number={stat.number} 
                    suffix={stat.suffix}
                    duration={2000 + index * 300}
                  />
                </motion.div>
                
                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.7, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-lg font-medium text-white/90"
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main About Content */}
      <div className={`px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 group lg:order-1"
          >
            {/* Floating background */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 1, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -inset-6 rounded-3xl opacity-20 blur-2xl bg-gradient-to-br from-blue-500 to-blue-700"
            />
            
            <div className="relative">
              <img
                src={banner_image}
                alt="About Amulya Business Consultant"
                className="relative z-10 object-cover w-full transition-all duration-500 shadow-2xl rounded-2xl group-hover:shadow-blue-500/20 group-hover:scale-[1.02]"
              />
              
              {/* Decorative elements */}
              <div className="absolute w-32 h-32 border-2 border-dashed -bottom-6 -right-6 rounded-2xl border-blue-500/40 -z-10" />
              <div className="absolute w-24 h-24 rounded-full -top-4 -left-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl -z-10" />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 space-y-8 lg:order-2"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex"
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${
                darkMode 
                  ? "bg-blue-900/30 text-blue-300 border-blue-800/50" 
                  : "bg-blue-50 text-blue-700 border-blue-200/50"
              }`}>
                <RiShieldCheckLine className="w-4 h-4" />
                About Our Company
              </div>
            </motion.div>

            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}>
              Your Trusted Business
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Growth Partner
              </span>
            </h2>

            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                <span className="font-semibold text-blue-600">
                  Amulya Business Consultant
                </span>{" "}
                is your trusted partner for navigating the complexities of
                company formation, audits, and financial decisions with over a decade of expertise.
              </p>

              <p className={`text-lg leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                We simplify complex processes and provide clear, compliant, and
                confident guidance at every step of your business journey, ensuring your success is our priority.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-3 h-3 transition-all duration-300 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-400 group-hover:to-blue-500" />
                  <span className={`text-base font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } group-hover:text-blue-600 transition-colors duration-300`}>
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl hover:shadow-xl hover:shadow-blue-500/25 group"
            >
              Learn More About Us
              <RiArrowRightLine className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;