import React from "react";
import "./App.css";   // ✅ CSS added

import Navbar from "./portofolio/Navbar";
import Home from "./portofolio/Home";
import About from "./portofolio/About";
import Project from "./portofolio/Project";
import Footer from "./portofolio/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;