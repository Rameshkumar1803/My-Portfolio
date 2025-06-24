import React from "react";

const Header = () => (
  <header style={{ backgroundColor: "white", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", position: "sticky", top: 0, zIndex: 50 }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1>My Portfolio</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;