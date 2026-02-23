import React from 'react';
import { Routes, Route } from 'react-router-dom';


import HomePage from './pages/Home/HomePage';
import CadastroUsuarioPage from './pages/CadastroUsuario/CadastroUsuarioPage';
import LoginPage from './pages/Login/LoginPage';
import CadastroProjetoPage from './pages/CadastroProjeto/CadastroProjetoPage';
import DashboardAlunoPage from './pages/DashboardAluno/DashboardAlunoPage';
import DashboardEmpresaPage from './pages/DashboardEmpresa/DashboardEmpresaPage';
import DashboardCoordenacaoPage from './pages/DashboardCoordenacao/DashboardCoordenacaoPage';
import DashboardProfessorPage from './pages/DashboardProfessor/DashboardProfessorPage';
import GerenciamentoProjetoPage from './pages/GerenciamentoProjeto/GerenciamentoProjetoPage';
import ProjetoPage from './pages/Projeto/ProjetoPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<CadastroUsuarioPage />} />
      
     
      {/*<Route path="/dashboard" element={<DashboardAlunoPage />} />*/}
      <Route path="/dashboard-aluno" element={<DashboardAlunoPage />} />
      <Route path="/dashboard" element={<DashboardEmpresaPage />} />
      <Route path="/dashboard-coordenacao" element={<DashboardCoordenacaoPage />} />
      <Route path="/dashboard-professor" element={<DashboardProfessorPage />} />

      
      <Route path="/cadastro-projeto" element={<CadastroProjetoPage />} />
      <Route path="/projeto/:id" element={<ProjetoPage />} />
      <Route path="/gerenciamento-projeto/:id" element={<GerenciamentoProjetoPage />} />
    </Routes>
  );
}

export default App;
