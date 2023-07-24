import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Navbar,
  Contact,
  Feedbacks,
  Experience,
  Tech,
  Works,
  StarsCanvas,
  ParticleRing,
} from "./components";
import { motion, useScroll } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

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
          <ParticleRing />
        </div>
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
