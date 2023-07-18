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

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary relative">
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
      </div>
    </BrowserRouter>
  );
};

export default App;
