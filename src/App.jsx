import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";



function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      
      <Header />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Testimonials />
      <Contact />

    </div>
  );
}
export default App;
