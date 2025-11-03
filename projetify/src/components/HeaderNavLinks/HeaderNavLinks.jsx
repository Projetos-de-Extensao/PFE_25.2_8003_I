import React from "react";
import { Link } from 'react-router-dom';
import "./headerNavLinks.css";

function HeaderNavLinks({ showLogout = false }) {
  return (
    <ul className="header-nav-links">
      {showLogout ? (
        <>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
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
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cadastro" className="nav-link">
              Cadastre-se
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link login-link">
              Login
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}

export default HeaderNavLinks;
