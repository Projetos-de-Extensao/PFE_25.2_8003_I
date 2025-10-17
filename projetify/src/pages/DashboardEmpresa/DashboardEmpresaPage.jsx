import React from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import '../../styles/dashboard_empresa.css';

function DashboardEmpresaPage() {
  const empresaNome = "Empresa"; 
  return (
    <MainLayout> {/* Layout padrão, sem centralização */}
           <div className="dashboard-empresa-container">
      
        <section className="boas-vindas">
          <h2>Bem-vindo(a), <span id="nomeEmpresa">{empresaNome}</span> 👋</h2>
          <p>Aqui está uma visão geral dos seus projetos, equipe e desempenho na plataforma.</p>
        </section>

        <div className="estatisticas">
          <div className="card-estatistica">
            <h3>12</h3>
            <p>Projetos Ativos</p>
          </div>
          <div className="card-estatistica">
            <h3>8</h3>
            <p>Colaboradores</p>
          </div>
          <div className="card-estatistica">
            <h3>85%</h3>
            <p>Taxa de Conclusão</p>
          </div>
          <div className="card-estatistica">
            <h3>4</h3>
            <p>Projetos Finalizados</p>
          </div>
        </div>

        <section className="projetos">
          <h3>Projetos em Andamento</h3>
          <div className="cards-container">
            <div className="card">
              <h4>Sistema de Gestão Interna</h4>
              <p><strong>Responsável:</strong> Maria Silva</p>
              <p><strong>Prazo:</strong> 15/12/2025</p>
              <div className="progresso">
                <div className="barra">
                  <div className="preenchimento" style={{ width: '70%' }}></div>
                </div>
                <span>70% Concluído</span>
              </div>
              <button className="btn-detalhes">Ver Detalhes</button>
            </div>

            <div className="card">
              <h4>Portal do Cliente</h4>
              <p><strong>Responsável:</strong> João Santos</p>
              <p><strong>Prazo:</strong> 30/11/2025</p>
              <div className="progresso">
                <div className="barra">
                  <div className="preenchimento" style={{ width: '45%' }}></div>
                </div>
                <span>45% Concluído</span>
              </div>
              <button className="btn-detalhes">Ver Detalhes</button>
            </div>

            <div className="card">
              <h4>App Mobile Corporativo</h4>
              <p><strong>Responsável:</strong> Ana Costa</p>
              <p><strong>Prazo:</strong> 20/01/2026</p>
              <div className="progresso">
                <div className="barra">
                  <div className="preenchimento" style={{ width: '90%' }}></div>
                </div>
                <span>90% Concluído</span>
              </div>
              <button className="btn-detalhes">Ver Detalhes</button>
            </div>
          </div>
        </section>

        <section className="equipe">
          <h3>Equipe</h3>
          <div className="equipe-container">
            <div className="membro-equipe">
              <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Maria Silva" />
              <h4>Maria Silva</h4>
              <p>Gerente de Projetos</p>
            </div>
            <div className="membro-equipe">
              <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="João Santos" />
              <h4>João Santos</h4>
              <p>Desenvolvedor Sênior</p>
            </div>
            <div className="membro-equipe">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Ana Costa" />
              <h4>Ana Costa</h4>
              <p>Designer UX/UI</p>
            </div>
            <div className="membro-equipe">
              <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="Pedro Almeida" />
              <h4>Pedro Almeida</h4>
              <p>Analista de Sistemas</p>
            </div>
          </div>
        </section>

      </div>
    </MainLayout>
  );
}

export default DashboardEmpresaPage;