import React from "react";
import { Link } from "react-router-dom";

const navStyle = {
  padding: "8px 16px",
  background: "#f5f5f5",
  borderBottom: "1px solid #ddd",
};

const linkStyle = {
  marginRight: 12,
  textDecoration: "none",
  color: "#333",
};

export default function NavBar() {
  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/login" style={linkStyle}>
        Login
      </Link>
      <Link to="/cadastro-usuario" style={linkStyle}>
        Cadastro
      </Link>
      <Link to="/cadastro-projeto" style={linkStyle}>
        Novo Projeto
      </Link>
      <Link to="/dashboard-empresa" style={linkStyle}>
        Dashboard Empresa
      </Link>
    </nav>
  );
}
