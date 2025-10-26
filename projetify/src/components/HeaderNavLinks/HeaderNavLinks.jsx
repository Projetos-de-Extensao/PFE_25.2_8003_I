import React from "react";
import "./headerNavLinks.css";

function HeaderNavLinks({ showLogout = false }) {
  return (
    <ul className="header-nav-links">
      {showLogout ? (
        <>
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#dashboard" className="nav-link">
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#logout"
              className="nav-link logout-link"
              onClick={() => console.log("Clicou em Sair")}
            >
              Sair
            </a>
          </li>
        </>
      ) : (
        <>
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#cadastro" className="nav-link">
              Cadastre-se
            </a>
          </li>
          <li>
            <a href="#login" className="nav-link login-link">
              Login
            </a>
          </li>
        </>
      )}
    </ul>
  );
}

export default HeaderNavLinks;
