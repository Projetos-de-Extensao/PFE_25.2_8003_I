import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <nav>
        <h2>Projetify</h2>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#dashboard">Dashboard</a>
          </li>
          <li>
            <a href="#cadastro">Cadastre-se</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
