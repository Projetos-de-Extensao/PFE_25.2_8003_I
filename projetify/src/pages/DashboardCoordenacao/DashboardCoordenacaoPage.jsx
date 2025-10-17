import React from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import '../../styles/dashboardco_style.css';

function DashboardCoordenacaoPage() {
  return (
    <MainLayout> {/* Layout padrão, sem centralização */}
      {/* Container que organiza o conteúdo desta página em uma coluna vertical */}
      <div className="dashboard-coordenacao-container">

        <section className="dashboard-overview">
          <h2>Dashboard da Coordenação</h2>
          <div className="overview-cards">
            <div className="overview-card">
              <h3>Projetos Pendentes</h3>
              <p>5</p>
            </div>
            <div className="overview-card">
              <h3>Projetos em Andamento</h3>
              <p>12</p>
            </div>
            <div className="overview-card">
              <h3>Professores Ativos</h3>
              <p>8</p>
            </div>
          </div>
        </section>

        <section className="project-analysis">
          <h3>Análise de Projetos Pendentes</h3>
          <div className="project-list">
            <div className="project-item">
              <div className="project-details">
                <h4>Desenvolvimento de App de Telemedicina</h4>
                <p><strong>Empresa:</strong> Saúde Digital Ltda.</p>
                <p><strong>Descrição:</strong> Criação de um aplicativo móvel para agendamento e realização de consultas médicas online, com foco em segurança de dados e usabilidade.</p>
              </div>
              <div className="internal-comment-section">
                <label htmlFor="comment-telemedicina">Comentário Interno:</label>
                <textarea id="comment-telemedicina" className="internal-comment" placeholder="Adicionar observações sobre o projeto"></textarea>
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
                <h4>Plataforma de Gerenciamento de Resíduos</h4>
                <p><strong>Empresa:</strong> EcoTech Soluções Ambientais</p>
                <p><strong>Descrição:</strong> Desenvolvimento de sistema web para rastreamento e gestão de resíduos industriais, otimizando rotas de coleta e relatórios de conformidade.</p>
              </div>
              <div className="internal-comment-section">
                <label htmlFor="comment-residuos">Comentário Interno:</label>
                <textarea id="comment-residuos" className="internal-comment" placeholder="Adicionar observações sobre o projeto"></textarea>
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
                <h4>Sistema de Controle de Qualidade Agrícola</h4>
                <p><strong>Empresa:</strong> Campo Saudável Agro</p>
                <p><strong>Professor:</strong> Prof. Ana Silva</p>
                <p><strong>Status:</strong> Em Desenvolvimento (70% concluído)</p>
              </div>
              <div className="project-actions">
                <button className="btn-view-details">Ver Detalhes</button>
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