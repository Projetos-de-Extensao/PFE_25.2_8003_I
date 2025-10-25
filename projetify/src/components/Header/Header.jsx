import React from "react";
import Logo from "../Logo/Logo";
import HeaderNavLinks from "../HeaderNavLinks/HeaderNavLinks"; 
import "./header.css";
// Recebe a prop 'showLogout' do MainLayout
function Header({ showLogout = false }) {
  return (
    <header>
      <nav className="header-nav-container"> 
        <Logo />

        
        <HeaderNavLinks showLogout={showLogout} />

      </nav>
    </header>
  );
}

export default Header;