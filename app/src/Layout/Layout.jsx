import React from "react";
import "./Layout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Layout = () => {
  return (
    <div>
      <Header />

      <main className="landingpage-container">
        <Hero />
        <div className="content-container">
          <About id="about" />
          <Projects id="projects" />
        </div>
        <Contact id="contact" />
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
