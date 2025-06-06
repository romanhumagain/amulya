import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./pages/HomePage.jsx";
import { Navbar } from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ServicesSection from "./components/ServiceSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import Footer from "./components/Footer.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <ThemeProvider>
      <Router>
        {loading ? (
          <SplashScreen finishLoading={() => setLoading(false)} />
        ) : (
          <div className="min-h-screen transition-colors bg-white dark:bg-gray-950 font-poppins">
            <Navbar />

            <Routes>
              <Route path="/" element={<LandingPage />} />
            </Routes>
            <Footer />
          </div>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
