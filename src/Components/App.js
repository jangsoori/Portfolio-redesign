import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";

export default function App() {
  return (
    <div className="app" style={{ position: "relative" }}>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}
