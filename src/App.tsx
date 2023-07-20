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

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary relative">
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          <Navbar />
          <Hero />
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
