import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Layout Components
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";

// Page Components
import Hero from "./Components/Hero.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import Services from "./Components/Services.jsx";
import WhyPRSparkz from "./Components/WhyPRSparkz.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import Team from "./Components/Team.jsx";

// UI Components
import Testimonials from "./Components/Testimonials.jsx";
import ContactForm from "./Components/ContactForm.jsx";
import Loading from "./Components/Loading.jsx";

// 3D Scene
import ThreeScene from "./Components/ThreeScene.jsx";

// Utility Components
import ScrollToTop from "./Components/ScrollToTop.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [threeSceneLoaded, setThreeSceneLoaded] = useState(false);

  useEffect(() => {
    // Simulate progress with increasing intervals
    const intervals = [300, 500, 700, 900, 1200];
    let currentProgress = 0;

    intervals.forEach((interval, index) => {
      setTimeout(() => {
        currentProgress = ((index + 1) / intervals.length) * 100;
        setProgress(currentProgress);
        
        // When we reach the final interval, check if we can finish loading
        if (index === intervals.length - 1) {
          setProgress(100);
          // Give ThreeScene a moment to load, but don't wait indefinitely
          setTimeout(() => {
            setLoading(false);
          }, 100);
        }
      }, interval);
    });

    // Fallback - always stop loading after 3 seconds max
    const fallbackTimer = setTimeout(() => {
      setLoading(false);
    }, 8000);

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Handle ThreeScene loading separately
  useEffect(() => {
    if (threeSceneLoaded && progress >= 100) {
      // If both are ready, finish loading
      setLoading(false);
    }
  }, [threeSceneLoaded, progress]);

  if (loading) {
    return <Loading progress={progress} />;
  }

  return (
    <div className="font-sans bg-black text-white relative">
      {/* 3D Background Layer - Fixed z-index */}
      <div className="fixed inset-0 -z-10">
        <ThreeScene onLoaded={() => setThreeSceneLoaded(true)} />
      </div>

      {/* Content Layer - Higher z-index */}
      <div className="relative z-10">
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <WhyPRSparkz />
                <Testimonials />
                <ContactForm />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
