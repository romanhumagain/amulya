import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import { Navbar } from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ServicesSection from "./components/ServiceSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import Footer from "./components/Footer.jsx";
import LandingPage from "./pages/LandingPage.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen transition-colors bg-white dark:bg-gray-950">
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
