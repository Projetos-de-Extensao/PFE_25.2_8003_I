import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Link } from "react-router-dom";
import "../../styles/dashboard_professor.css";

function DashboardProfessorPage() {
  const [projetos, setProjetos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProject = () => {
      fetch("http://localhost:3000/projetos")
        .then((response) => response.json())
        .then((data) => {
          console.log("Projetos carregados:", data.length);
          const mapped = data.map((projeto) => ({
            id: projeto.id,
            titulo: projeto.titulo,
            responsavel: projeto.responsavel,
            prazo: projeto.prazo,
            progresso: projeto.progresso,
            status: projeto.status,
            disciplina: projeto.disciplina,
            imagem: projeto.imagem,
          }));

          console.log("Projetos mapped", mapped);
          setProjetos(mapped);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Erro ao carregar projetos:", error);
          setIsLoading(false);
        });
    };
    loadProject();
  }, []);

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
            <div className="card-value">4</div>
            <div className="card-description">
              +2 em relação ao mês anterior
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-title">Alunos Orientados</div>
              <div className="card-icon bg-amarelo">👥</div>
            </div>
            <div className="card-value">20</div>
            <div className="card-description">Distribuídos em 4 projetos</div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-title">Avaliações Pendentes</div>
              <div className="card-icon bg-azul">📝</div>
            </div>
            <div className="card-value">4</div>
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
            <div className="cards-container">
              {isLoading ? (
                <p>A carregar projetos...</p>
              ) : projetos.length > 0 ? (
                projetos.slice(4, 8).map((projeto) => (
                  <ProjectCard
                    key={projeto.id}
                    id={projeto.id}
                    titulo={projeto.titulo}
                    imagem={projeto.imagem}
                    progresso={projeto.progresso}
                  >
                    <p>
                      <strong>Responsável:</strong> {projeto.responsavel}
                    </p>
                    <p>
                      <strong>Disciplina:</strong> {projeto.disciplina}
                    </p>
                    <p>
                      <strong>Prazo:</strong> {projeto.prazo}
                    </p>
                    <p>
                      <strong>Status:</strong> {projeto.status}
                    </p>
                  </ProjectCard>
                ))
              ) : (
                <p>Nenhum projeto encontrado.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default DashboardProfessorPage;
