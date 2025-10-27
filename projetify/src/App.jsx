import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";

import HomePage from "./pages/Home/HomePage";
import CadastroUsuarioPage from "./pages/CadastroUsuario/CadastroUsuarioPage";
import LoginPage from "./pages/Login/LoginPage";
import CadastroProjetoPage from "./pages/CadastroProjeto/CadastroProjetoPage";
import DashboardEmpresaPage from "./pages/DashboardEmpresa/DashboardEmpresaPage";
import DashboardCoordenacaoPage from "./pages/DashboardCoordenacao/DashboardCoordenacaoPage";
import DashboardProfessorPage from "./pages/DashboardProfessor/DashboardProfessorPage";
import GerenciamentoProjetoPage from "./pages/GerenciamentoProjeto/GerenciamentoProjetoPage";
import DashboardAlunoPage from "./pages/DashboardAluno/DashboardAlunoPage";
import ProjetoPage from "./pages/Projeto/ProjetoPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro-usuario" element={<CadastroUsuarioPage />} />
        <Route path="/cadastro-projeto" element={<CadastroProjetoPage />} />
        <Route path="/dashboard-empresa" element={<DashboardEmpresaPage />} />
        <Route path="/dashboard-coordenacao" element={<DashboardCoordenacaoPage />} />
        <Route path="/dashboard-professor" element={<DashboardProfessorPage />} />
        <Route path="/dashboard-aluno" element={<DashboardAlunoPage />} />
        <Route path="/gerenciamento-projeto" element={<GerenciamentoProjetoPage />} />
        <Route path="/projeto/:id" element={<ProjetoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
