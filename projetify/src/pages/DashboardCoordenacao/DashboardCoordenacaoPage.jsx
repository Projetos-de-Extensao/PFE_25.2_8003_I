import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { Link } from "react-router-dom";
import "../../styles/dashboard_coord.css";

function DashboardCoordenacaoPage() {
  return (
    <MainLayout isDashboardPage={true}>
      <div className="dashboard-coordenacao-container">
        <section className="dashboard-overview">
          <h2>Dashboard da Coordenação</h2>
          <div className="overview-cards">
            <div className="overview-card">
              <h3>Projetos Pendentes</h3>
              <p>2</p>
            </div>
            <div className="overview-card">
              <h3>Projetos em Andamento</h3>
              <p>3</p>
            </div>
            <div className="overview-card">
              <h3>Professores Ativos</h3>
              <p>4</p>
            </div>
          </div>
        </section>

        <section className="project-analysis">
          <h3>Análise de Projetos Pendentes</h3>
          <div className="project-list">
            <div className="project-item">
              <div className="project-details">
                <h4>API de Pagamentos "PagueRápido"</h4>
                <p>
                  <strong>Empresa:</strong> Fintech Soluções
                </p>
                <p>
                  <strong>Descrição:</strong> Desenvolver uma API RESTful segura
                  em Node.js para processar transações de cartão de crédito.
                </p>
                <p>
                  <strong>Disciplina:</strong> Back-End
                </p>
              </div>
              <div className="internal-comment-section">
                <label htmlFor="comment-telemedicina">
                  Comentário Interno:
                </label>
                <textarea
                  id="comment-telemedicina"
                  className="internal-comment"
                  placeholder="Adicionar observações sobre o projeto"
                ></textarea>
              </div>
              <div className="project-actions">
                <select className="professor-select">
                  <option value="">Selecionar Professor</option>
                  <option value="prof_ana">Prof. Ana Silva</option>
                  <option value="prof_carlos">Prof. Carlos Mendes</option>
                  <option value="prof_maria">Prof. Maria Costa</option>
                  <option value="prof_joao">Prof. João Oliveira</option>
                </select>
                <button className="btn-approve">Aprovar</button>
                <button className="btn-reject">Recusar</button>
                <button className="btn-adjust">Solicitar Ajustes</button>
              </div>
            </div>

            <div className="project-item">
              <div className="project-details">
                <h4>Sistema de Detecção de Fraude em Transações</h4>
                <p>
                  <strong>Empresa:</strong> Banco Digital InvestMais
                </p>
                <p>
                  <strong>Descrição:</strong> Treinar um modelo de Machine
                  Learning para identificar e bloquear transações financeiras
                  suspeitas.
                </p>
                <p>
                  <strong>Disciplina:</strong> Machine Learning
                </p>
              </div>
              <div className="internal-comment-section">
                <label htmlFor="comment-residuos">Comentário Interno:</label>
                <textarea
                  id="comment-residuos"
                  className="internal-comment"
                  placeholder="Adicionar observações sobre o projeto"
                ></textarea>
              </div>
              <div className="project-actions">
                <select className="professor-select">
                  <option value="">Selecionar Professor</option>
                  <option value="prof_ana">Prof. Ana Silva</option>
                  <option value="prof_carlos">Prof. Carlos Mendes</option>
                  <option value="prof_maria">Prof. Maria Costa</option>
                  <option value="prof_joao">Prof. João Oliveira</option>
                </select>
                <button className="btn-approve">Aprovar</button>
                <button className="btn-reject">Recusar</button>
                <button className="btn-adjust">Solicitar Ajustes</button>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-in-progress">
          <h3>Projetos em Andamento</h3>
          <div className="project-list">
            <div className="project-item in-progress">
              <div className="project-details">
                <h4>Dashboard de Análise de Vendas</h4>
                <p>
                  <strong>Empresa:</strong> Nexus Dados & Analytics Ltda
                </p>
                <p>
                  <strong>Professor:</strong> Prof. Elisa Fernandes
                </p>
                <p>
                  <strong>Status:</strong> Em Desenvolvimento (50% concluído)
                </p>
              </div>
              <div className="project-actions">
                <Link to={"/projeto/:id"}>
                  <button className="btn-view-details">Ver Detalhes</button>
                </Link>
                <button className="btn-complete">Concluir Projeto</button>
              </div>
              <div className="project-details">
                <h4>Implementação de VPN e Topologia de Rede</h4>
                <p>
                  <strong>Empresa:</strong> ConectaSafe Infraestrutura
                </p>
                <p>
                  <strong>Professor:</strong> Prof. Fábio Rocha
                </p>
                <p>
                  <strong>Status:</strong> Em Desenvolvimento (75% concluído)
                </p>
              </div>
              <div className="project-actions">
                <Link to={"/projeto/:id"}>
                  <button className="btn-view-details">Ver Detalhes</button>
                </Link>
                <button className="btn-complete">Concluir Projeto</button>
              </div>
              <div className="project-details">
                <h4>Autenticação e Microsserviços</h4>
                <p>
                  <strong>Empresa:</strong> DevCore Soluções Digitais
                </p>
                <p>
                  <strong>Professor:</strong> Prof. Glória Santos
                </p>
                <p>
                  <strong>Status:</strong> Em Desenvolvimento (10% concluído)
                </p>
              </div>
              <div className="project-actions">
                <Link to={"/projeto/:id"}>
                  <button className="btn-view-details">Ver Detalhes</button>
                </Link>
                <button className="btn-complete">Concluir Projeto</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default DashboardCoordenacaoPage;
