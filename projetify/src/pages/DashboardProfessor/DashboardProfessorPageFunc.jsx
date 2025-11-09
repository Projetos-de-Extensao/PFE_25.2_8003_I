import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { Link } from "react-router-dom";
import "../../styles/dashboard_professor.css";

function DashboardProfessorPage() {
  return (
    <MainLayout isDashboardPage={true}>
      <div className="main-content">
        <div className="page-header">
          <h1>Dashboard Professor</h1>
          <p>Gerencie seus projetos e acompanhe o progresso dos alunos</p>
        </div>

        <div className="stats-cards">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Projetos Ativos</div>
              <div className="card-icon bg-azul">📂</div>
            </div>
            <div className="card-value">12</div>
            <div className="card-description">
              +2 em relação ao mês anterior
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-title">Alunos Orientados</div>
              <div className="card-icon bg-amarelo">👥</div>
            </div>
            <div className="card-value">34</div>
            <div className="card-description">Distribuídos em 12 projetos</div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-title">Avaliações Pendentes</div>
              <div className="card-icon bg-azul">📝</div>
            </div>
            <div className="card-value">5</div>
            <div className="card-description">Precisam de sua atenção</div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-title">Empresas Parceiras</div>
              <div className="card-icon bg-amarelo">🏢</div>
            </div>
            <div className="card-value">8</div>
            <div className="card-description">Colaborando com projetos</div>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h2 className="section-title">Projetos Recentes</h2>
            <a href="#" className="btn btn-primary">
              Ver Todos
            </a>
          </div>

          <div className="table-container">
            <form className="table-form">
              <table>
                <thead>
                  <tr>
                    <th>Nome do Projeto</th>
                    <th>Empresa</th>
                    <th>Alunos</th>
                    <th>Última Atualização</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="text"
                        defaultValue="Sistema de Gestão Acadêmica"
                        className="table-input"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        defaultValue="Tech Solutions"
                        className="table-input"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        defaultValue="3"
                        min="0"
                        className="table-input number-input"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        defaultValue="2023-10-15"
                        className="table-input"
                      />
                    </td>
                    <td>
                      <Link to={"/gerenciamento-projeto/:id"}>
                        <button className="btn btn-primary btn-small">
                          Gerenciar
                        </button>
                      </Link>
                      <button
                        type="submit"
                        className="btn btn-secondary btn-small"
                      >
                        Salvar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        defaultValue="App de Finanças Pessoais"
                        className="table-input"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        defaultValue="Banco Digital"
                        className="table-input"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        defaultValue="4"
                        min="0"
                        className="table-input number-input"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        defaultValue="2023-10-12"
                        className="table-input"
                      />
                    </td>
                    <td>
                      <Link to={"/gerenciamento-projeto/:id"}>
                        <button className="btn btn-primary btn-small">
                          Gerenciar
                        </button>
                      </Link>
                      <button
                        type="submit"
                        className="btn btn-secondary btn-small"
                      >
                        Salvar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        defaultValue="Plataforma E-commerce"
                        className="table-input"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        defaultValue="Varejo Online"
                        className="table-input"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        defaultValue="3"
                        min="0"
                        className="table-input number-input"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        defaultValue="2023-10-10"
                        className="table-input"
                      />
                    </td>
                    <td>
                      <Link to={"/gerenciamento-projeto/:id"}>
                        <button className="btn btn-primary btn-small">
                          Gerenciar
                        </button>
                      </Link>
                      <button
                        type="submit"
                        className="btn btn-secondary btn-small"
                      >
                        Salvar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default DashboardProfessorPage;
