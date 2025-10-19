import React, { useState, useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import '../../styles/dashboard_style.css';

function DashboardAlunoPage() {
  const [alunoNome, setAlunoNome] = useState("Aluno");

  useEffect(() => {
    const nomeSalvo = localStorage.getItem("alunoNome");
    if (nomeSalvo) {
      setAlunoNome(nomeSalvo);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Atualização enviada com sucesso!");
    event.target.reset();
  };

  return (
    <MainLayout>
      <div className="dashboard-aluno-container">
        <section className="boas-vindas">
          <h2>Bem-vindo(a), <span id="nomeAluno">{alunoNome}</span> 👋</h2>
          <p>Aqui estão seus projetos e seu progresso dentro da plataforma.</p>
        </section>

        <section className="projetos">
          <h3>Seus Projetos</h3>
          <div className="cards-container">
            <div className="card">
              <h4>Projeto Integrador - App Sustentável</h4>
              <p><strong>Orientador:</strong> Prof. Carlos Souza</p>
              <div className="progresso">
                <div className="barra">
                  <div className="preenchimento" style={{ width: '70%' }}></div>
                </div>
                <span>70% Concluído</span>
              </div>
              <button className="btn-detalhes">Ver Detalhes</button>
            </div>

            <div className="card">
              <h4>Sistema de Agendamento Escolar</h4>
              <p><strong>Orientador:</strong> Prof. Ana Pereira</p>
              <div className="progresso">
                <div className="barra">
                  <div className="preenchimento" style={{ width: '45%' }}></div>
                </div>
                <span>45% Concluído</span>
              </div>
              <button className="btn-detalhes">Ver Detalhes</button>
            </div>
            
            <div className="card">
              <h4>Plataforma de Doações Online</h4>
              <p><strong>Orientador:</strong> Prof. João Lima</p>
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

        <section className="atualizacoes">
          <h3>Enviar Atualização</h3>
          <form id="formAtualizacao" onSubmit={handleSubmit}>
            <textarea
              id="mensagem"
              placeholder="Escreva aqui o progresso ou observações do seu projeto..."
              required
            ></textarea>
            <button type="submit" className="btn-enviar">Enviar</button>
          </form>
        </section>
      </div>
    </MainLayout>
  );
}

export default DashboardAlunoPage;