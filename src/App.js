import React from "react";
import { ContactUs } from "./contactUs";
import { About } from "./about";
import { Projects } from "./projects";
import { FixedContent } from "./fixedContent";
import { Footer } from "./footer";
import { Home } from "./home";
import "./App.css";
import { NavBar } from "./NavBar";

function App() {
  return (
    <>
      <div className="layout">
        <FixedContent />
        <div className="Home" id="Home">
          <NavBar />
          <Home />
        </div>
        <div className="About" id="About">
          <About />
        </div>
        <div className="Projects" id="Projects">
          <Projects />
        </div>
        <div className="ContactUs" id="ContactUs">
          <ContactUs />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
