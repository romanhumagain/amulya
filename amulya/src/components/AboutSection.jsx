import { motion } from "framer-motion";
import { RiGroupLine } from "react-icons/ri";
// Make sure this icon exists in your react-icons version
import { useTheme } from "../context/ThemeContext";
// import banner_image from "../assets/images/banner_img2.png";
import banner_image from "../assets/images/banner_image.webp";

const AboutSection = () => {
  const { darkMode } = useTheme();

  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "3000+", label: "Projects Completed" },
    { number: "4000+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className={``}>
      {/* Stats Section */}
      <div className="py-10 mb-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="mb-2 text-4xl font-bold lg:text-5xl">
                  {stat.number}
                </div>
                <div className="text-lg font-medium opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl px-4 py-32 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={banner_image}
              alt="About Us"
              className="object-cover w-full h-full rounded-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 "
          >
            <h2
              className={`text-4xl lg:text-5xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              About Us
            </h2>

            <div className="space-y-4">
              <p
                className={`text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <span className="font-semibold text-blue-600">
                  Amulya Business Consultant
                </span>{" "}
                is your trusted partner for navigating the complexities of
                company formation, audits, and financial decisions.
              </p>

              <p
                className={`text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                We simplify the process and provide clear, compliant, and
                confident guidance at every step of your business journey.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              View More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
