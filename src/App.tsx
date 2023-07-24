import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Hero,
  Navbar,
  Contact,
  Feedbacks,
  Experience,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { motion, useScroll } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import ParticleRing from "./components/hero/ParticleRing";

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <div>
          <Navbar />
          <div className="relative">
            <Hero />
          </div>
        </div>
        <ParticleRing />
        <About />
        <Experience />
        <div className="relative z-0">
          <Tech />
          <StarsCanvas numOfStars={2000} />
        </div>
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Analytics />
      </div>
    </BrowserRouter>
  );
};

export default App;
