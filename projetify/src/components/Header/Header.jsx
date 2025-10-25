import React from "react";
import "./header.css";
import Logo from "../Logo/logo";

function Header() {
  return (
    <header>
      <nav> 
        <Logo/>
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
