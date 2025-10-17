import React from "react";

import HomePage from "./pages/Home/HomePage";
import CadastroPage from "./pages/Cadastro/CadastroPage";
import LoginPage from "./pages/Login/LoginPage";
import CadastroProjetoPage from './pages/CadastroProjeto/CadastroProjetoPage';
import DashboardEmpresaPage from './pages/DashboardEmpresa/DashboardEmpresaPage';
// ... e assim por diante para todas as suas páginas

function App() {
  // return <HomePage />;
  // return <CadastroPage />;
  // return <LoginPage />;
  // return <CadastroProjetoPage />;
  return <DashboardEmpresaPage />;
}

export default App;
