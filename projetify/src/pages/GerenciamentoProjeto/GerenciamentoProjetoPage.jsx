import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import "../../styles/gerenciamento_projeto.css";

function GerenciamentoProjetoPage() {
  const [activeTab, setActiveTab] = useState("detalhes");

  return (
    <MainLayout isDashboardPage={true}>
      <div className="main-content">
        <div className="page-header">
          <h1>Gerenciamento de Projeto</h1>
          <p>Gerencie detalhes, alunos e entregas do projeto específico</p>
        </div>

        <div className="project-header">
          <h2 className="project-title" id="project-name">
            Sistema de Gestão Acadêmica
          </h2>
          <p id="project-description">
            Desenvolvimento de um sistema completo para gestão acadêmica com
            módulos para alunos, professores e administração.
          </p>
          <div className="project-info">
            <div className="info-item">
              <span className="info-label">Empresa</span>
              <span className="info-value" id="project-company">
                Tech Solutions
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Data de Início</span>
              <span className="info-value" id="project-start-date">
                01/09/2023
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Data de Término</span>
              <span className="info-value" id="project-end-date">
                15/12/2023
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Alunos Envolvidos</span>
              <span className="info-value" id="project-students">
                3
              </span>
            </div>
          </div>
        </div>

        <div className="tabs-system">
          <div className="tabs">
            <label
              className={activeTab === "detalhes" ? "tab active" : "tab"}
              onClick={() => setActiveTab("detalhes")}
            >
              Detalhes
            </label>
            <label
              className={activeTab === "alunos" ? "tab active" : "tab"}
              onClick={() => setActiveTab("alunos")}
            >
              Alunos
            </label>
            <label
              className={activeTab === "entregas" ? "tab active" : "tab"}
              onClick={() => setActiveTab("entregas")}
            >
              Entregas
            </label>
            <label
              className={activeTab === "avaliacoes" ? "tab active" : "tab"}
              onClick={() => setActiveTab("avaliacoes")}
            >
              Avaliações
            </label>
          </div>

          <div className="tab-content">
            {activeTab === "detalhes" && (
              <div className="section">
                <h3 className="section-title">Informações do Projeto</h3>
                <form>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="projeto-nome">Nome do Projeto</label>
                      <input
                        type="text"
                        id="projeto-nome"
                        className="table-input"
                        defaultValue="Sistema de Gestão Acadêmica"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="projeto-empresa">Empresa</label>
                      <input
                        type="text"
                        id="projeto-empresa"
                        className="table-input"
                        defaultValue="Tech Solutions"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="projeto-descricao">Descrição</label>
                    <textarea
                      id="projeto-descricao"
                      className="table-input"
                      defaultValue="Desenvolvimento de um sistema completo..."
                    ></textarea>
                  </div>
                  <button type="button" className="btn btn-primary">
                    Salvar Alterações
                  </button>
                </form>
              </div>
            )}

            {activeTab === "alunos" && (
              <div className="section">
                <h3 className="section-title">Alunos Envolvidos</h3>
                <ul className="student-list">
                  <li className="student-item">
                    <div className="student-info">
                      <div className="student-avatar">AM</div>
                      <div className="student-details">
                        <h4>Ana Mendes</h4>
                        <p>Engenharia de Software - 5º período</p>
                      </div>
                    </div>
                    <div className="action-buttons">
                      <button className="btn btn-danger btn-small">
                        Remover
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "entregas" && (
              <div className="section">
                <h3 className="section-title">Entregas do Projeto</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Entrega</th>
                      <th>Data Prevista</th>
                      <th>Status</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Documentação de Requisitos</td>
                      <td>2023-09-15</td>
                      <td>
                        <span className="status status-entregue">Entregue</span>
                      </td>
                      <td>
                        <button className="btn btn-secondary btn-small">
                          Ver
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "avaliacoes" && (
              <div className="section">
                <h3 className="section-title">Avaliações e Feedback</h3>
                <form>
                  <div className="form-group">
                    <label htmlFor="avaliacao-geral">
                      Avaliação Geral do Projeto
                    </label>
                    <textarea
                      id="avaliacao-geral"
                      placeholder="Digite sua avaliação geral..."
                    ></textarea>
                  </div>
                  <button type="button" className="btn btn-primary">
                    Salvar Avaliação
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default GerenciamentoProjetoPage;
