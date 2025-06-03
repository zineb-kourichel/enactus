import { Link } from "react-router-dom";
import "../custom.scss"
import React, { useState } from "react";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="burger" onClick={toggleMenu}>
          <span className={isOpen ? "open" : ""}></span>
          <span className={isOpen ? "open" : ""}></span>
          <span className={isOpen ? "open" : ""}></span>
        </div>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/">Accueil</Link>
          <Link to="/Apropos">À propos</Link>
          <Link to="/nosprojets">Nos projets</Link>
          <Link to="/Evenement">Événement</Link>
          <Link to="/JoinUs2">
            <button>Rejoignez-nous</button>
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
