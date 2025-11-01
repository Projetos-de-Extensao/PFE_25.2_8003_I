import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "../../styles/dashboard_empresa.css";

function DashboardEmpresaPage() {
  const empresaNome = localStorage.getItem("empresaNome") || "Empresa";
  const [projetos, setProjetos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("A buscar projetos da empresa...");
    setIsLoading(true);
    setTimeout(() => {
      const dadosExemplo = [
        {
          id: 1,
          titulo: "Sistema de Gestão Interna",
          responsavel: "Maria Silva",
          prazo: "15/12/2025",
          progresso: 70,
          status: "Em Andamento",
        },
        {
          id: 2,
          titulo: "Portal do Cliente",
          responsavel: "João Santos",
          prazo: "30/11/2025",
          progresso: 45,
          status: "Em Andamento",
        },
        {
          id: 3,
          titulo: "App Mobile Corporativo",
          responsavel: "Ana Costa",
          prazo: "20/01/2026",
          progresso: 90,
          status: "Em Testes",
        },
        {
          id: 4,
          titulo: "Análise de Mercado IA",
          responsavel: "Equipa Inovação",
          prazo: "10/10/2025",
          progresso: 15,
          status: "Planeamento",
        },
        {
          id: 5,
          titulo: "Otimização Logística",
          responsavel: "Pedro Almeida",
          prazo: "01/03/2026",
          progresso: 5,
          status: "Pendente Aprovação",
        },
      ];
      setProjetos(dadosExemplo);
      setIsLoading(false);
      console.log("Projetos da empresa carregados.");
    }, 1200);
  }, []);

  const handleVerDetalhes = (id) => {
    console.log("Ver detalhes do projeto:", id);
  };

  return (
    <MainLayout isDashboardPage={true}>
      <div className="dashboard-empresa-container">
        <section className="boas-vindas">
          <h2>
            Bem-vindo(a), <span id="nomeEmpresa">{empresaNome}</span> 👋
          </h2>
          <p>
            Aqui está uma visão geral dos seus projetos, equipe e desempenho na
            plataforma.
          </p>
        </section>

        <div className="estatisticas">
          <div className="card-estatistica">
            <h3>
              {isLoading
                ? "..."
                : projetos.filter(
                    (p) =>
                      p.status !== "Finalizado" &&
                      p.status !== "Pendente Aprovação"
                  ).length}
            </h3>
            <p>Projetos Ativos</p>
          </div>
          <div className="card-estatistica">
            <h3>8</h3>
            <p>Colaboradores</p>
          </div>
          <div className="card-estatistica">
            <h3>
              {isLoading
                ? "..."
                : projetos.filter((p) => p.status === "Pendente Aprovação")
                    .length}
            </h3>
            <p>Projetos Pendentes</p>
          </div>
          <div className="card-estatistica">
            <h3>4</h3>
            <p>Projetos Finalizados</p>
          </div>
        </div>

        <section className="projetos">
          <h3>Seus Projetos</h3>
          <button className="botao-cadastro">Cadastrar novo Projeto</button>
          <div className="cards-container">
            {isLoading ? (
              <p>A carregar projetos...</p>
            ) : projetos.length > 0 ? (
              projetos.map((projeto) => (
                <ProjectCard
                  key={projeto.id}
                  title={projeto.titulo}
                  responsible={projeto.responsavel}
                  progress={projeto.progresso}
                  status={projeto.status}
                  onDetailsClick={() => handleVerDetalhes(projeto.id)}
                >
                  <p>
                    <strong>Prazo:</strong> {projeto.prazo}
                  </p>
                </ProjectCard>
              ))
            ) : (
              <p>Nenhum projeto encontrado.</p>
            )}
          </div>
        </section>

        <section className="equipe">
          <h3>Equipe</h3>
          <div className="equipe-container">
            <div className="membro-equipe">
              <img
                src="https://randomuser.me/api/portraits/women/32.jpg"
                alt="Maria Silva"
              />
              <h4>Maria Silva</h4>
              <p>Gerente de Projetos</p>
            </div>
            <div className="membro-equipe">
              <img
                src="https://randomuser.me/api/portraits/men/44.jpg"
                alt="João Santos"
              />
              <h4>João Santos</h4>
              <p>Desenvolvedor Sênior</p>
            </div>
            <div className="membro-equipe">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Ana Costa"
              />
              <h4>Ana Costa</h4>
              <p>Designer UX/UI</p>
            </div>
            <div className="membro-equipe">
              <img
                src="https://randomuser.me/api/portraits/men/22.jpg"
                alt="Pedro Almeida"
              />
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
