import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="app" style={{ position: "relative" }}>
      <Navbar />
      <Hero />
    </div>
  );
}
