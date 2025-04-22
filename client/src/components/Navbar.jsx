import React from "react";
import "../styles/Navbar.css"; // Import styles
import Logo from "../assets/logo.jpg"
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" className="logo" />
    </nav>
  );
};

export default Navbar;
